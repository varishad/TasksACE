'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, Mail, Zap, ThumbsUp, ChevronDown, ChevronUp, Reply, Filter, Search, Settings, BarChart3, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link'

export default function EmailManagementPage() {
  const [openFAQ, setOpenFAQ] = useState(0);
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
  
  const emailServices = [
    {
      title: "Email Organization",
      description: "Professional email sorting, labeling, and organization to keep your inbox clean and efficient.",
      icon: Mail,
      features: ["Inbox Sorting", "Label Creation", "Priority Categorization", "Archive Management"],
      deliverables: ["Organized inbox", "Email filing system", "Priority labels", "Archive structure"]
    },
    {
      title: "Response Management",
      description: "Professional email responses and customer communication management to maintain your reputation.",
      icon: Reply,
      features: ["Customer Responses", "Inquiry Management", "Template Creation", "Follow-up Scheduling"],
      deliverables: ["Response templates", "Customer communications", "Follow-up schedules", "Inquiry logs"]
    },
    {
      title: "Follow-up Scheduling",
      description: "Automated follow-up management to ensure no important communication falls through the cracks.",
      icon: Clock,
      features: ["Automated Reminders", "Follow-up Tracking", "Deadline Management", "Priority Alerts"],
      deliverables: ["Follow-up schedules", "Reminder systems", "Tracking reports", "Alert notifications"]
    },
    {
      title: "Priority Filtering",
      description: "Smart email filtering and prioritization to focus on what matters most for your business.",
      icon: Filter,
      features: ["VIP Identification", "Spam Filtering", "Urgent Tagging", "Custom Rules"],
      deliverables: ["Priority filters", "VIP lists", "Filtering rules", "Urgency classifications"]
    }
  ]

  const pricingPlans = [
    {
      name: "Basic Email",
      price: "$8/hour",
      description: "Perfect for simple email management",
      features: [
        "Basic Email Organization",
        "Simple Response Management",
        "Priority Filtering",
        "Email Support",
        "Weekly Reports"
      ],
      popular: false,
      buttonText: "Get Started",
      minHours: "10 hours/month minimum"
    },
    {
      name: "Professional",
      price: "$12/hour",
      description: "Ideal for comprehensive email management",
      features: [
        "Advanced Email Organization",
        "Professional Response Management",
        "Follow-up Scheduling",
        "Priority Filtering & VIP Management",
        "Priority Support",
        "Daily Reports",
        "Template Creation"
      ],
      popular: true,
      buttonText: "Most Popular",
      minHours: "20 hours/month minimum"
    },
    {
      name: "Executive",
      price: "$16/hour",
      description: "For executive-level email management",
      features: [
        "All Professional features",
        "Executive Communication Support",
        "Advanced Automation",
        "Dedicated Email Manager",
        "Real-time Monitoring",
        "Custom Workflows",
        "24/7 Support"
      ],
      popular: false,
      buttonText: "Contact Us",
      minHours: "30 hours/month minimum"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Email Audit",
      description: "We analyze your current email patterns, volume, and organization needs.",
      duration: "1 day",
      icon: Search
    },
    {
      step: "02",
      title: "System Setup",
      description: "We create filters, labels, templates, and organizational structures for your inbox.",
      duration: "1-2 days",
      icon: Settings
    },
    {
      step: "03",
      title: "Management Implementation",
      description: "We begin managing your emails with established protocols and response guidelines.",
      duration: "Ongoing",
      icon: Mail
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description: "Continuous optimization with performance reports and system improvements.",
      duration: "Weekly",
      icon: BarChart3
    }
  ]

  // Updated benefits with different colors for better understanding
  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save 2-3 hours daily by delegating email management tasks",
      metric: "2-3 Hours/Day",
      color: "from-blue-500 to-cyan-500" // Blue for time
    },
    {
      icon: Target,
      title: "Zero Inbox",
      description: "Maintain inbox zero with professional organization and management",
      metric: "Inbox Zero Daily",
      color: "from-emerald-500 to-green-500" // Green for organization/success
    },
    {
      icon: TrendingUp,
      title: "Response Rate",
      description: "Improve response rates and customer satisfaction significantly",
      metric: "95% Response Rate",
      color: "from-purple-500 to-violet-500" // Purple for performance
    },
    {
      icon: ShieldCheck,
      title: "Professional Image",
      description: "Maintain professional communication standards and brand reputation",
      metric: "100% Professional",
      color: "from-red-500 to-pink-500" // Red for reliability
    }
  ]

  // Updated testimonials with 6 entries for auto-scroll
  const testimonials = [
    {
      text: "Email management from TasksACE has been a game-changer. My inbox is always organized, and I never miss important emails anymore. My response time improved by 80%!",
      author: "Amanda Foster",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      rating: 5,
      savings: "Saved 20 hours/week",
      timeframe: "3 months"
    },
    {
      text: "The professional email responses and follow-up management have significantly improved our customer satisfaction. Our team is more efficient than ever before.",
      author: "James Wilson",
      company: "Wilson Consulting Group",
      role: "Managing Partner", 
      rating: 5,
      savings: "95% response rate",
      timeframe: "5 months"
    },
    {
      text: "Outstanding email organization and priority filtering. No more searching through hundreds of emails. Everything is categorized perfectly and I can focus on what matters most.",
      author: "Sarah Martinez",
      company: "Legal Services Inc.",
      role: "Senior Partner",
      rating: 5,
      savings: "Saved 3 hours/day",
      timeframe: "4 months"
    },
    {
      text: "The automated follow-up scheduling has transformed our client communication. We never miss important deadlines and our client relationships have improved dramatically.",
      author: "David Thompson",
      company: "Financial Advisory",
      role: "Director",
      rating: 5,
      savings: "90% follow-up rate",
      timeframe: "6 months"
    },
    {
      text: "Executive-level email management that exceeded expectations. Template creation and VIP filtering have streamlined all our communications. Highly professional service.",
      author: "Lisa Chen",
      company: "Tech Innovations",
      role: "CEO",
      rating: 5,
      savings: "Saved $2,800/month",
      timeframe: "7 months"
    },
    {
      text: "The response management and template creation services are exceptional. Our brand voice is consistent across all communications and response times are lightning fast.",
      author: "Robert Davis",
      company: "Creative Agency Plus",
      role: "Operations Manager",
      rating: 5,
      savings: "98% customer satisfaction",
      timeframe: "5 months"
    }
  ]

  const faqs = [
    {
      question: "How do you ensure email security and confidentiality?",
      answer: "We use secure access protocols, sign NDAs, and follow strict confidentiality guidelines. All access is through secure authentication and we never store sensitive information locally."
    },
    {
      question: "Can you handle multiple email accounts?",
      answer: "Yes! We can manage multiple email accounts across different platforms (Gmail, Outlook, Yahoo, etc.) and provide unified organization and response management."
    },
    {
      question: "What email platforms do you work with?",
      answer: "We work with all major email platforms including Gmail, Outlook, Apple Mail, Yahoo Mail, and most business email systems. We can adapt to any platform you use."
    },
    {
      question: "How quickly do you respond to urgent emails?",
      answer: "We monitor emails throughout business hours and respond to urgent matters within 2-4 hours. For executive plans, we offer real-time monitoring with immediate alerts."
    },
    {
      question: "Do you create email templates and responses?",
      answer: "Absolutely! We create professional email templates for common scenarios, autoresponders, and custom responses that match your brand voice and communication style."
    }
  ]

  const stats = [
    { label: "Emails Managed", value: "100,000+", icon: Mail, color: "from-primary-500 to-orange-500" },
    { label: "Response Time", value: "< 4 Hours", icon: Clock, color: "from-green-500 to-emerald-500" },
    { label: "Client Satisfaction", value: "97%", icon: Star, color: "from-blue-500 to-cyan-500" },
    { label: "Inbox Zero Rate", value: "100%", icon: Target, color: "from-purple-500 to-violet-500" }
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
                <Mail className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">EMAIL EXCELLENCE</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Email Management
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Expert email organization, response management, and priority filtering to keep your communications efficient and professional.
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
                  <span className="text-sm">100,000+ Emails Managed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">97% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">&lt; 4h Response</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete Solution</h3>
                  <p className="text-gray-300">All your email needs handled</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['Email Organization', 'Response Management', 'Follow-up Scheduling', 'Priority Filtering', 'Template Creation'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Starting at $8/hour</div>
                    <div className="text-primary-400 text-sm">10 hours/month minimum</div>
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
              Comprehensive email management services designed to streamline your communications and boost productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emailServices.map((service, index) => {
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
              Measurable improvements to your business operations and productivity.
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
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
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
              From initial email audit to ongoing optimization, we follow a systematic approach to deliver exceptional email management services.
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
                Our team can organize your email and start managing it within 24 hours. Let's discuss your requirements and create a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/services" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                  View All Services
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
              Real results from businesses that have transformed their email management with our services.
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
          
          {/* Additional CTA at bottom of FAQ */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Link href="/contact" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300">
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
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join successful businesses that have streamlined their email communications with TasksACE email management experts.
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
                  <span className="text-sm">Quick Setup</span>
                </div>
                                 <div className="flex items-center space-x-2">
                   <CheckCircle className="w-4 h-4 text-primary-500" />
                   <span className="text-sm">&lt; 4h Response</span>
                 </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">97% Satisfaction</span>
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