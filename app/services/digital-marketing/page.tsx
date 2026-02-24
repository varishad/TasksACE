'use client'

import React, { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, ThumbsUp, ChevronUp, ChevronDown, PenTool, Youtube, Search, Edit, Users, DollarSign, Timer, Target, Lightbulb, Settings, ShieldCheck } from 'lucide-react';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Marketing Virtual Assistant Services | TasksACE SEO & Content Marketing',
  description: 'Professional digital marketing virtual assistant services including SEO, content creation, social media management, keyword research, and YouTube optimization. Grow your online presence.',
  keywords: 'digital marketing virtual assistant, SEO services, content creation, social media management, keyword research, YouTube optimization, online marketing',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'Digital Marketing Virtual Assistant Services | TasksACE SEO & Content Marketing',
    description: 'Professional digital marketing virtual assistant services including SEO, content creation, social media management, keyword research, and YouTube optimization. Grow your online presence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/services/digital-marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Virtual Assistant Services | TasksACE',
    description: 'Professional digital marketing services. SEO, content creation, social media management, and YouTube optimization.',
    creator: '@tasksace',
  },
}

export default function DigitalMarketingContentPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(-1);

  const marketingServices = [
    {
      title: "Copywriting",
      description: "Compelling copy that converts visitors into customers across all marketing channels and platforms.",
      icon: PenTool,
      features: ["Sales Copy", "Email Sequences", "Landing Pages", "Product Descriptions"],
      benefits: ["Higher conversion rates", "Persuasive messaging", "Brand voice consistency", "Sales-focused content"],
      popular: true
    },
    {
      title: "YouTube SEO",
      description: "Optimize your YouTube channel and videos for maximum reach, engagement, and subscriber growth.",
      icon: Youtube,
      features: ["Video SEO", "Thumbnail Design", "Tag Optimization", "Channel Growth"],
      benefits: ["Increased visibility", "More subscribers", "Higher engagement", "Better rankings"],
      popular: false
    },
    {
      title: "Keyword Research",
      description: "In-depth keyword analysis to improve your search rankings and content strategy effectiveness.",
      icon: Search,
      features: ["Competitor Analysis", "Search Volume Data", "Keyword Mapping", "Content Strategy"],
      benefits: ["Better SEO rankings", "Targeted traffic", "Content optimization", "Competitive advantage"],
      popular: false
    },
    {
      title: "Content Creation",
      description: "High-quality content creation for blogs, social media, and marketing campaigns that engage audiences.",
      icon: Edit,
      features: ["Blog Writing", "Social Media Posts", "Email Campaigns", "Web Copy"],
      benefits: ["Engaging content", "Brand authority", "Increased traffic", "Lead generation"],
      popular: false
    },
    {
      title: "Social Media Management",
      description: "Complete social media management to build your brand and engage with customers effectively.",
      icon: Users,
      features: ["Content Planning", "Post Scheduling", "Community Management", "Analytics Reporting"],
      benefits: ["Brand awareness", "Community growth", "Customer engagement", "Social presence"],
      popular: false
    }
  ]

  const whyChooseMarketing = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce marketing costs by up to 65% while achieving better results than expensive agencies.",
      highlight: "65% Cost Reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Timer,
      title: "Time Efficiency",
      description: "Get campaigns launched in 24-48 hours and see results within the first week.",
      highlight: "24-48hr Launch",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Data-driven strategies that consistently deliver 3x better ROI than industry standards.",
      highlight: "3x Better ROI",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "Performance Guarantee",
      description: "Guaranteed improvements in engagement, traffic, and conversions or your money back.",
      highlight: "Results Guaranteed",
      color: "from-red-500 to-pink-500"
    }
  ]

  const stats = [
    { label: "Content Pieces Created", value: "2,500+", icon: Edit, color: "from-primary-500 to-orange-500" },
    { label: "YouTube Videos Optimized", value: "450+", icon: Youtube, color: "from-orange-500 to-red-500" },
    { label: "Keywords Researched", value: "10K+", icon: Search, color: "from-amber-500 to-orange-600" },
    { label: "Campaign ROI", value: "+300%", icon: TrendingUp, color: "from-orange-600 to-red-600" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: "We analyze your market, competitors, and audience to create a winning marketing strategy.",
      icon: Target
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our team creates compelling content that resonates with your target audience.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "We execute multi-channel campaigns with precision and attention to detail.",
      icon: Settings
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization to maximize your marketing ROI.",
      icon: Zap
    }
  ]

  const testimonials = [
    {
      text: "TasksACE increased our organic traffic by 300% in just 3 months. Their SEO expertise is unmatched!",
      author: "Jennifer Martinez",
      company: "E-commerce Store",
      role: "Marketing Director",
      rating: 5,
      service: "SEO Optimization"
    },
    {
      text: "Social media management transformed our online presence. Engagement up 250% and leads tripled!",
      author: "David Thompson",
      company: "Tech Startup",
      role: "Founder",
      rating: 5,
      service: "Social Media Management"
    },
    {
      text: "Content marketing strategy delivered incredible results. Our blog traffic increased 400% in 4 months.",
      author: "Sarah Chen",
      company: "SaaS Company",
      role: "Content Manager",
      rating: 5,
      service: "Content Marketing"
    },
    {
      text: "Email campaigns are now our top revenue driver. Open rates improved 80% and conversions doubled.",
      author: "Michael Rodriguez",
      company: "Retail Business",
      role: "Sales Manager",
      rating: 5,
      service: "Email Marketing"
    },
    {
      text: "PPC management reduced our cost per acquisition by 60% while doubling our lead volume. Exceptional!",
      author: "Lisa Wang",
      company: "Service Business",
      role: "Marketing Lead",
      rating: 5,
      service: "PPC Management"
    },
    {
      text: "Digital marketing strategy increased our online revenue by 350%. ROI has been phenomenal.",
      author: "Robert Johnson",
      company: "Local Business",
      role: "Owner",
      rating: 5,
      service: "Digital Strategy"
    }
  ]

  const marketingTools = [
    { name: "Google Analytics", expertise: "Expert" },
    { name: "SEMrush", expertise: "Expert" },
    { name: "Ahrefs", expertise: "Advanced" },
    { name: "Hootsuite", expertise: "Advanced" },
    { name: "Mailchimp", expertise: "Expert" },
    { name: "TubeBuddy", expertise: "Advanced" }
  ]

  const faqs = [
    {
      question: "How do you measure content marketing success?",
      answer: "We track key metrics including website traffic, engagement rates, lead generation, conversion rates, social media growth, and ROI. Monthly reports show progress against your specific goals."
    },
    {
      question: "What's your content creation process?",
      answer: "We start with content strategy development, audience research, keyword analysis, content calendar creation, professional writing/design, client review, and publishing with ongoing optimization."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We adapt all content to match your brand voice, style guidelines, and messaging strategy while ensuring consistency across all marketing channels."
    },
    {
      question: "How quickly can you start our marketing campaigns?",
      answer: "Content campaigns can start within 48-72 hours after strategy approval. Social media management begins within 24 hours, and SEO campaigns launch within one week."
    },
    {
      question: "Do you provide content for multiple platforms?",
      answer: "Yes, we create platform-specific content for websites, blogs, social media, email campaigns, ads, and more. Each piece is optimized for its intended platform and audience."
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/3 to-red-500/3 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500/10 rounded-full px-4 py-2 mb-6 border border-orange-500/20">
                <TrendingUp className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-orange-400 text-sm font-semibold">MARKETING EXCELLENCE</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Digital Marketing Services
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Expert digital marketing and content creation services to grow your online presence. From compelling copywriting to YouTube SEO and keyword research, we drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Growing Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#services" className="group border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-orange-500/10">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">50+ Campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm">300% ROI</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Marketing Excellence</h3>
                  <p className="text-gray-300">Drive growth with proven strategies</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {['Copywriting', 'YouTube SEO', 'Content Creation', 'Social Media Management', 'Keyword Research'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link href="#services" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-40"></div>
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

      {/* Tools Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Marketing Tools</span> We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional expertise with industry-leading marketing and analytics platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tool.expertise === 'Expert' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {tool.expertise}
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
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your online presence and drive real business results. Each service is optimized for maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={(() => {
                    const urlMap: { [key: string]: string } = {
                      'Copywriting': '/services/digital-marketing/copywriting',
                      'YouTube SEO': '/services/digital-marketing/youtube-seo',
                      'Keyword Research': '/services/digital-marketing/keyword-research',
                      'Content Creation': '/services/digital-marketing/content',
                      'Social Media Management': '/services/digital-marketing/social-media'
                    };
                    return urlMap[service.title] || '/services/digital-marketing';
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
              Measurable improvements to your marketing performance and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMarketing.map((benefit, index) => {
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
              From strategy development to growth optimization, we follow a data-driven approach to deliver exceptional marketing results.
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
                Ready to Accelerate Your Growth?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our marketing team can start driving results for your business within 24 hours. Let's discuss your goals and create a winning strategy.
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
              Real results from businesses that have accelerated their growth with our marketing expertise.
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
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === Math.floor(currentTestimonialIndex / 2) ? 'bg-primary-500' : 'bg-gray-300'
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
            <p className="text-gray-600 mb-4">Ready to boost your digital presence?</p>
            <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
              Let's create your strategy
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
              <span className="text-sm font-semibold text-primary-700">Growth Awaits</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Amplify Your Digital Reach?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with us to create compelling content and marketing strategies that drive engagement and grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Launch Your Campaign
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
                  <span className="text-sm">2M+ Content Views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">300% Avg Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">24hr Publishing</span>
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