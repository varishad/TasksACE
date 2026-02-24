'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, Video, Zap, ThumbsUp, ShieldCheck, ChevronDown, ChevronUp, Scissors, Music, Edit, Layout, MessageSquare, Target, BarChart3, DollarSign, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link'

export default function BasicVideoEditingPage() {
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
  
  const videoEditingServices = [
    {
      title: "Video Trimming & Cutting",
      description: "Professional video trimming and cutting to create the perfect length content for your needs.",
      icon: Scissors,
      features: ["Scene Removal", "Length Optimization", "Smooth Transitions", "Quality Preservation"],
      deliverables: ["Edited video files", "Multiple formats", "Web-optimized versions", "Source backups"]
    },
    {
      title: "Music Addition",
      description: "Add background music, sound effects, and audio enhancements to make your videos engaging.",
      icon: Music,
      features: ["Background Music", "Sound Effects", "Audio Mixing", "Volume Balancing"],
      deliverables: ["Audio-enhanced videos", "Music licensing info", "Audio tracks", "Sync adjustments"]
    },
    {
      title: "Basic Color Adjustment",
      description: "Color correction and basic color grading to improve the visual quality of your videos.",
      icon: Edit,
      features: ["Color Correction", "Brightness Adjustment", "Contrast Enhancement", "Saturation Tuning"],
      deliverables: ["Color-corrected videos", "Before/after previews", "Settings documentation", "Multiple versions"]
    },
    {
      title: "Social Media Formatting",
      description: "Format and optimize videos for different social media platforms and aspect ratios.",
      icon: Layout,
      features: ["Platform Sizing", "Aspect Ratio Conversion", "Mobile Optimization", "Thumbnail Creation"],
      deliverables: ["Platform-specific videos", "Thumbnail images", "Optimized formats", "Upload guidelines"]
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$30/video",
      description: "Perfect for simple video editing needs",
      features: [
        "Video Trimming & Cutting",
        "Basic Color Adjustment",
        "2 Revisions",
        "48-72 Hour Delivery",
        "HD Quality Output"
      ],
      popular: false,
      buttonText: "Get Started",
      minHours: "Up to 5 minutes"
    },
    {
      name: "Professional",
      price: "$60/video",
      description: "Most popular for content creators",
      features: [
        "All Basic Features",
        "Music & Sound Effects",
        "Social Media Formatting",
        "Unlimited Revisions",
        "24-48 Hour Delivery",
        "4K Quality Output",
        "Thumbnail Creation"
      ],
      popular: true,
      buttonText: "Most Popular",
      minHours: "Up to 10 minutes"
    },
    {
      name: "Enterprise",
      price: "$499/month",
      description: "For ongoing video content needs",
      features: [
        "20 Videos per Month",
        "All Professional Features",
        "Same Day Delivery",
        "Dedicated Editor",
        "Brand Guidelines",
        "Priority Support",
        "Custom Workflows"
      ],
      popular: false,
      buttonText: "Contact Us",
      minHours: "Monthly subscription"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Video Upload",
      description: "Upload your raw video footage and share your editing requirements and preferences.",
      duration: "Same day",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Editing Process",
      description: "Our editors apply trimming, color correction, music, and formatting to your videos.",
      duration: "1-2 days",
      icon: Target
    },
    {
      step: "03",
      title: "Review & Refinement",
      description: "Review the edited video and request any adjustments or modifications needed.",
      duration: "24 hours",
      icon: Zap
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Receive your edited videos in all required formats optimized for your platforms.",
      duration: "Same day",
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Save up to 80% compared to hiring professional video editors or agencies",
      metric: "80% Cost Savings",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast video editing with most projects completed within 24-48 hours",
      metric: "24-48 Hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Professional Quality",
      description: "High-quality video editing that enhances your content's visual appeal and engagement",
      metric: "HD/4K Quality",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "Platform Optimized",
      description: "Videos formatted and optimized for all major social media platforms and devices",
      metric: "100% Optimized",
      color: "from-red-500 to-pink-500"
    }
  ]

  const testimonials = [
    {
      text: "TasksACE's video editing transformed our social media content completely. Our engagement increased by 250% and our videos look incredibly professional across all platforms!",
      author: "Sarah Kim",
      company: "Digital Marketing Agency",
      role: "Content Manager",
      rating: 5,
      savings: "250% more engagement",
      timeframe: "3 months"
    },
    {
      text: "The video editing service is outstanding. Quick turnaround, professional quality, and perfect formatting for our YouTube channel and Instagram reels.",
      author: "Mike Rodriguez",
      company: "Fitness Channel",
      role: "Content Creator",
      rating: 5,
      savings: "Professional quality",
      timeframe: "2 months"
    },
    {
      text: "Music addition and color correction services have elevated our product videos significantly. Sales conversions improved after implementing these videos.",
      author: "Lisa Chen",
      company: "E-commerce Store",
      role: "Marketing Director",
      rating: 5,
      savings: "Better conversions",
      timeframe: "4 months"
    },
    {
      text: "Video trimming and formatting for different platforms saved us hours of work. Our content now reaches audiences across all social media channels effectively.",
      author: "David Park",
      company: "Tech Startup",
      role: "Growth Manager",
      rating: 5,
      savings: "Hours saved",
      timeframe: "6 weeks"
    },
    {
      text: "The enterprise package with dedicated editor ensures consistent quality and branding across all our video content. Perfect for our content calendar.",
      author: "Emma Thompson",
      company: "Media Company",
      role: "Creative Director",
      rating: 5,
      savings: "Consistent quality",
      timeframe: "8 months"
    },
    {
      text: "Basic color adjustment and audio enhancement made our training videos look professional and engaging. Much better than our previous in-house attempts.",
      author: "James Wilson",
      company: "Educational Platform",
      role: "Content Producer",
      rating: 5,
      savings: "Professional results",
      timeframe: "5 months"
    }
  ]

  const faqs = [
    {
      question: "What types of video editing do you offer?",
      answer: "We offer basic video editing including trimming/cutting, music addition, color correction, brightness adjustment, and social media formatting. This covers most content creation needs for businesses and creators."
    },
    {
      question: "What video formats do you work with?",
      answer: "We work with all major video formats including MP4, MOV, AVI, MKV, and more. We deliver in optimized formats for web, social media, and high-quality storage based on your needs."
    },
    {
      question: "How long can the videos be?",
      answer: "Basic package handles videos up to 5 minutes, Professional package up to 10 minutes. For longer videos or enterprise needs, we offer custom pricing based on duration and complexity."
    },
    {
      question: "Do you provide music and sound effects?",
      answer: "Yes! We have access to royalty-free music libraries and sound effects. We can also work with music you provide or recommend tracks that match your content style and brand."
    },
    {
      question: "Can you format videos for specific social media platforms?",
      answer: "Absolutely! We format videos for Instagram (posts, stories, reels), YouTube, Facebook, TikTok, LinkedIn, and other platforms with proper aspect ratios and optimization for each platform's requirements."
    }
  ]

  const stats = [
    { label: "Videos Edited", value: "2,500+", icon: Video, color: "from-primary-500 to-orange-500" },
    { label: "Content Creators", value: "300+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Average Delivery", value: "<48hrs", icon: Clock, color: "from-green-500 to-emerald-500" },
    { label: "Client Satisfaction", value: "97%", icon: Star, color: "from-purple-500 to-violet-500" }
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
                <Video className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">VIDEO EDITING EXPERTS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Basic Video Editing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Transform your raw footage into engaging videos with professional editing, music addition, color correction, and platform optimization for social media success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Video Editing
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
                  <span className="text-sm">2,500+ Videos Edited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">97% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-sm">HD/4K Quality</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Complete Video Editing</h3>
                  <p className="text-gray-300">All video editing needs handled</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['Video Trimming & Cutting', 'Music Addition', 'Color Adjustment', 'Social Media Formatting', 'Professional Quality'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">Starting at $30/video</div>
                    <div className="text-primary-400 text-sm">Up to 5 minutes</div>
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
              Comprehensive basic video editing services to transform your raw footage into engaging, professional content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoEditingServices.map((service, index) => {
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
              Measurable improvements to your video content quality and audience engagement.
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
              Transparent pricing with no hidden fees. Choose the perfect plan for your video editing needs.
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
              Our Editing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From raw footage to polished videos, we follow a systematic approach to deliver professional video editing results.
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
                Our video editing team can start transforming your raw footage into engaging content within hours. Let's create amazing videos together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Video Editing
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
              Real results from content creators who have enhanced their videos with our professional editing services.
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
              Contact our video editing team
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
              <span className="text-sm font-semibold text-primary-700">Ready to Create Amazing Videos?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your Video Content?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of content creators who have enhanced their videos with TasksACE's professional video editing services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Video Editing
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
                  <span className="text-sm">Professional Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">Platform Optimized</span>
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