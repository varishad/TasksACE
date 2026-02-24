'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X, ChevronDown, ArrowRight, Home, Briefcase, FileText, Building, MessageSquare, Calendar, Globe } from 'lucide-react';

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
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false)
  const isScrolled = useScrollDetection()
  const pathname = usePathname()

  const menuRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when mobile menu is open
  useBodyScrollLock(isMenuOpen)

  // Memoized callbacks for better performance
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
    setIsCompanyDropdownOpen(false)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setIsCompanyDropdownOpen(false)
    setIsMobileCompanyOpen(false)
  }, [])

  const toggleCompanyDropdown = useCallback(() => {
    setIsCompanyDropdownOpen(prev => !prev)
  }, [])

  const toggleMobileCompany = useCallback(() => {
    setIsMobileCompanyOpen(prev => !prev)
  }, [])

  // Keyboard navigation hooks
  useKeyboardNavigation(isMenuOpen, closeMenu, toggleMenu)
  useKeyboardNavigation(isCompanyDropdownOpen, () => setIsCompanyDropdownOpen(false), toggleCompanyDropdown)

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false)
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) &&
        menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  // Navigation items with icons for mobile
  const navItems: NavItem[] = [
    { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '/services', label: 'Services', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/case-studies', label: 'Case Studies', icon: <FileText className="w-5 h-5" /> },
  ]

  const isActiveLink = (href: string) => {
    // Active state disabled - only keep hover effects
    return false
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[70] bg-primary-600 text-white px-4 py-2 rounded-lg font-medium"
      >
        Skip to main content
      </a>

      {/* Glass Effect Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            : '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
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

            {/* Desktop Navigation */}
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
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActiveLink(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-orange-500/10 rounded-xl"></div>
                  )}
                </Link>
              ))}

              {/* Company Dropdown - Clean Version */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 group ${isCompanyDropdownOpen ? 'text-primary-600 bg-primary-50/80' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`}
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  onClick={toggleCompanyDropdown}
                  aria-expanded={isCompanyDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Company menu"
                >
                  <span>Company</span>
                  <ChevronDown
                    size={16}
                    className={`transition-all duration-300 ${isCompanyDropdownOpen ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'
                      }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Clean Dropdown Menu - No Descriptions */}
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden transition-all duration-300 ${isCompanyDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-4'
                    }`}
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  role="menu"
                  aria-label="Company submenu"
                >
                  <div className="p-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-orange-50 rounded-xl transition-all duration-200 font-medium"
                        role="menuitem"
                        tabIndex={isCompanyDropdownOpen ? 0 : -1}
                      >
                        <div className="text-orange-500 transition-colors duration-200">
                          {link.icon}
                        </div>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop CTA Button */}
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

            {/* Modern Mobile Menu Button */}
            <button
              ref={menuRef}
              onClick={toggleMenu}
              className="lg:hidden relative p-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 group z-20"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Professional Mobile Sidebar */}
      <div
        ref={sidebarRef}
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[60] lg:hidden transform transition-all duration-500 ease-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Sidebar Header */}
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
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="px-6 space-y-2">
            {/* Main Navigation */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${isActiveLink(item.href)
                  ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-orange-50 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                onClick={closeMenu}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
              >
                <div className={`${isActiveLink(item.href) ? 'text-primary-500' : 'text-gray-400'} transition-colors duration-200`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
                {isActiveLink(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Collapsible Company Section */}
            <div className="pt-6">
              <button
                onClick={toggleMobileCompany}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 group"
                aria-expanded={isMobileCompanyOpen}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-200" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Company</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileCompanyOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Collapsible Company Links */}
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
                      <div className="text-gray-400 group-hover:text-primary-500 transition-colors duration-200">
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

        {/* Sidebar Footer */}
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

          {/* Quick Info */}
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
