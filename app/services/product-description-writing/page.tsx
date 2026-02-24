'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, Award, PenTool, Zap, ChevronDown, ChevronUp, Search, Target, Lightbulb, MessageSquare, BarChart3, DollarSign, TrendingUp, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link'

export default function ProductDescriptionWritingPage() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  const writingServices = [
    {
      title: "SEO-Optimized Copy",
      description: "Search engine optimized product descriptions that improve rankings and drive organic traffic.",
      icon: Search,
      features: ["Keyword Research", "Meta Descriptions", "SEO Best Practices", "Search Optimization"],
      deliverables: ["SEO copy", "Keyword reports", "Meta tags", "Search rankings"]
    },
    {
      title: "Conversion-Focused Writing",
      description: "Persuasive product descriptions designed to convert visitors into paying customers.",
      icon: Target,
      features: ["Benefit-Focused Copy", "Call-to-Action", "Customer Psychology", "Conversion Optimization"],
      deliverables: ["Sales copy", "CTA buttons", "Conversion reports", "A/B test results"]
    },
    {
      title: "Feature Highlighting",
      description: "Professional highlighting of key product features and unique selling propositions.",
      icon: Lightbulb,
      features: ["Feature Analysis", "USP Development", "Benefit Translation", "Competitive Advantage"],
      deliverables: ["Feature lists", "USP statements", "Benefit descriptions", "Comparison charts"]
    },
    {
      title: "Brand Voice Alignment",
      description: "Consistent brand voice and tone across all product descriptions for professional presentation.",
      icon: PenTool,
      features: ["Brand Guidelines", "Tone Consistency", "Voice Development", "Style Guide"],
      deliverables: ["Brand guidelines", "Style guide", "Voice samples", "Consistency reports"]
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$8/hour",
      description: "Perfect for small product catalogs",
      features: [
        "Product Descriptions (up to 50)",
        "Basic SEO Optimization",
        "Standard Features",
        "Email Support",
        "Weekly Delivery"
      ],
      popular: false,
      buttonText: "Get Started",
      minHours: "5 hours/month minimum"
    },
    {
      name: "Professional",
      price: "$12/hour",
      description: "Ideal for growing e-commerce stores",
      features: [
        "Unlimited Product Descriptions",
        "Advanced SEO Optimization",
        "Conversion-Focused Copy",
        "Brand Voice Alignment",
        "Priority Support",
        "Daily Delivery",
        "A/B Testing Support"
      ],
      popular: true,
      buttonText: "Most Popular",
      minHours: "10 hours/month minimum"
    },
    {
      name: "Enterprise",
      price: "$15/hour",
      description: "For large catalogs requiring expertise",
      features: [
        "All Professional features",
        "Custom Brand Voice",
        "Multi-Language Support",
        "Dedicated Copywriter",
        "Real-time Collaboration",
        "Advanced Analytics",
        "24/7 Support"
      ],
      popular: false,
      buttonText: "Contact Us",
      minHours: "20 hours/month minimum"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Product Analysis",
      description: "We analyze your products, target audience, and competitor descriptions for optimal strategy.",
      duration: "1 day",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Keyword Research",
      description: "We conduct comprehensive keyword research for SEO optimization and search visibility.",
      duration: "1-2 days",
      icon: Search
    },
    {
      step: "03",
      title: "Copy Creation",
      description: "We write compelling, SEO-optimized descriptions that highlight benefits and drive sales.",
      duration: "Ongoing",
      icon: PenTool
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous testing and optimization for better conversion rates and search rankings.",
      duration: "Monthly",
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Save up to 65% compared to hiring dedicated copywriting staff",
      metric: "65% Cost Savings",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Get 50+ professional descriptions written per day",
      metric: "50+ Descriptions/Day",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Conversion Boost",
      description: "Increase conversion rates by up to 40% with persuasive copy",
      metric: "40% Higher Conversions",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "SEO Performance",
      description: "Improve search rankings with optimized product descriptions",
      metric: "200% SEO Improvement",
      color: "from-red-500 to-pink-500"
    }
  ]

  const testimonials = [
    {
      text: "The product descriptions transformed our entire catalog! Conversion rates increased by 35% and our search rankings improved dramatically.",
      author: "Sarah Johnson",
      company: "Fashion Forward",
      role: "Marketing Director",
      rating: 5,
      savings: "35% conversion boost",
      timeframe: "2 months"
    },
    {
      text: "Professional copywriting that perfectly captures our brand voice. SEO optimization brought 3x more organic traffic to our products.",
      author: "Michael Chen",
      company: "TechGear Pro",
      role: "E-commerce Manager",
      rating: 5,
      savings: "3x organic traffic",
      timeframe: "3 months"
    },
    {
      text: "Outstanding quality and attention to detail. Every product description is compelling and drives sales. Highly recommended!",
      author: "Jennifer Martinez",
      company: "Home & Garden Elite",
      role: "Store Owner",
      rating: 5,
      savings: "25% sales increase",
      timeframe: "4 months"
    },
    {
      text: "The SEO-optimized descriptions helped us rank #1 for key product searches. Our visibility and sales have never been better.",
      author: "David Rodriguez",
      company: "Sports Equipment Plus",
      role: "Digital Marketing Manager",
      rating: 5,
      savings: "#1 search rankings",
      timeframe: "5 months"
    },
    {
      text: "Brand voice consistency across 1000+ products is perfect. Professional writing that resonates with our target audience.",
      author: "Lisa Wang",
      company: "Beauty Essentials",
      role: "Brand Manager",
      rating: 5,
      savings: "1000+ products written",
      timeframe: "6 months"
    },
    {
      text: "Conversion-focused copy that actually works. Our product pages now sell themselves with these compelling descriptions.",
      author: "Robert Thompson",
      company: "Electronics Hub",
      role: "Sales Director",
      rating: 5,
      savings: "45% conversion improvement",
      timeframe: "7 months"
    }
  ]

  const faqs = [
    {
      question: "How many product descriptions can you write per day?",
      answer: "We can typically write 20-50 product descriptions per day depending on complexity and research requirements. Rush orders available for urgent needs."
    },
    {
      question: "Do you research keywords for each product?",
      answer: "Yes, we conduct thorough keyword research for every product to ensure optimal SEO performance and search visibility."
    },
    {
      question: "Can you match our existing brand voice?",
      answer: "Absolutely! We analyze your existing content and brand guidelines to ensure consistent voice and tone across all descriptions."
    },
    {
      question: "What's included in your copywriting service?",
      answer: "Our service includes product descriptions, meta descriptions, bullet points, feature highlights, and SEO optimization for each product."
    },
    {
      question: "How do you ensure quality and accuracy?",
      answer: "We use a multi-step review process including research verification, brand alignment checks, and SEO optimization validation."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative bg-black pt-12 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/3 to-orange-500/3 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/10 rounded-full px-4 py-2 mb-6 border border-primary-500/20">
                <PenTool className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">COPYWRITING EXPERTS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Product Description Writing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                SEO-optimized product descriptions that convert visitors into customers. Compelling copy that highlights benefits and drives sales across all e-commerce platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Writing Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#pricing" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">10,000+ Descriptions Written</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">40% Conversion Boost</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">24h Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <PenTool className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Copywriting</h3>
                  <p className="text-gray-300">Convert visitors into customers</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['SEO-Optimized Copy', 'Conversion-Focused Writing', 'Brand Voice Alignment', 'Keyword Research', 'Quality Assurance'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Starting at $8/hour</div>
                    <div className="text-primary-400 text-sm">5 hours minimum</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link href="#pricing" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300">
                    View All Plans
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Descriptions Written", value: "10,000+", icon: FileText, color: "from-primary-500 to-orange-500" },
              { label: "Conversion Improvement", value: "40%", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
              { label: "SEO Ranking Boost", value: "200%", icon: Search, color: "from-green-500 to-emerald-500" },
              { label: "Client Satisfaction", value: "100%", icon: Star, color: "from-purple-500 to-violet-500" }
            ].map((stat, index) => {
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

      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Copywriting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional product description writing services that convert browsers into buyers with compelling, SEO-optimized copy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {writingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Deliverables:</h4>
                      <div className="space-y-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <Award size={14} className="text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements to your product performance and sales conversion rates.
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

      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
              From product analysis to final copy delivery, we follow a systematic approach to create converting product descriptions.
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
                Our copywriting team can start improving your product descriptions within 24 hours. Let's create compelling copy that converts.
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

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that have improved their conversions with our copywriting services.
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

      <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your copywriting needs. All plans include SEO optimization and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg border ${plan.popular ? 'border-primary-500 border-2' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300`}>
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
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-sm text-gray-500">{plan.minHours}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                    : 'border-2 border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300'
                }`}>
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need help with copywriting?</p>
            <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
              Contact our copywriters
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Boost Your Conversions?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your product descriptions with compelling copy that converts browsers into buyers and drives sales growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
                <Link href="/services/ecommerce" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                Back to E-commerce Services
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">10K+ Descriptions Written</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">40% Conversion Boost</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">24hr Delivery</span>
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