'use client'

import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, ShoppingCart, Zap, ThumbsUp, ChevronUp, ChevronDown, Package, Database, BarChart3, Headphones, DollarSign, Timer, Settings, ShieldCheck, TrendingUp, MessageSquare, Target } from 'lucide-react';
import Link from 'next/link'


export default function EcommerceSolutionsPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(-1);

  const ecommerceServices = [
    {
      title: "Product Upload & Listing",
      description: "Expert product uploading and listing across Shopify, WooCommerce, Wix, and Magento platforms with optimization.",
      icon: Package,
      features: ["Bulk Product Upload", "Product Categorization", "Variant Management", "SKU Organization"],
      benefits: ["Multi-platform expertise", "Fast bulk processing", "SEO optimization", "Error-free uploads"],
      popular: true
    },
    {
      title: "Product Description Writing",
      description: "SEO-optimized product descriptions that convert visitors into customers across all e-commerce platforms.",
      icon: Database,
      features: ["SEO-Optimized Copy", "Feature Highlighting", "Benefit-Focused Writing", "Keyword Integration"],
      benefits: ["Higher conversion rates", "Better search rankings", "Professional copywriting", "Platform-specific optimization"],
      popular: false
    },
    {
      title: "Product Image Processing",
      description: "Professional product image editing and optimization for better visibility and increased sales conversion.",
      icon: BarChart3,
      features: ["Image Editing & Enhancement", "Background Removal", "Size Optimization", "Multi-Platform Formatting"],
      benefits: ["Professional appearance", "Faster loading times", "Consistent branding", "Platform compliance"],
      popular: false
    },
    {
      title: "Inventory Management",
      description: "Keep your product inventory organized and updated across multiple platforms and sales channels.",
      icon: Database,
      features: ["Stock Level Updates", "Inventory Tracking", "Low Stock Alerts", "Multi-Platform Sync"],
      benefits: ["Prevent overselling", "Real-time tracking", "Automated alerts", "Synchronized inventory"],
      popular: false
    },
    {
      title: "Customer Support",
      description: "Professional customer service for your e-commerce store to enhance customer satisfaction and loyalty.",
      icon: Headphones,
      features: ["Live Chat Support", "Order Inquiries", "Return Management", "Customer Communications"],
      benefits: ["24/7 availability", "Quick response times", "Professional service", "Customer retention"],
      popular: false
    }
  ]

  const whyChooseEcommerce = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by up to 60% with our efficient e-commerce management solutions.",
      highlight: "60% Cost Reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Timer,
      title: "Time Efficiency",
      description: "Save 20+ hours per week with automated product uploads and inventory management.",
      highlight: "20+ Hours Saved",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamlined workflows that increase your store performance and sales conversion rates.",
      highlight: "30% Performance Boost",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Security",
      description: "99.9% uptime with secure data handling and platform compliance across all channels.",
      highlight: "99.9% Uptime",
      color: "from-red-500 to-pink-500"
    }
  ]

  const stats = [
    { label: "Products Uploaded", value: "15,000+", icon: Package, color: "from-cyan-500 to-teal-500" },
    { label: "E-commerce Stores Managed", value: "120+", icon: ShoppingCart, color: "from-blue-500 to-blue-600" },
    { label: "Platforms Supported", value: "8+", icon: BarChart3, color: "from-purple-500 to-purple-600" },
    { label: "Client Revenue Growth", value: "+35%", icon: TrendingUp, color: "from-green-500 to-green-600" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Platform Assessment",
      description: "We analyze your current e-commerce setup and identify optimization opportunities across platforms.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We create a customized plan for product uploads, optimization, and ongoing management.",
      icon: Target
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team executes the plan with precision and attention to detail.",
      icon: Settings
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuous monitoring and optimization for better sales performance and growth.",
      icon: Zap
    }
  ]

  const testimonials = [
    {
      text: "TasksACE uploaded 2,500 products to our Shopify store flawlessly. Our sales increased by 40% within 3 months!",
      author: "Jennifer Martinez",
      company: "FashionHub Store",
      role: "Store Owner",
      rating: 5,
      service: "Product Upload & Listing"
    },
    {
      text: "Their product descriptions are amazing! SEO-optimized and conversion-focused. Our organic traffic doubled.",
      author: "David Thompson",
      company: "TechGear Plus",
      role: "E-commerce Manager",
      rating: 5,
      service: "Product Description Writing"
    },
    {
      text: "Professional inventory management that prevented overselling during peak season. Highly recommended!",
      author: "Sarah Chen",
      company: "HomeDecor Elite",
      role: "Operations Manager",
      rating: 5,
      service: "Inventory Management"
    },
    {
      text: "Customer support service was exceptional. Our response time improved by 80% and customer satisfaction soared.",
      author: "Michael Rodriguez",
      company: "Sports Gear Pro",
      role: "Customer Success Manager",
      rating: 5,
      service: "Customer Support"
    },
    {
      text: "Image processing quality is outstanding. Our product photos look professional and conversion rates increased by 25%.",
      author: "Lisa Wang",
      company: "Beauty Essentials",
      role: "Marketing Director",
      rating: 5,
      service: "Product Image Processing"
    },
    {
      text: "Multi-platform expertise saved us months of work. They handled Shopify, WooCommerce, and Magento seamlessly.",
      author: "Robert Johnson",
      company: "Electronics Hub",
      role: "CEO",
      rating: 5,
      service: "Platform Management"
    }
  ]

  const platforms = [
    { name: "Shopify", expertise: "Expert" },
    { name: "WooCommerce", expertise: "Expert" },
    { name: "Wix", expertise: "Expert" },
    { name: "Magento", expertise: "Expert" },
    { name: "BigCommerce", expertise: "Advanced" },
    { name: "Squarespace", expertise: "Advanced" }
  ]

  const faqs = [
    {
      question: "How quickly can you get my products uploaded to my store?",
      answer: "We can typically start uploading products within 24-48 hours and handle bulk uploads of 100-500 products per day depending on complexity."
    },
    {
      question: "Which e-commerce platforms do you support?",
      answer: "We specialize in Shopify, WooCommerce, Wix, Magento, BigCommerce, and Squarespace. We can also work with other platforms based on your needs."
    },
    {
      question: "How do you ensure product data accuracy?",
      answer: "We have strict quality assurance processes with multiple verification steps, experienced team members, and quality checks to ensure 99.9% accuracy in all product uploads."
    },
    {
      question: "Can you help optimize my existing product listings?",
      answer: "Absolutely! We can review and optimize existing listings for SEO, improve descriptions, enhance images, and restructure categories for better performance."
    },
    {
      question: "Do you provide ongoing support after initial setup?",
      answer: "Yes, we offer ongoing e-commerce support including inventory updates, new product additions, customer service, and performance optimization."
    }
  ]

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
                <ShoppingCart className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">E-COMMERCE EXPERTISE</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Expert E-commerce Virtual Assistant Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Professional product upload and management across Shopify, WooCommerce, Wix, and Magento. From bulk uploads to inventory management, we optimize your online store for maximum sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Growing Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#services" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">120+ Stores Managed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">24h Turnaround</span>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <ShoppingCart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">E-commerce Excellence</h3>
                  <p className="text-gray-300">Complete solutions for your online store</p>
                </div>

                <div className="space-y-4 mb-8">
                  {['Product Upload & Listing', 'Inventory Management', 'Customer Support', 'Platform Migration', 'Sales Optimization'].map((item, index) => (
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
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Platforms Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert-level knowledge across all major e-commerce platforms to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${platform.expertise === 'Expert'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                    }`}>
                    {platform.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our E-commerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive e-commerce solutions designed to optimize your online store and maximize sales. Each service is crafted to boost your revenue and streamline operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={(() => {
                    const urlMap: { [key: string]: string } = {
                      'Product Upload & Listing': '/services/ecommerce/product-upload',
                      'Product Description Writing': '/services/ecommerce/product-description',
                      'Product Image Processing': '/services/ecommerce/image-processing',
                      'Inventory Management': '/services/ecommerce/inventory',
                      'Customer Support': '/services/ecommerce/customer-support'
                    };
                    return urlMap[service.title] || '/services/ecommerce';
                  })()}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-3"
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-primary-600 text-sm font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200 group-hover:border-primary-200 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-300">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Different Colors */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements to your e-commerce operations and revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseEcommerce.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                    {benefit.highlight}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section with Different Colors */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From platform assessment to ongoing optimization, we follow a systematic approach to scale your e-commerce business effectively.
            </p>
          </div>

          <div className="relative">
            {/* Top connecting line */}
            <div className="hidden md:block absolute top-5 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-red-500"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const colors = [
                  { border: 'border-green-500', text: 'text-green-600', bg: 'from-green-500 to-emerald-500', badge: 'from-green-50 to-emerald-50', badgeBorder: 'border-green-200', badgeText: 'text-green-700' },
                  { border: 'border-blue-500', text: 'text-blue-600', bg: 'from-blue-500 to-cyan-500', badge: 'from-blue-50 to-cyan-50', badgeBorder: 'border-blue-200', badgeText: 'text-blue-700' },
                  { border: 'border-purple-500', text: 'text-purple-600', bg: 'from-purple-500 to-violet-500', badge: 'from-purple-50 to-violet-50', badgeBorder: 'border-purple-200', badgeText: 'text-purple-700' },
                  { border: 'border-red-500', text: 'text-red-600', bg: 'from-red-500 to-pink-500', badge: 'from-red-50 to-pink-50', badgeBorder: 'border-red-200', badgeText: 'text-red-700' }
                ];
                const stepColors = colors[index];
                return (
                  <div key={index} className="relative text-center">
                    <div className="relative mb-8">
                      {/* Number circle with connector line */}
                      <div className="relative mb-6">
                        <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-2 ${stepColors.border} relative z-10`}>
                          <span className={`text-sm font-bold ${stepColors.text}`}>{step.step}</span>
                        </div>

                        {/* Individual connecting lines between numbers */}
                        {index < processSteps.length - 1 && (
                          <div className={`hidden lg:block absolute top-5 left-1/2 w-full h-0.5 ${stepColors.border.replace('border-', 'bg-')} z-0`}></div>
                        )}
                      </div>

                      <div className={`w-20 h-20 bg-gradient-to-r ${stepColors.bg} rounded-full flex items-center justify-center mx-auto shadow-xl mb-6`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-primary-50 rounded-3xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Scale Your E-commerce?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team can start optimizing your e-commerce operations within 24 hours. Let's discuss your requirements and create a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#services" className="group border-2 border-primary-300 hover:border-primary-500 text-primary-700 hover:text-primary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling Testimonials Section with 6 testimonials in 2-column layout */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from e-commerce businesses that have scaled with our expert services.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              onMouseEnter={() => setCurrentTestimonialIndex(currentTestimonialIndex)}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                          </div>
                          <div className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === Math.floor(currentTestimonialIndex / 2) ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentTestimonialIndex(index * 2)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              FAQ
            </h2>
          </div>

          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-out ${openFAQ === index ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
              Contact our team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
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

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Scale Your E-commerce?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join e-commerce businesses that have grown their sales and optimized operations with TasksACE experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                View All Services
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">+35% Revenue Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">15K+ Products Managed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">24hr Turnaround</span>
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