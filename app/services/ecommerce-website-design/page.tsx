'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, ShoppingCart, Zap, ThumbsUp, ChevronDown, ChevronUp, Users, TrendingUp, ShieldCheck, Smartphone, MessageSquare, Monitor, Globe, Package, CreditCard, BarChart3 } from 'lucide-react';
import Link from 'next/link'

export default function EcommerceWebsiteDevelopmentPage() {
  const [openFAQ, setOpenFAQ] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // Auto-scroll for testimonials
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const testimonials = [
    {
      text: "TasksACE built our e-commerce website and our online sales increased by 400% in the first quarter. The payment integration and user experience are flawless!",
      author: "Amanda Wilson",
      company: "Fashion Boutique",
      role: "Owner",
      rating: 5,
      savings: "400% sales increase",
      timeframe: "3 months"
    },
    {
      text: "The inventory management system and mobile optimization have transformed our business. We can now handle hundreds of orders daily without any issues.",
      author: "Marcus Rodriguez",
      company: "Electronics Store",
      role: "Manager",
      rating: 5,
      savings: "Streamlined operations",
      timeframe: "4 months"
    },
    {
      text: "Multi-payment gateway integration and security features give our customers confidence to shop. Our conversion rate doubled since the launch.",
      author: "Priya Patel",
      company: "Home Goods",
      role: "Founder",
      rating: 5,
      savings: "200% conversion rate",
      timeframe: "2 months"
    },
    {
      text: "The admin dashboard makes managing products and orders so easy. The professional design has elevated our brand image significantly.",
      author: "James Thompson",
      company: "Sports Equipment",
      role: "CEO",
      rating: 5,
      savings: "Elevated brand image",
      timeframe: "5 months"
    },
    {
      text: "Customer reviews and wishlist features have improved user engagement. The SEO optimization brought us to the first page of Google.",
      author: "Sophie Chen",
      company: "Beauty Products",
      role: "Marketing Director",
      rating: 5,
      savings: "First page Google",
      timeframe: "6 months"
    },
    {
      text: "The enterprise solution with advanced analytics has provided valuable insights into our customer behavior and sales patterns.",
      author: "Robert Johnson",
      company: "Wholesale Business",
      role: "Operations Director",
      rating: 5,
      savings: "Valuable insights",
      timeframe: "8 months"
    }
  ]

  const faqs = [
    {
      question: "What e-commerce platforms do you work with?",
      answer: "We develop custom e-commerce solutions using WooCommerce, Shopify, Magento, and custom-built platforms. We choose the best technology based on your specific business needs and scalability requirements."
    },
    {
      question: "How long does it take to build an e-commerce website?",
      answer: "Timeline depends on complexity: Basic stores take 3-4 weeks, Professional stores 5-7 weeks, and Enterprise solutions 8-12 weeks. We provide detailed project timelines during consultation."
    },
    {
      question: "Do you integrate payment gateways and shipping?",
      answer: "Yes! We integrate multiple payment gateways (PayPal, Stripe, Square, etc.) and shipping providers (UPS, FedEx, USPS). We ensure secure transactions and automated shipping calculations."
    },
    {
      question: "Will my e-commerce site be mobile-optimized?",
      answer: "Absolutely! All our e-commerce websites are fully responsive and mobile-optimized. We ensure perfect shopping experience across all devices with touch-friendly interfaces."
    },
    {
      question: "Do you provide inventory management features?",
      answer: "Yes! Our e-commerce solutions include comprehensive inventory management, order tracking, customer management, sales analytics, and automated notifications for low stock."
    }
  ]

  const stats = [
    { label: "E-commerce Sites Built", value: "500+", icon: ShoppingCart, color: "from-primary-500 to-orange-500" },
    { label: "Happy Store Owners", value: "400+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Avg Sales Increase", value: "+350%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Store Success Rate", value: "98%", icon: Star, color: "from-purple-500 to-violet-500" }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Sales",
      description: "Optimized checkout process and user experience that converts more visitors into customers",
      metric: "350% More Sales",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: ShoppingCart,
      title: "Better Conversions",
      description: "Professional design and seamless shopping experience that builds customer trust",
      metric: "280% More Conversions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "Enterprise-level security with SSL certificates and PCI compliance for safe transactions",
      metric: "100% Secure",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Mobile-first design that captures the growing mobile shopping market",
      metric: "100% Mobile Ready",
      color: "from-red-500 to-pink-500"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Store Planning",
      description: "Analyze your products, target market, and business goals to create the perfect e-commerce strategy.",
      duration: "Week 1",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Design & UX",
      description: "Create stunning product catalogs and user-friendly shopping experiences that convert visitors into customers.",
      duration: "Week 2-3",
      icon: Monitor
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build your store with payment gateways, inventory management, and all necessary e-commerce features.",
      duration: "Week 4-6",
      icon: ShoppingCart
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Test all functionality, optimize for performance, and launch your store with ongoing support.",
      duration: "Week 7",
      icon: Globe
    }
  ]

  const ecommerceServices = [
    {
      title: "Product Catalog Management",
      description: "Beautiful product displays with high-quality images, detailed descriptions, categories, and advanced filtering options.",
      icon: Package,
      features: ["Product Gallery", "Category Management", "Search & Filters", "Inventory Tracking"],
      deliverables: ["Organized catalog", "Product variations", "Search functionality", "Stock management"]
    },
    {
      title: "Shopping Cart & Checkout",
      description: "Seamless shopping cart experience with secure checkout process, multiple payment options, and order confirmation.",
      icon: ShoppingCart,
      features: ["Shopping Cart", "Guest Checkout", "Order Summary", "Abandoned Cart Recovery"],
      deliverables: ["Smooth checkout", "Payment integration", "Order tracking", "Email notifications"]
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment methods including credit cards, PayPal, digital wallets, and more.",
      icon: CreditCard,
      features: ["Multiple Gateways", "Secure Processing", "Fraud Protection", "International Payments"],
      deliverables: ["Payment options", "Secure transactions", "Currency support", "Receipt generation"]
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive admin panel to manage products, orders, customers, sales analytics, and store settings.",
      icon: BarChart3,
      features: ["Order Management", "Customer Database", "Sales Analytics", "Inventory Control"],
      deliverables: ["Admin interface", "Sales reports", "Customer insights", "Inventory alerts"]
    }
  ]

  const pricingPlans = [
    {
      name: "Basic Store",
      price: "$3,999",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 Products",
        "Responsive Design",
        "Basic Payment Gateway",
        "Order Management",
        "Customer Accounts",
        "1 Month Support"
      ],
      popular: false,
      buttonText: "Get Started",
      minHours: "3-4 weeks delivery"
    },
    {
      name: "Professional Store",
      price: "$7,999",
      description: "Most popular for businesses",
      features: [
        "Unlimited Products",
        "Advanced Design",
        "Multiple Payment Gateways",
        "Inventory Management",
        "Customer Reviews",
        "SEO Optimization",
        "Analytics Integration",
        "3 Months Support"
      ],
      popular: true,
      buttonText: "Most Popular",
      minHours: "5-7 weeks delivery"
    },
    {
      name: "Enterprise Store",
      price: "$15,999",
      description: "For large businesses",
      features: [
        "Multi-vendor Support",
        "Advanced Analytics",
        "Custom Integrations",
        "B2B Features",
        "API Development",
        "Performance Optimization",
        "Dedicated Support",
        "12 Months Support"
      ],
      popular: false,
      buttonText: "Contact Us",
      minHours: "8-12 weeks delivery"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-12 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10"></div>
        
        <div className="relative max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/10 rounded-full px-4 py-2 mb-6 border border-primary-500/20">
                <ShoppingCart className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">E-COMMERCE EXPERTS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                E-commerce Website Development
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Build a powerful online store that drives sales and grows your business. Professional e-commerce development with secure payments and seamless shopping experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start My Store
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">500+ Stores Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">+350% Sales</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <ShoppingCart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">E-commerce Development</h3>
                  <p className="text-gray-300">Powerful & scalable</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['Product Catalog', 'Secure Payments', 'Order Management', 'Mobile Optimized', 'SEO Ready'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Starting at $3,999</div>
                    <div className="text-primary-400 text-sm">Complete online store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Details Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete e-commerce development services to build powerful online stores that drive sales and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-primary-200 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle size={12} className="text-primary-500 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Deliverables:</h4>
                          <ul className="space-y-1">
                            {service.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-center gap-2">
                                <Star size={12} className="text-orange-500 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable advantages of professional e-commerce development for your online business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the perfect plan for your e-commerce development needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-primary-500 transform scale-105' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{plan.price}</div>
                  <div className="text-sm text-gray-500 mb-4">{plan.minHours}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-[1344px] mx-auto container-padding relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our E-commerce Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we follow a proven process to create e-commerce stores that drive sales and growth.
            </p>
          </div>

          <div className="relative">
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
                      <div className="relative mb-6">
                        <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-2 ${stepColors.border} relative z-10`}>
                          <span className={`text-sm font-bold ${stepColors.text}`}>{step.step}</span>
                        </div>
                        
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
                    
                    <div className={`inline-flex items-center bg-gradient-to-r ${stepColors.badge} rounded-full px-4 py-2 border ${stepColors.badgeBorder}`}>
                      <Clock className={`w-4 h-4 ${stepColors.text} mr-2`} />
                      <span className={`text-sm font-semibold ${stepColors.badgeText}`}>{step.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories  
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that have transformed their online sales with our e-commerce development.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial, index) => (
                      <div key={pageIndex * 2 + index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {testimonial.savings}
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {testimonial.timeframe}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
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
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-orange-500 transition-colors" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  openFAQ === index ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses that have transformed their sales with TasksACE's professional e-commerce development services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start My Store
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 