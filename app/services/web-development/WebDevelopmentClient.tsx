'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Star, Clock, Code, Zap, ThumbsUp, ChevronUp, ChevronDown, Globe, Settings, Monitor, Server, DollarSign, Timer, ShieldCheck, Cpu, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link'

export default function WebDevelopmentClient() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(-1);

  const techServices = [
    {
      title: "Custom Website Creation",
      description: "Professional custom websites built with clean code and modern design principles for optimal performance.",
      icon: Code,
      features: ["Custom Coding", "Responsive Design", "SEO Optimization", "Performance Optimization"],
      benefits: ["Unique design", "Fast loading", "Mobile-friendly", "Search engine ready"],
      popular: true
    },
    {
      title: "E-commerce Website Development",
      description: "Specialized e-commerce website development with platform expertise and conversion optimization.",
      icon: Globe,
      features: ["Platform Development", "Custom Features", "Payment Integration", "Mobile Optimization"],
      benefits: ["Scalable architecture", "Secure payments", "User-friendly design", "Conversion focused"],
      popular: false
    },
    {
      title: "Small Tool Development",
      description: "Custom tools and applications to automate your business processes and improve efficiency.",
      icon: Settings,
      features: ["Automation Tools", "Web Applications", "API Integration", "Custom Solutions"],
      benefits: ["Process automation", "Time savings", "Custom functionality", "Streamlined workflows"],
      popular: false
    },
    {
      title: "Landing Page Creation",
      description: "High-converting landing pages designed to capture leads and drive conversions effectively.",
      icon: Monitor,
      features: ["Conversion Optimization", "A/B Testing Setup", "Form Integration", "Analytics Tracking"],
      benefits: ["Higher conversions", "Lead generation", "Data-driven design", "Performance tracking"],
      popular: false
    },
    {
      title: "Website Maintenance",
      description: "Ongoing website maintenance and updates to keep your site running smoothly and securely.",
      icon: Server,
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates"],
      benefits: ["Always up-to-date", "Secure website", "Optimal performance", "Peace of mind"],
      popular: false
    }
  ]

  const whyChooseTechnical = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce development costs by up to 60% compared to hiring full-time developers or expensive agencies.",
      highlight: "60% Cost Reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Timer,
      title: "Time Efficiency",
      description: "Accelerate development timelines with 24-48 hour turnaround for most technical tasks.",
      highlight: "24-48hr Delivery",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Technical Excellence",
      description: "Expert-level coding standards with modern technologies and best practices.",
      highlight: "Expert-Level Quality",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      description: "Enterprise-grade security implementation with 99.9% uptime and performance optimization.",
      highlight: "99.9% Uptime",
      color: "from-red-500 to-pink-500"
    }
  ]

  const stats = [
    { label: "Websites Developed", value: "150+", icon: Code, color: "from-primary-500 to-orange-500" },
    { label: "Tools Created", value: "75+", icon: Settings, color: "from-orange-500 to-red-500" },
    { label: "Technologies Used", value: "15+", icon: Cpu, color: "from-amber-500 to-orange-600" },
    { label: "Client Satisfaction", value: "100%", icon: Star, color: "from-orange-600 to-red-600" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your technical requirements, existing systems, and project objectives in detail.",
      icon: Target
    },
    {
      step: "02",
      title: "Architecture Planning",
      description: "Our team designs the technical architecture and development roadmap for your project.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build, test, and optimize your solution using industry best practices.",
      icon: Settings
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your solution with ongoing support and maintenance for optimal performance.",
      icon: Zap
    }
  ]

  const testimonials = [
    {
      text: "TasksACE built our entire e-commerce platform in 2 weeks. Performance is exceptional and sales increased 200%!",
      author: "Jennifer Martinez",
      company: "Online Retail Store",
      role: "CEO",
      rating: 5,
      service: "Web Development"
    },
    {
      text: "Database optimization reduced our query times by 90%. Our app is now lightning fast and users love it.",
      author: "David Thompson",
      company: "SaaS Platform",
      role: "CTO",
      rating: 5,
      service: "Database Optimization"
    },
    {
      text: "API integration was seamless and perfectly documented. Saved us months of development time.",
      author: "Sarah Chen",
      company: "Fintech Startup",
      role: "Lead Developer",
      rating: 5,
      service: "API Integration"
    },
    {
      text: "WordPress customization exceeded expectations. Our site is now exactly what we envisioned.",
      author: "Michael Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      rating: 5,
      service: "WordPress Development"
    },
    {
      text: "Technical support is outstanding. 24/7 availability and issues resolved within hours every time.",
      author: "Lisa Wang",
      company: "Tech Company",
      role: "Operations Manager",
      rating: 5,
      service: "Technical Support"
    },
    {
      text: "Custom automation solutions transformed our workflow. Productivity increased 300% in 3 months.",
      author: "Robert Johnson",
      company: "Manufacturing Business",
      role: "COO",
      rating: 5,
      service: "Automation Solutions"
    }
  ]

  const technologies = [
    { name: "React.js", expertise: "Expert" },
    { name: "Next.js", expertise: "Expert" },
    { name: "Node.js", expertise: "Advanced" },
    { name: "Python", expertise: "Advanced" },
    { name: "TypeScript", expertise: "Expert" },
    { name: "PostgreSQL", expertise: "Advanced" }
  ]

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Node.js, Python, PHP, WordPress, and more. We choose the best technology stack based on your specific project requirements."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Simple websites: 1-2 weeks, Business websites: 2-4 weeks, E-commerce sites: 4-6 weeks, Custom applications: 6-12 weeks. Timeline depends on complexity and features."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, bug fixes, content updates, and 24/7 technical support."
    },
    {
      question: "Can you help with website optimization and performance?",
      answer: "Absolutely! We provide performance optimization, SEO improvements, speed enhancements, mobile optimization, and accessibility compliance for existing websites."
    },
    {
      question: "Do you offer hosting and domain management?",
      answer: "Yes, we provide reliable hosting solutions, domain registration, SSL certificates, email setup, and complete server management to keep your website running smoothly."
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
    <>
      {/* Enhanced Hero Section */}
      <section className="relative bg-black pt-12 pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/3 to-orange-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500/10 rounded-full px-4 py-2 mb-6 border border-blue-500/20">
                <Code className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-semibold">TECHNICAL EXCELLENCE</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Professional Web Development Services
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Custom technical solutions including websites, tools, and development services. From responsive web development to automation tools, we bring your technical vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Building Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="#services" className="group border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-blue-500/10">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">150+ Websites Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm">2-4 Week Delivery</span>
                </div>
              </div>
            </div>

            {/* Enhanced Right Side Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Technical Solutions</h3>
                  <p className="text-gray-300">Custom development for your needs</p>
                </div>

                <div className="space-y-4 mb-8">
                  {['Custom Website Creation', 'E-commerce Development', 'Tool Development', 'Landing Pages', 'Website Maintenance'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="#services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
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

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for modern web development solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tech.expertise === 'Expert'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                    }`}>
                    {tech.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Technical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development and technical solutions designed to power your digital transformation. Each service is built with scalability and performance in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={(() => {
                    const urlMap: { [key: string]: string } = {
                      'Custom Website Creation': '/services/web-development/custom-websites',
                      'E-commerce Website Development': '/services/web-development/ecommerce-websites',
                      'Small Tool Development': '/services/web-development/tools',
                      'Landing Page Creation': '/services/web-development/landing-pages',
                      'Website Maintenance': '/services/web-development/maintenance'
                    };
                    return urlMap[service.title] || '/services/web-development';
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
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements to your technical infrastructure and digital capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseTechnical.map((benefit, index) => {
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

        <div className="max-w-[1344px] mx-auto container-padding relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-primary-700 text-sm font-semibold">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From requirements analysis to deployment, we follow a systematic approach to deliver high-quality technical solutions.
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
                Ready to Build Your Digital Future?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our technical team can start working on your project within 24 hours. Let's discuss your requirements and bring your vision to life.
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
        <div className="max-w-[1344px] mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that have transformed their technical infrastructure with our expertise.
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
            <p className="text-gray-600 mb-4">Have a specific technical challenge?</p>
            <Link href="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
              Let's solve it together
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
              <span className="text-sm font-semibold text-primary-700">Innovation Awaits</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into powerful digital solutions with our expert development team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Project
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
                  <span className="text-sm">200+ Websites Built</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 