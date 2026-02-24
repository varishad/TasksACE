'use client'

import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, Palette, Zap, ThumbsUp, ChevronUp, ChevronDown, PenTool, Video, Monitor, DollarSign, Timer, Lightbulb, ShieldCheck, Brush, MessageSquare, Settings, Image } from 'lucide-react';
import Link from 'next/link'



export default function CreativeDesignServicesPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(-1);

  const creativeServices = [
    {
      title: "Graphic Design (Canva)",
      description: "Professional graphic design using Canva for all your business and marketing needs with modern aesthetics.",
      icon: Palette,
      features: ["Flyer Design", "Logo Creation", "Banner Design", "Social Media Graphics"],
      benefits: ["Professional appearance", "Brand consistency", "Quick turnaround", "Cost-effective solutions"],
      popular: true
    },
    {
      title: "Business Materials Design",
      description: "Create professional business materials that represent your brand effectively and leave lasting impressions.",
      icon: PenTool,
      features: ["Business Cards", "Presentation Design", "Brochures", "Marketing Materials"],
      benefits: ["Professional branding", "Print-ready files", "Brand alignment", "High-quality designs"],
      popular: false
    },
    {
      title: "E-commerce Graphics",
      description: "Specialized graphics for e-commerce stores including product images and promotional materials.",
      icon: Image,
      features: ["Product Image Enhancement", "Store Banners", "Promotional Graphics", "Category Images"],
      benefits: ["Increased conversions", "Professional storefront", "Brand consistency", "Sales-focused design"],
      popular: false
    },
    {
      title: "Basic Video Editing",
      description: "Professional video editing services for social media, products, and promotional content.",
      icon: Video,
      features: ["Video Trimming & Cutting", "Music Addition", "Basic Color Adjustment", "Social Media Formatting"],
      benefits: ["Engaging content", "Platform optimization", "Professional quality", "Quick delivery"],
      popular: false
    },
    {
      title: "Social Media Content",
      description: "Create engaging visual content optimized for various social media platforms and audiences.",
      icon: Monitor,
      features: ["Instagram Posts", "Facebook Graphics", "YouTube Thumbnails", "Story Templates"],
      benefits: ["Increased engagement", "Platform-specific designs", "Consistent branding", "Growth-focused content"],
      popular: false
    }
  ]

  const whyChooseCreative = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce design costs by up to 70% compared to hiring full-time design teams or expensive agencies.",
      highlight: "70% Cost Reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Timer,
      title: "Time Efficiency",
      description: "Get professional designs delivered in 24-48 hours, significantly faster than traditional agencies.",
      highlight: "24-48hr Delivery",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Award-winning creative team with expertise across all design disciplines and industries.",
      highlight: "Award-Winning Team",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "100% satisfaction guarantee with unlimited revisions and professional quality standards.",
      highlight: "100% Satisfaction",
      color: "from-red-500 to-pink-500"
    }
  ]

  const stats = [
    { label: "Designs Created", value: "1,200+", icon: Palette, color: "from-primary-500 to-orange-500" },
    { label: "Videos Edited", value: "350+", icon: Video, color: "from-red-500 to-pink-500" },
    { label: "Brands Designed", value: "85+", icon: Brush, color: "from-blue-500 to-cyan-500" },
    { label: "Client Satisfaction", value: "98%", icon: Star, color: "from-green-500 to-emerald-500" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Creative Brief",
      description: "We understand your vision, brand guidelines, target audience, and project requirements in detail.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our creative team develops initial concepts and design directions based on your brief.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Design Creation",
      description: "We create high-quality designs with attention to detail and brand consistency.",
      icon: Settings
    },
    {
      step: "04",
      title: "Refinement & Delivery",
      description: "Final refinements based on feedback and delivery of all design assets in required formats.",
      icon: Zap
    }
  ]

  const testimonials = [
    {
      text: "TasksACE created stunning social media graphics that increased our engagement by 150%. The quality is exceptional!",
      author: "Emma Johnson",
      company: "Digital Marketing Pro",
      role: "Marketing Manager",
      rating: 5,
      service: "Social Media Graphics"
    },
    {
      text: "The logo design perfectly captures our brand identity. Professional process and incredible attention to detail.",
      author: "Alex Chen",
      company: "TechStart Inc",
      role: "Founder & CEO",
      rating: 5,
      service: "Logo Design"
    },
    {
      text: "Video editing service is top-notch! Our promotional videos now look like they cost 10x what we paid.",
      author: "Maria Rodriguez",
      company: "Fitness First",
      role: "Content Director",
      rating: 5,
      service: "Video Editing"
    },
    {
      text: "Website design exceeded expectations. Modern, responsive, and perfectly aligned with our brand vision.",
      author: "James Wilson",
      company: "Creative Agency",
      role: "Creative Director",
      rating: 5,
      service: "Website Design"
    },
    {
      text: "Business card design is beautiful and professional. Clients always compliment our branding materials.",
      author: "Sarah Lee",
      company: "Law Firm Partners",
      role: "Managing Partner",
      rating: 5,
      service: "Print Design"
    },
    {
      text: "Presentation design transformed our sales deck. Closing rate improved by 40% with these professional slides.",
      author: "David Kumar",
      company: "Sales Solutions",
      role: "Sales Director",
      rating: 5,
      service: "Presentation Design"
    }
  ]

  const designTools = [
    { name: "Canva Pro", expertise: "Expert" },
    { name: "Adobe Photoshop", expertise: "Advanced" },
    { name: "Figma", expertise: "Advanced" },
    { name: "Adobe Premiere", expertise: "Intermediate" },
    { name: "After Effects", expertise: "Basic" },
    { name: "Illustrator", expertise: "Intermediate" }
  ]

  const faqs = [
    {
      question: "What's included in your logo design package?",
      answer: "Our logo design includes 3-5 initial concepts, unlimited revisions, multiple file formats (PNG, JPG, SVG, AI), style guide, and commercial usage rights."
    },
    {
      question: "How long does a typical design project take?",
      answer: "Logo design: 3-5 business days, Web design: 5-10 days, Print materials: 2-4 days, Brand identity: 7-14 days. Rush delivery available for urgent projects."
    },
    {
      question: "Do you provide source files and commercial rights?",
      answer: "Yes, all projects include source files (AI, PSD, etc.) and full commercial usage rights. You own 100% of the final designs once payment is complete."
    },
    {
      question: "Can you match our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines or help create new ones. We ensure consistency across all design materials."
    },
    {
      question: "Do you offer ongoing design support after project completion?",
      answer: "Yes, we provide ongoing design support including minor revisions, new materials, and brand consistency maintenance for all our clients."
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
                <Palette className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">CREATIVE EXCELLENCE</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Creative & Design Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Professional visual content creation using Canva and video editing tools. From stunning graphics to engaging videos, we bring your creative vision to life with modern design principles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Creating Today
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
                  <span className="text-sm">85+ Brands Designed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">48h Delivery</span>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Creative Solutions</h3>
                  <p className="text-gray-300">Professional design for every need</p>
                </div>

                <div className="space-y-4 mb-8">
                  {['Graphic Design (Canva)', 'Business Materials', 'Video Editing', 'Social Media Content', 'E-commerce Graphics'].map((item, index) => (
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

      {/* Tools Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Design Tools We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional expertise across leading design and video editing platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tool.expertise === 'Expert'
                      ? 'bg-orange-100 text-orange-700'
                      : tool.expertise === 'Advanced'
                        ? 'bg-primary-100 text-primary-700'
                        : tool.expertise === 'Intermediate'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-700'
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
              <span className="text-primary-700 text-sm font-semibold">OUR CREATIVITY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Creative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional design and video services to elevate your brand and engage your audience. Each service is crafted to deliver stunning visual impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={(() => {
                    const urlMap: { [key: string]: string } = {
                      'Graphic Design (Canva)': '/services/creative-design/canva-design',
                      'Business Materials Design': '/services/creative-design/business-materials',
                      'E-commerce Graphics': '/services/creative-design/ecommerce-graphics',
                      'Basic Video Editing': '/services/creative-design/video-editing',
                      'Social Media Content': '/services/creative-design/social-media-content'
                    };
                    return urlMap[service.title] || '/services/creative-design';
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
              Measurable improvements to your brand presence and creative output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseCreative.map((benefit, index) => {
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
              From concept to creation, we follow a proven process to deliver exceptional design results that exceed expectations.
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
                Ready to Transform Your Brand?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our creative team can start working on your project within 24 hours. Let's discuss your vision and bring it to life.
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
              Real feedback from brands that have elevated their visual presence with our creative services.
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
            <p className="text-gray-600 mb-4">Need help with a specific design project?</p>
            <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
              Let's discuss your vision
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
              <span className="text-sm font-semibold text-primary-700">Your Vision Awaits</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your brand with professional design solutions that captivate your audience and drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Design Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/services" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                Explore All Services
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">1000+ Designs Created</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">48hr Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">100% Brand Rights</span>
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