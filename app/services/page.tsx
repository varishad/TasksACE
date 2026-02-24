import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Clock, ArrowRight, CheckCircle, Settings, Star, ClipboardList, ShoppingCart, Palette, TrendingUp, Code, Zap, Headphones } from 'lucide-react';
import Link from 'next/link'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/services')
}

export default function ServicesPage() {
  // Helper function to get correct service category links
  const serviceLinks = {
    0: '/services/administrative',
    1: '/services/ecommerce',
    2: '/services/creative-design',
    3: '/services/digital-marketing',
    4: '/services/web-development'
  }

  const getServiceCategoryLink = (index: number, name: string) => {
    return serviceLinks[index as keyof typeof serviceLinks] || '/services'
  }

  // Helper function to get individual service page links
  const getIndividualServiceLink = (categoryIndex: number, serviceName: string) => {
    // URL mapping based on new flat SEO slugs
    const serviceUrlMap: { [key: string]: string } = {
      // Administrative Services
      'Back-Office Solutions': '/services/back-office-solutions',
      'Data Entry & Management': '/services/data-entry-specialists',
      'Virtual Assistant Support': '/services/virtual-assistant-support',
      'Email Management': '/services/email-management-solutions',
      'Calendar & Scheduling': '/services/calendar-management-services',

      // E-commerce Services
      'Product Upload & Listing': '/services/ecommerce-product-listing',
      'Product Description Writing': '/services/product-description-writing',
      'Product Image Processing': '/services/product-image-editing',
      'Inventory Management': '/services/ecommerce-inventory-management',
      'Customer Support': '/services/ecommerce-customer-support',
      'E-commerce Virtual Assistant': '/services/ecommerce-assistant',

      // Creative & Design Services
      'Graphic Design (Canva)': '/services/professional-canva-design',
      'Business Materials Design': '/services/business-branding-materials',
      'E-commerce Graphics': '/services/ecommerce-graphic-design',
      'Basic Video Editing': '/services/video-editing-solutions',
      'Social Media Content': '/services/social-media-graphics',

      // Digital Marketing Services
      'Copywriting': '/services/copywriting-services',
      'YouTube SEO': '/services/youtube-seo-optimization',
      'Keyword Research': '/services/keyword-research-services',
      'Content Creation': '/services/content-marketing-solutions',
      'Social Media Management': '/services/social-media-management',

      // Web Development Services
      'Custom Website Creation': '/services/custom-website-development',
      'E-commerce Website Development': '/services/ecommerce-website-design',
      'Small Tool Development': '/services/web-development-tools',
      'Landing Page Creation': '/services/high-converting-landing-pages',
      'Website Maintenance': '/services/website-maintenance-services'
    }

    return serviceUrlMap[serviceName] || '/services'
  }

  // Organized service categories
  const serviceCategories = [
    {
      category: "Administrative Services",
      description: "Streamline your daily operations with professional administrative and back-office support",
      icon: ClipboardList,
      color: "bg-gradient-to-r from-primary-500 to-primary-600",
      services: [
        {
          title: "Back-Office Solutions",
          description: "Comprehensive back-office support to handle time-consuming administrative tasks.",
          features: ["Invoice Processing", "HR Data Processing", "Financial Data Entry", "Customer Database Management"]
        },
        {
          title: "Data Entry & Management",
          description: "Accurate and efficient data entry with quality assurance and database management.",
          features: ["CRM Data Entry", "Database Organization", "Data Verification", "Document Processing"]
        },
        {
          title: "Virtual Assistant Support",
          description: "General virtual assistance for various administrative tasks and business support.",
          features: ["Task Management", "Document Preparation", "Research Activities", "Administrative Coordination"]
        },
        {
          title: "Email Management",
          description: "Professional email handling, organization, and response management to keep your inbox organized.",
          features: ["Email Organization", "Response Management", "Follow-up Scheduling", "Priority Filtering"]
        },
        {
          title: "Calendar & Scheduling",
          description: "Complete calendar management and appointment scheduling to optimize your time.",
          features: ["Appointment Scheduling", "Meeting Coordination", "Calendar Organization", "Reminder Management"]
        }
      ]
    },
    {
      category: "E-commerce Solutions",
      description: "Professional product upload and management across Shopify, WooCommerce, Wix, and Magento",
      icon: ShoppingCart,
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      services: [
        {
          title: "Product Upload & Listing",
          description: "Expert product uploading and listing across Shopify, WooCommerce, Wix, and Magento platforms.",
          features: ["Bulk Product Upload", "Product Categorization", "Variant Management", "SKU Organization"]
        },
        {
          title: "Product Description Writing",
          description: "SEO-optimized product descriptions that convert visitors into customers across all platforms.",
          features: ["SEO-Optimized Copy", "Feature Highlighting", "Benefit-Focused Writing", "Keyword Integration"]
        },
        {
          title: "Product Image Processing",
          description: "Professional product image editing and optimization for better visibility and sales.",
          features: ["Image Editing & Enhancement", "Background Removal", "Size Optimization", "Multi-Platform Formatting"]
        },
        {
          title: "Inventory Management",
          description: "Keep your product inventory organized and updated across multiple platforms and channels.",
          features: ["Stock Level Updates", "Inventory Tracking", "Low Stock Alerts", "Multi-Platform Sync"]
        },
        {
          title: "Customer Support",
          description: "Professional customer service for your e-commerce store to enhance satisfaction and loyalty.",
          features: ["Live Chat Support", "Order Inquiries", "Return Management", "Customer Communications"]
        }
      ]
    },
    {
      category: "Creative & Design Services",
      description: "Professional visual content creation using Canva and basic video editing services",
      icon: Palette,
      color: "bg-gradient-to-r from-purple-500 to-violet-600",
      services: [
        {
          title: "Graphic Design (Canva)",
          description: "Professional graphic design using Canva for all your business and marketing needs.",
          features: ["Flyer Design", "Logo Creation", "Banner Design", "Social Media Graphics"]
        },
        {
          title: "Business Materials Design",
          description: "Create professional business materials that represent your brand effectively.",
          features: ["Business Cards", "Presentation Design", "Brochures", "Marketing Materials"]
        },
        {
          title: "E-commerce Graphics",
          description: "Specialized graphics for e-commerce stores including product images and promotional materials.",
          features: ["Product Image Enhancement", "Store Banners", "Promotional Graphics", "Category Images"]
        },
        {
          title: "Basic Video Editing",
          description: "Professional video editing services for social media, products, and promotional content.",
          features: ["Video Trimming & Cutting", "Music Addition", "Basic Color Adjustment", "Social Media Formatting"]
        },
        {
          title: "Social Media Content",
          description: "Create engaging visual content optimized for various social media platforms.",
          features: ["Instagram Posts", "Facebook Graphics", "YouTube Thumbnails", "Story Templates"]
        }
      ]
    },
    {
      category: "Digital Marketing & Content",
      description: "Grow your online presence with expert digital marketing and content creation services",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      services: [
        {
          title: "Copywriting",
          description: "Compelling copy that converts visitors into customers across all marketing channels.",
          features: ["Sales Copy", "Email Sequences", "Landing Pages", "Product Descriptions"]
        },
        {
          title: "YouTube SEO",
          description: "Optimize your YouTube channel and videos for maximum reach and engagement.",
          features: ["Video SEO", "Thumbnail Design", "Tag Optimization", "Channel Growth"]
        },
        {
          title: "Keyword Research",
          description: "In-depth keyword analysis to improve your search rankings and content strategy.",
          features: ["Competitor Analysis", "Search Volume Data", "Keyword Mapping", "Content Strategy"]
        },
        {
          title: "Content Creation",
          description: "High-quality content creation for blogs, social media, and marketing campaigns.",
          features: ["Blog Writing", "Social Media Posts", "Email Campaigns", "Web Copy"]
        },
        {
          title: "Social Media Management",
          description: "Complete social media management to build your brand and engage with customers.",
          features: ["Content Planning", "Post Scheduling", "Community Management", "Analytics Reporting"]
        }
      ]
    },
    {
      category: "Web Development & Technical",
      description: "Custom technical solutions including websites, tools, and development services",
      icon: Code,
      color: "bg-gradient-to-r from-blue-500 to-cyan-600",
      services: [
        {
          title: "Custom Website Creation",
          description: "Professional custom websites built with clean code and modern design principles.",
          features: ["Custom Coding", "Responsive Design", "SEO Optimization", "Performance Optimization"]
        },
        {
          title: "E-commerce Website Development",
          description: "Specialized e-commerce website development with platform expertise and optimization.",
          features: ["Platform Development", "Custom Features", "Payment Integration", "Mobile Optimization"]
        },
        {
          title: "Small Tool Development",
          description: "Custom tools and applications to automate your business processes and workflows.",
          features: ["Automation Tools", "Web Applications", "API Integration", "Custom Solutions"]
        },
        {
          title: "Landing Page Creation",
          description: "High-converting landing pages designed to capture leads and drive conversions.",
          features: ["Conversion Optimization", "A/B Testing Setup", "Form Integration", "Analytics Tracking"]
        },
        {
          title: "Website Maintenance",
          description: "Ongoing website maintenance and updates to keep your site running smoothly.",
          features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates"]
        }
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Multi-Platform Expertise",
      description: "Specialized knowledge across Shopify, WooCommerce, Wix, Magento, and more for comprehensive e-commerce solutions."
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Precision is our priority. We guarantee excellence in every task, delivering projects with speed and commitment to error-free results."
    },
    {
      icon: Headphones,
      title: "24/7 Premium Support",
      description: "Round-the-clock premium support, ensuring assistance whenever you need it for a seamless experience."
    }
  ]

  const stats = [
    { label: "Projects Completed", value: "386+", icon: CheckCircle },
    { label: "Happy Clients", value: "26+", icon: Users },
    { label: "Average Response Time", value: "< 2 hrs", icon: Clock },
    { label: "Success Rate", value: "99.9%", icon: Star }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative bg-black pt-12 pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/3 to-orange-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/10 rounded-full px-4 py-2 mb-6 border border-primary-500/20">
                <Users className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">PROFESSIONAL SERVICES</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Virtual Assistant Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                From administrative tasks to e-commerce management and creative design, we provide comprehensive virtual assistant services to help your business thrive and scale efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#services" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">386+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">&lt; 2hr Response</span>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete Virtual Support</h3>
                  <p className="text-gray-300">Professional solutions for every business need</p>
                </div>

                <div className="space-y-4 mb-8">
                  {['Administrative Support', 'E-commerce Management', 'Creative Design', 'Digital Marketing', 'Web Development'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="#services" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colors = [
                "from-primary-500 to-orange-500",
                "from-blue-500 to-cyan-500",
                "from-green-500 to-emerald-500",
                "from-purple-500 to-violet-500"
              ];
              return (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                  }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Service Categories
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive virtual assistant services organized by expertise. From administrative support to e-commerce management and creative design, we've got your business covered.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {serviceCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="glass-category-card bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                  }}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <CategoryIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.category}</h3>
                          <p className="text-gray-600 mt-1 text-sm sm:text-base">{category.description}</p>
                        </div>
                      </div>
                      <Link
                        href={getServiceCategoryLink(categoryIndex, category.category)}
                        className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300 bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg border border-primary-200 self-start sm:self-center flex-shrink-0"
                      >
                        <span className="font-medium">View All</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={getIndividualServiceLink(categoryIndex, service.title)}
                        className="glass-service-card group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer transform hover:-translate-y-2 hover:backdrop-blur-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          backdropFilter: 'blur(15px)',
                          WebkitBackdropFilter: 'blur(15px)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <div className="mb-3">
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h4>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-primary-200 transition-colors duration-300">
                          <div className="flex items-center gap-2 text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-300">
                            <span>Learn More</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-heading-1 mb-6 text-gray-900">
              Need Something Custom?
            </h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Don't see exactly what you need? We specialize in creating custom solutions tailored to your unique business requirements.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center border border-primary-100">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Service Solutions</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every business is unique, and sometimes you need a service that's perfectly tailored to your specific needs.
                We excel at creating custom solutions, whether it's a specialized workflow, unique automation, or a completely new service approach.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 font-medium">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 font-medium">Flexible Approach</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-700 font-medium">Expert Consultation</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary">
                Discuss Custom Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TasksACE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional service quality and building long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              const iconColors = [
                "from-blue-500 to-cyan-500",    // Multi-Platform Expertise - Blue
                "from-green-500 to-emerald-500", // Fast & Reliable - Green
                "from-purple-500 to-violet-500"  // 24/7 Premium Support - Purple
              ];
              return (
                <div key={index} className="text-center card-hover p-8 rounded-2xl bg-white shadow-sm">
                  <div className={`w-20 h-20 bg-gradient-to-r ${iconColors[index]} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 mb-6">
              How We Work Together
            </h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Our streamlined process ensures you get the right virtual assistant for your needs quickly and efficiently.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We discuss your needs, goals, and requirements to understand exactly what you're looking for.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200"
                },
                {
                  step: "02",
                  title: "Perfect Match",
                  description: "We carefully select and match you with a virtual assistant who has the right skills and experience.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200"
                },
                {
                  step: "03",
                  title: "Get Started",
                  description: "Begin working with your dedicated assistant within 24-48 hours with full onboarding support.",
                  color: "from-purple-500 to-violet-500",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200"
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className={`${process.bgColor} border ${process.borderColor} rounded-2xl p-6 text-center relative shadow-sm hover:shadow-md transition-all duration-300`}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white`}>
                        {process.step}
                      </div>
                    </div>
                    <div className="pt-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 26+ successful businesses that have transformed their operations with TasksACE virtual assistants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/case-studies" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                See Success Stories
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 