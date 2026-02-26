'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X, ChevronDown, ArrowRight, Home, Briefcase, FileText, Building, MessageSquare, Calendar, Globe, Users } from 'lucide-react';

// Types for better TypeScript support
interface CompanyLink {
  href: string
  label: string
  icon: React.ReactNode
}

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
}

interface HeaderProps { [key: string]: unknown }

// Custom hook for scroll detection with throttling
const useScrollDetection = (threshold: number = 20) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        if (typeof window !== 'undefined') {
          setIsScrolled(window.scrollY > threshold)
        }
      }, 10)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [threshold])

  return isMounted ? isScrolled : false
}

// Custom hook for keyboard navigation
const useKeyboardNavigation = (
  isOpen: boolean,
  onClose: () => void,
  onToggle: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose, onToggle])
}

// Disable body scroll when sidebar is open
const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isLocked) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isLocked])
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'company' | null>(null)
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const isScrolled = useScrollDetection()
  const pathname = usePathname()

  const menuRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Combined convenience state
  const isServicesDropdownOpen = activeDropdown === 'services'
  const isCompanyDropdownOpen = activeDropdown === 'company'

  // Lock body scroll when mobile menu is open
  useBodyScrollLock(isMenuOpen)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = (type: 'services' | 'company') => {
    clearCloseTimeout()
    setActiveDropdown(type)
  }

  const closeDropdownWithDelay = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to bridge gaps
  }

  // Memoized callbacks for better performance
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
    setActiveDropdown(null)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setIsMobileCompanyOpen(false)
    setIsMobileServicesOpen(false)
  }, [])

  const toggleCompanyDropdown = useCallback(() => {
    setActiveDropdown(prev => prev === 'company' ? null : 'company')
  }, [])

  const toggleServicesDropdown = useCallback(() => {
    setActiveDropdown(prev => prev === 'services' ? null : 'services')
  }, [])

  const toggleMobileCompany = useCallback(() => {
    setIsMobileCompanyOpen(prev => !prev)
  }, [])

  const toggleMobileServices = useCallback(() => {
    setIsMobileServicesOpen(prev => !prev)
  }, [])

  // Keyboard navigation hooks
  useKeyboardNavigation(isMenuOpen, closeMenu, toggleMenu)
  useKeyboardNavigation(isCompanyDropdownOpen, () => setActiveDropdown(null), toggleCompanyDropdown)
  useKeyboardNavigation(isServicesDropdownOpen, () => setActiveDropdown(null), toggleServicesDropdown)

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Services dropdown logic
      const isServicesTrigger = (target as HTMLElement).closest('[data-services-trigger]');
      const isCompanyTrigger = (target as HTMLElement).closest('[data-company-trigger]');

      if (
        servicesDropdownRef.current && !servicesDropdownRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target) &&
        !isServicesTrigger && !isCompanyTrigger
      ) {
        setActiveDropdown(null)
      }

      // Mobile sidebar logic
      if (sidebarRef.current && !sidebarRef.current.contains(target) &&
        menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [])

  // Company links without descriptions
  const companyLinks: CompanyLink[] = [
    {
      href: '/about',
      label: 'About Us',
      icon: <Building className="w-5 h-5" />
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: <FileText className="w-5 h-5" />
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ]

  // Service categories for mega-menu
  const serviceCategories = [
    {
      title: 'E-commerce Solutions',
      icon: <Globe className="w-5 h-5" />,
      services: [
        { label: 'E-commerce Assistant', href: '/services/ecommerce-assistant' },
        { label: 'Customer Support', href: '/services/ecommerce-customer-support' },
        { label: 'Graphic Design', href: '/services/ecommerce-graphic-design' },
        { label: 'Inventory Management', href: '/services/ecommerce-inventory-management' },
        { label: 'Product Listing', href: '/services/ecommerce-product-listing' },
        { label: 'Website Design', href: '/services/ecommerce-website-design' },
        { label: 'Description Writing', href: '/services/product-description-writing' },
        { label: 'Image Editing', href: '/services/product-image-editing' },
      ]
    },
    {
      title: 'Development & IT',
      icon: <Briefcase className="w-5 h-5" />,
      services: [
        { label: 'Custom App Development', href: '/services/custom-website-development' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Development Tools', href: '/services/web-development-tools' },
        { label: 'Website Maintenance', href: '/services/website-maintenance-services' },
        { label: 'Landing Pages', href: '/services/high-converting-landing-pages' },
      ]
    },
    {
      title: 'Design & Creative',
      icon: <Globe className="w-5 h-5" />,
      services: [
        { label: 'Branding Materials', href: '/services/business-branding-materials' },
        { label: 'Professional Canva', href: '/services/professional-canva-design' },
        { label: 'SMM Graphics', href: '/services/social-media-graphics' },
        { label: 'Video Editing', href: '/services/video-editing-solutions' },
      ]
    },
    {
      title: 'Marketing & Admin',
      icon: <MessageSquare className="w-5 h-5" />,
      services: [
        { label: 'Content Marketing', href: '/services/content-marketing-solutions' },
        { label: 'Keyword Research', href: '/services/keyword-research-services' },
        { label: 'YouTube SEO', href: '/services/youtube-seo-optimization' },
        { label: 'Data Entry', href: '/services/data-entry-specialists' },
        { label: 'Virtual Assistant', href: '/services/virtual-assistant-support' },
      ]
    }
  ]

  // Navigation items with icons for mobile
  const navItems: NavItem[] = [
    { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '/case-studies', label: 'Case Studies', icon: <FileText className="w-5 h-5" /> },
  ]

  const isActiveLink = (href: string) => {
    return false
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[70] bg-primary-600 text-white px-4 py-2 rounded-lg font-medium"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${isScrolled ? 'border-gray-200 shadow-sm' : 'border-gray-100'
          }`}
        role="banner"
      >
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl transition-all duration-300 relative z-10"
              aria-label="TasksACE - Virtual Assistant Services - Go to homepage"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Image
                  src="/tasksace-logo.png"
                  alt="TasksACE Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 relative z-10"
                  priority
                />
              </div>
              <div className="flex items-center">
                <span className="text-2xl lg:text-3xl text-gray-900 font-inter leading-none">
                  <span className="font-bold">Tasks</span>
                  <span style={{ color: '#ff5e00' }} className="font-normal">ACE</span>
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 ${isActiveLink(item.href)
                    ? 'text-primary-600 bg-primary-50/80 shadow-sm'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                  aria-current={isActiveLink(item.href) ? 'page' : undefined}
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}

              {/* Services Trigger */}
              <div className="relative">
                <button
                  data-services-trigger
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 group ${isServicesDropdownOpen ? 'text-primary-600 bg-primary-50/80' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                  onMouseEnter={() => openDropdown('services')}
                  onMouseLeave={closeDropdownWithDelay}
                  onClick={toggleServicesDropdown}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-all duration-300 ${isServicesDropdownOpen ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'
                      }`}
                  />
                </button>
              </div>

              {/* Company Trigger */}
              <div className="relative">
                <button
                  data-company-trigger
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 group ${isCompanyDropdownOpen ? 'text-primary-600 bg-primary-50/80' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                  onMouseEnter={() => openDropdown('company')}
                  onMouseLeave={closeDropdownWithDelay}
                  onClick={toggleCompanyDropdown}
                  aria-expanded={isCompanyDropdownOpen}
                >
                  <span>Company</span>
                  <ChevronDown
                    size={16}
                    className={`transition-all duration-300 ${isCompanyDropdownOpen ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'
                      }`}
                  />
                </button>
              </div>
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Free Consultation
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>

            <button
              ref={menuRef}
              onClick={toggleMenu}
              className="lg:hidden relative p-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 group z-20"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Full-Width Services Mega-Menu */}
        <div
          ref={servicesDropdownRef}
          className={`absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-350 ease-in-out hidden lg:block ${isServicesDropdownOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ visibility: isServicesDropdownOpen ? 'visible' : 'hidden' }}
          onMouseEnter={() => openDropdown('services')}
          onMouseLeave={closeDropdownWithDelay}
        >
          <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-4 gap-x-10 gap-y-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-900 font-bold text-sm leading-none">
                      {category.title}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {category.services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="group flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200 py-0.5"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-medium">{service.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-sm transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  Explore all 20+ services
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-sm transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  Book free consultation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Company Mega-Menu */}
        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-350 ease-in-out hidden lg:block ${isCompanyDropdownOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          style={{ visibility: isCompanyDropdownOpen ? 'visible' : 'hidden' }}
          onMouseEnter={() => openDropdown('company')}
          onMouseLeave={closeDropdownWithDelay}
        >
          <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-3 gap-10">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block p-6 rounded-2xl hover:bg-orange-50/50 transition-all duration-300 border border-transparent hover:border-orange-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-orange-100 text-orange-600 rounded-xl group-hover:scale-105 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1.5">{link.label}</h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {link.label === 'About Us' && 'Learn about our mission, values and the team behind TasksACE.'}
                        {link.label === 'Blog' && 'Insights, tips and latest updates from the world of virtual assistance.'}
                        {link.label === 'Contact' && 'Get in touch with us for consultations or any inquiries.'}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-primary-600 font-bold text-[11px] uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        ref={sidebarRef}
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[60] lg:hidden transform transition-all duration-500 ease-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <Image
              src="/tasksace-logo.png"
              alt="TasksACE Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain rounded-lg shadow-sm"
            />
            <span className="text-2xl text-gray-900 font-inter leading-none">
              <span className="font-bold">Tasks</span>
              <span style={{ color: '#ff5e00' }} className="font-normal">ACE</span>
            </span>
          </Link>
          <button
            onClick={closeMenu}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          <nav className="px-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${isActiveLink(item.href)
                  ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-orange-50 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                onClick={closeMenu}
              >
                <div className={`${isActiveLink(item.href) ? 'text-primary-500' : 'text-gray-400'}`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Collapsible Services Section */}
            <div className="pt-2">
              <button
                onClick={toggleMobileServices}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="space-y-4 mt-2 ml-4">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <div className="px-4 py-2 text-xs font-bold text-primary-500 uppercase tracking-wider">
                        {category.title}
                      </div>
                      {category.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <span className="font-medium">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary-600 font-bold border border-primary-100 bg-primary-50/30 mx-2"
                    onClick={closeMenu}
                  >
                    <span>View All Services</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={toggleMobileCompany}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Company</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileCompanyOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileCompanyOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="space-y-1 mt-2 ml-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 group"
                      onClick={closeMenu}
                    >
                      <div className="text-gray-400 group-hover:text-primary-500">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-100 p-6">
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            onClick={closeMenu}
          >
            <Calendar className="w-4 h-4" />
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-primary-600">99.9%</span> Success Rate
            </p>
            <p className="text-xs text-gray-400 mt-1">Trusted by 26+ businesses</p>
          </div>
        </div>
      </div>
    </>
  )
}
