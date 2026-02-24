'use client'

import React, { useState, useEffect } from 'react'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, Settings, Database, Zap, ThumbsUp, ShieldCheck, ChevronDown, ChevronUp, Package, AlertTriangle, RefreshCw, BarChart3, Users, MessageSquare, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link'

export default function InventoryManagementPage() {
  const [openFAQ, setOpenFAQ] = useState(0); // Start with first FAQ open
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-scroll for testimonials
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  const inventoryServices = [
    {
      title: "Stock Level Management",
      description: "Real-time inventory tracking across all sales channels to prevent stockouts and overstock situations.",
      icon: Package,
      features: ["Real-time Tracking", "Multi-Channel Sync", "Stock Level Alerts", "Automated Reordering"],
      deliverables: ["Live inventory dashboard", "Stock reports", "Reorder alerts", "Channel sync reports"]
    },
    {
      title: "Low Stock Alerts",
      description: "Automated notification system to alert you when products reach minimum stock levels.",
      icon: AlertTriangle,
      features: ["Custom Alert Thresholds", "Email Notifications", "SMS Alerts", "Dashboard Warnings"],
      deliverables: ["Alert system setup", "Notification templates", "Threshold reports", "Alert history"]
    },
    {
      title: "Multi-Platform Sync",
      description: "Seamless inventory synchronization across all your e-commerce platforms and sales channels.",
      icon: RefreshCw,
      features: ["Platform Integration", "Real-time Updates", "Bulk Updates", "Conflict Resolution"],
      deliverables: ["Synchronized inventory", "Platform reports", "Sync logs", "Error resolution"]
    },
    {
      title: "Inventory Reporting",
      description: "Comprehensive analytics and reporting to optimize your inventory management strategy.",
      icon: BarChart3,
      features: ["Sales Analytics", "Turnover Reports", "Trend Analysis", "Performance Metrics"],
      deliverables: ["Monthly reports", "Analytics dashboard", "Trend insights", "Performance metrics"]
    }
  ]

  const stats = [
    { label: "Products Managed", value: "50,000+", icon: Package, color: "from-cyan-500 to-teal-500" },
    { label: "E-commerce Stores", value: "200+", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Accuracy Rate", value: "99.9%", icon: ShieldCheck, color: "from-purple-500 to-purple-600" },
    { label: "Sync Speed", value: "Real-time", icon: RefreshCw, color: "from-green-500 to-green-600" }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small stores with basic inventory needs",
      features: [
        "Up to 1,000 products",
        "2 platform integrations",
        "Basic stock alerts",
        "Weekly reports",
        "Email support",
        "Standard sync frequency"
      ],
      popular: false,
      buttonText: "Get Started",
      minHours: "Basic inventory management"
    },
    {
      name: "Professional",
      price: "$399/month",
      description: "Ideal for growing businesses with multiple channels",
      features: [
        "Up to 10,000 products",
        "5 platform integrations",
        "Advanced stock alerts",
        "Daily reports",
        "Priority support",
        "Real-time sync",
        "Custom thresholds"
      ],
      popular: true,
      buttonText: "Most Popular",
      minHours: "Advanced inventory features"
    },
    {
      name: "Enterprise",
      price: "$799/month",
      description: "For large businesses with complex inventory needs",
      features: [
        "Unlimited products",
        "Unlimited integrations",
        "Custom alert rules",
        "Real-time analytics",
        "24/7 support",
        "Instant sync",
        "Dedicated manager",
        "Custom workflows"
      ],
      popular: false,
      buttonText: "Contact Us",
      minHours: "Enterprise-level management"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "System Integration",
      description: "We connect all your sales channels and platforms to create a unified inventory system.",
      duration: "1-2 days",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Data Sync & Cleanup",
      description: "Initial synchronization of all inventory data with cleanup and standardization.",
      duration: "2-3 days",
      icon: Target
    },
    {
      step: "03",
      title: "Monitoring Setup",
      description: "Configure alerts, thresholds, and automated rules for optimal inventory management.",
      duration: "1 day",
      icon: Zap
    },
    {
      step: "04",
      title: "Optimization & Reports",
      description: "Continuous monitoring with regular reports and optimization recommendations.",
      duration: "Ongoing",
      icon: BarChart3
    }
  ]

  // Updated benefits with different colors for better understanding
  const benefits = [
    {
      icon: Package,
      title: "Stock Optimization",
      description: "Reduce overstock by 35% and eliminate stockouts with intelligent inventory management",
      metric: "35% Less Overstock",
      color: "from-emerald-500 to-green-500" // Green for optimization
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save 20+ hours per week with automated inventory tracking and updates",
      metric: "20+ Hours/Week",
      color: "from-blue-500 to-cyan-500" // Blue for time
    },
    {
      icon: TrendingUp,
      title: "Sales Growth",
      description: "Increase sales by 25% with better stock availability and demand forecasting",
      metric: "25% Sales Growth",
      color: "from-purple-500 to-violet-500" // Purple for performance
    },
    {
      icon: ShieldCheck,
      title: "99.9% Accuracy",
      description: "Maintain precise inventory levels across all platforms with automated synchronization",
      metric: "Perfect Accuracy",
      color: "from-red-500 to-pink-500" // Red for reliability
    }
  ]

  // Updated testimonials with 6 entries for auto-scroll
  const testimonials = [
    {
      text: "TasksACE inventory management transformed our business! We eliminated stockouts completely and reduced overstock by 40%. Our sales increased significantly.",
      author: "Emma Wilson",
      company: "Fashion Forward Store",
      role: "Operations Manager",
      rating: 5,
      savings: "40% Less Overstock",
      timeframe: "2 months"
    },
    {
      text: "Real-time sync across all platforms is amazing! No more overselling or inventory discrepancies. Customer satisfaction improved dramatically.",
      author: "James Rodriguez",
      company: "Electronics Central",
      role: "E-commerce Director",
      rating: 5,
      savings: "Zero Overselling",
      timeframe: "3 weeks"
    },
    {
      text: "The automated alerts saved us from multiple stockout situations. We now reorder at the perfect time and never run out of bestsellers.",
      author: "Sarah Kim",
      company: "Beauty Essentials Plus",
      role: "Store Manager",
      rating: 5,
      savings: "Perfect Timing",
      timeframe: "1 month"
    },
    {
      text: "Managing 5,000+ products across 8 platforms was impossible before. Now everything is synchronized and accurate in real-time.",
      author: "Michael Chen",
      company: "Home Goods Hub",
      role: "Inventory Manager",
      rating: 5,
      savings: "5,000+ Products",
      timeframe: "6 weeks"
    },
    {
      text: "The analytics and reporting features helped us identify slow-moving stock and optimize our purchasing decisions. ROI improved by 30%.",
      author: "Lisa Martinez",
      company: "Sports Gear Pro",
      role: "Business Owner",
      rating: 5,
      savings: "30% ROI Boost",
      timeframe: "3 months"
    },
    {
      text: "Professional setup and ongoing support is exceptional. Our inventory accuracy went from 85% to 99.9% within weeks.",
      author: "David Thompson",
      company: "Tech Accessories Store",
      role: "CEO",
      rating: 5,
      savings: "99.9% Accuracy",
      timeframe: "2 weeks"
    }
  ]

  const faqs = [
    {
      question: "Which e-commerce platforms do you support?",
      answer: "We support all major platforms including Shopify, Amazon, eBay, WooCommerce, Magento, BigCommerce, Etsy, and many others. We can integrate with virtually any platform that has an API."
    },
    {
      question: "How quickly can you set up inventory management?",
      answer: "Basic setup takes 1-2 days for initial integration. Full synchronization and optimization typically complete within a week, depending on your inventory size and complexity."
    },
    {
      question: "What happens if there are sync conflicts between platforms?",
      answer: "Our system automatically detects and resolves most conflicts using preset rules. For complex situations, we provide manual oversight and resolution with detailed conflict reports."
    },
    {
      question: "Can you handle seasonal inventory planning?",
      answer: "Yes! Our analytics identify seasonal trends and help optimize inventory levels for peak periods. We provide forecasting reports and automated reorder suggestions based on historical data."
    },
    {
      question: "Do you provide training on the inventory management system?",
      answer: "Absolutely! We provide comprehensive training, documentation, and ongoing support. Our team ensures you're comfortable with all features and reporting capabilities."
    }
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
                <Database className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">INVENTORY EXPERTS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Inventory Management
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Keep perfect inventory levels across all your sales channels. Real-time synchronization, 
                automated alerts, and comprehensive reporting to maximize sales and minimize costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#pricing" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">50,000+ Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">99.9% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Real-time Updates</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete Solution</h3>
                  <p className="text-gray-300">All inventory operations handled</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['Stock Level Management', 'Low Stock Alerts', 'Multi-Platform Sync', 'Inventory Reporting', 'Analytics Dashboard'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Starting at $199/month</div>
                    <div className="text-primary-400 text-sm">Up to 1,000 products</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link href="#pricing" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300">
                    View All Plans
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

      {/* Services Details Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive inventory management solutions designed to optimize your stock levels and maximize profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inventoryServices.map((service, index) => {
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

      {/* Benefits Section with Different Colors */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements to your inventory efficiency and business profitability.
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
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your inventory management needs.
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

      {/* Enhanced Process Section with Different Colors */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        
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
              From system integration to ongoing optimization, we follow a systematic approach to deliver perfect inventory management.
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
                    
                    {/* Duration Badge */}
                    <div className={`inline-flex items-center bg-gradient-to-r ${stepColors.badge} rounded-full px-4 py-2 border ${stepColors.badgeBorder}`}>
                      <Clock className={`w-4 h-4 ${stepColors.text} mr-2`} />
                      <span className={`text-sm font-semibold ${stepColors.badgeText}`}>{step.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-3xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team can set up your inventory management system within 48 hours. Let's discuss your requirements and create a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#pricing" className="group border-2 border-primary-300 hover:border-primary-500 text-primary-700 hover:text-primary-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                  View Pricing Plans
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
              Real results from businesses that have optimized their inventory management with our solutions.
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
            
            {/* Testimonial indicators */}
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
                    <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
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
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="whitespace-nowrap">Ready to Optimize Your</span> Inventory Management?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 200+ successful e-commerce businesses that have streamlined their inventory operations with TasksACE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="#pricing" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                See Pricing Plans
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Real-time Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span className="text-sm">99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}