'use client'

import React, { useState, useEffect } from 'react'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, ClipboardList, Zap, ThumbsUp, ChevronDown, ChevronUp, Settings, Database, Mail, Calendar, DollarSign, TrendingUp, ShieldCheck, Award, MessageSquare, Target } from 'lucide-react';
import Link from 'next/link'



export default function AdministrativeServicesPage() {
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

  const adminServices = [
    {
      title: "Back-Office Solutions",
      description: "Comprehensive back-office support to handle time-consuming administrative tasks and streamline your operations.",
      icon: Settings,
      features: ["Invoice Processing", "HR Data Processing", "Financial Data Entry", "Customer Database Management"],
      deliverables: ["Processed invoices", "Organized HR database", "Financial reports", "Customer database"],
      popular: true
    },
    {
      title: "Data Entry & Management",
      description: "Accurate and efficient data entry with quality assurance and database management for optimal organization.",
      icon: Database,
      features: ["CRM Data Entry", "Database Organization", "Data Verification", "Document Processing"],
      deliverables: ["Updated CRM", "Organized database", "Verified data", "Processed documents"],
      popular: false
    },
    {
      title: "Virtual Assistant Support",
      description: "General virtual assistance for various administrative tasks and comprehensive business support.",
      icon: ClipboardList,
      features: ["Task Management", "Document Preparation", "Research Activities", "Administrative Coordination"],
      deliverables: ["Task reports", "Prepared documents", "Research findings", "Coordination summaries"],
      popular: false
    },
    {
      title: "Email Management",
      description: "Professional email handling, organization, and response management to keep your inbox organized and efficient.",
      icon: Mail,
      features: ["Email Organization", "Response Management", "Follow-up Scheduling", "Priority Filtering"],
      deliverables: ["Organized inbox", "Email responses", "Follow-up schedules", "Priority filters"],
      popular: false
    },
    {
      title: "Calendar & Scheduling",
      description: "Complete calendar management and appointment scheduling to optimize your time and improve productivity.",
      icon: Calendar,
      features: ["Appointment Scheduling", "Meeting Coordination", "Calendar Organization", "Reminder Management"],
      deliverables: ["Scheduled appointments", "Meeting coordination", "Organized calendar", "Reminder systems"],
      popular: false
    }
  ]

  // Updated benefits with different colors for better understanding
  const whyChooseAdmin = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Save up to 60% compared to hiring full-time administrative staff",
      highlight: "60% Cost Savings",
      color: "from-emerald-500 to-green-500" // Green for cost savings
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Free up 20+ hours per week to focus on core business activities",
      highlight: "20+ Hours/Week",
      color: "from-blue-500 to-cyan-500" // Blue for time
    },
    {
      icon: TrendingUp,
      title: "Improved Efficiency",
      description: "Streamline operations with professional administrative support",
      highlight: "95% Efficiency",
      color: "from-purple-500 to-violet-500" // Purple for productivity
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Every task completed with precision and attention to detail",
      highlight: "99.9% Accuracy",
      color: "from-red-500 to-pink-500" // Red for reliability
    }
  ]

  const stats = [
    { label: "Admin Tasks Completed", value: "2,500+", icon: CheckCircle, color: "from-primary-500 to-orange-500" },
    { label: "Hours Saved for Clients", value: "5,000+", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { label: "Accuracy Rate", value: "99.9%", icon: Award, color: "from-green-500 to-emerald-500" },
    { label: "Client Satisfaction", value: "100%", icon: Star, color: "from-purple-500 to-violet-500" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your administrative needs and current workflows to understand your requirements.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "We create a tailored administrative support plan that fits your business processes perfectly.",
      icon: Target
    },
    {
      step: "03",
      title: "Implementation & Delivery",
      description: "Our experienced team begins handling your administrative tasks with precision and efficiency.",
      icon: Zap
    },
    {
      step: "04",
      title: "Ongoing Optimization",
      description: "Continuous improvement and optimization with regular feedback and performance monitoring.",
      icon: TrendingUp
    }
  ]

  // Updated testimonials with 6 entries for auto-scroll
  const testimonials = [
    {
      text: "TasksACE transformed our back-office operations. We save 25 hours per week and our accuracy has improved dramatically!",
      author: "Michael Chen",
      company: "TechCorp Solutions",
      role: "CEO",
      rating: 5,
      savings: "Saved 25 hours/week",
      timeframe: "6 months"
    },
    {
      text: "Their data entry services are incredibly accurate and fast. We processed 10,000+ records flawlessly.",
      author: "Sarah Williams",
      company: "DataFlow Inc.",
      role: "Operations Manager",
      rating: 5,
      savings: "100% accuracy rate",
      timeframe: "4 months"
    },
    {
      text: "Virtual assistant support has revolutionized our workflow. Task management and document preparation are now seamless and professional.",
      author: "Jennifer Martinez",
      company: "Business Solutions LLC",
      role: "Director",
      rating: 5,
      savings: "Saved $3,500/month",
      timeframe: "7 months"
    },
    {
      text: "Email management services have transformed our communications. Inbox zero every day and professional responses to all inquiries.",
      author: "David Thompson",
      company: "Marketing Innovations",
      role: "Marketing Director",
      rating: 5,
      savings: "95% response rate",
      timeframe: "5 months"
    },
    {
      text: "Calendar and scheduling management is exceptional. No more double bookings and optimized time management for our entire team.",
      author: "Lisa Anderson",
      company: "Consulting Group Pro",
      role: "Managing Partner",
      rating: 5,
      savings: "Zero scheduling conflicts",
      timeframe: "8 months"
    },
    {
      text: "Complete administrative support package exceeded expectations. Professional handling of all back-office tasks with remarkable efficiency.",
      author: "Robert Davis",
      company: "Enterprise Solutions",
      role: "COO",
      rating: 5,
      savings: "40% operational efficiency",
      timeframe: "12 months"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you start handling our administrative tasks?",
      answer: "We can typically begin within 24-48 hours after the initial consultation and setup. For urgent requirements, we can start within 24 hours."
    },
    {
      question: "What types of administrative tasks do you handle?",
      answer: "We handle a wide range of administrative tasks including back-office operations, data entry, email management, calendar scheduling, document preparation, and virtual assistant support."
    },
    {
      question: "How do you ensure quality and accuracy?",
      answer: "We have strict quality assurance processes, experienced professionals, and use proven methodologies. Every task undergoes quality checks to ensure 99.9% accuracy."
    },
    {
      question: "Can you scale services based on our needs?",
      answer: "Absolutely! Our services are flexible and can scale from part-time support to full-time administrative management based on your business requirements."
    },
    {
      question: "What communication and reporting do you provide?",
      answer: "We provide regular updates, progress reports, and are available via email, chat, or scheduled calls. Communication frequency is customized to your preferences."
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
                <ClipboardList className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">ADMINISTRATIVE EXCELLENCE</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Administrative Assistant Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Focus on growing your business while we handle all your administrative tasks with precision and professionalism. From back-office solutions to data management, we're your trusted administrative partner.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
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
                  <span className="text-sm">2,500+ Tasks Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">24h Response</span>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <ClipboardList className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete Admin Support</h3>
                  <p className="text-gray-300">Professional solutions for all your business needs</p>
                </div>

                <div className="space-y-4 mb-8">
                  {['Back-Office Solutions', 'Data Management', 'Email Organization', 'Calendar Scheduling', 'Virtual Assistance'].map((item, index) => (
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

      {/* Enhanced Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Administrative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive administrative support designed to streamline your operations and boost productivity. Each service is tailored to meet your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={(() => {
                    const urlMap: { [key: string]: string } = {
                      'Back-Office Solutions': '/services/administrative/back-office',
                      'Data Entry & Management': '/services/administrative/data-entry',
                      'Virtual Assistant Support': '/services/administrative/va-support',
                      'Email Management': '/services/administrative/email-management',
                      'Calendar & Scheduling': '/services/administrative/calendar'
                    };
                    return urlMap[service.title] || '/services/administrative';
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
              Measurable improvements to your business operations and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseAdmin.map((benefit, index) => {
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
              From initial consultation to ongoing optimization, we follow a systematic approach to deliver exceptional administrative services.
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


                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
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
                Our team can start handling your administrative tasks within 24 hours. Let's discuss your requirements and create a custom solution.
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
              Real results from businesses that have transformed their administrative operations with our services.
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
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentTestimonial === index ? 'bg-primary-500' : 'bg-gray-300'
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

                <div className={`overflow-hidden transition-all duration-300 ease-out ${openFAQ === index ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
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

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join successful businesses that have transformed their operations with TasksACE administrative solutions.
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
                  <span className="text-sm">99.9% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  )
} 