import React from 'react'
import type { Metadata } from 'next'
import { Target, ArrowRight, MessageSquare, Calendar, CheckCircle, Eye, Users, Clock, Heart, Globe, Award, Building, Star } from 'lucide-react';

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/about')
}

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients at the center of everything we do, ensuring their success is our primary goal."
    },
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "We maintain the highest standards of quality and precision in every task we undertake."
    },
    {
      icon: Clock,
      title: "Reliability & Timeliness",
      description: "We deliver on our promises and respect our clients' time with punctual, dependable service."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team is passionate about helping businesses grow and succeed through dedicated support."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international expertise and best practices to serve clients worldwide."
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description: "We constantly evolve our processes and skills to provide cutting-edge solutions."
    }
  ]

  const team = [
    {
      name: "Md Rishad Rahman",
      position: "Founder & CEO",
      bio: "With over 8 years of experience in business operations and virtual assistance, Rishad founded TasksACE with a vision to help businesses scale efficiently through dedicated support services.",
      expertise: ["Business Strategy", "Operations Management", "Team Leadership"]
    },
    {
      name: "Alfi Sharin Shimu",
      position: "Managing Director",
      bio: "Alfi leads our operations team with expertise in process optimization and quality assurance, ensuring every client receives exceptional service and strategic growth.",
      expertise: ["Operations Management", "Quality Assurance", "Strategic Planning"]
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "TasksACE Founded",
      description: "Born from a vision to transform business operations. Started with dedication to help entrepreneurs focus on what they do best while we handle the rest.",
      icon: Building
    },
    {
      year: "2021",
      title: "First 100 Projects",
      description: "Achieved our first major milestone with 100+ successful projects delivered on time with exceptional quality and 98% client satisfaction rate.",
      icon: Target
    },
    {
      year: "2022",
      title: "Service Excellence",
      description: "Refined our processes and expanded expertise in e-commerce, lead generation, and digital marketing, setting new industry standards.",
      icon: Award
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Crossed borders to serve clients worldwide. Extended our reach across North America, Europe, and Asia with 24/7 multilingual support.",
      icon: Globe
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Launched cutting-edge premium services with AI-powered workflows, dedicated account management, and real-time project tracking systems.",
      icon: Star
    }
  ]

  const stats = [
    {
      number: "386+",
      label: "Projects Done",
      description: "Delivered on time",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-600"
    },
    {
      number: "26+",
      label: "Happy Clients",
      description: "5-star rated",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-600"
    },
    {
      number: "99.9%",
      label: "Success Rate",
      description: "Quality guaranteed",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-600"
    },
    {
      number: "8+",
      label: "Years",
      description: "Industry Experience",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-600"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-primary-500/10 rounded-full blur-3xl"></div>


      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">About TasksACE</span>
            </div>

            <h1 className="text-hero text-gray-900 mb-8 leading-tight">
              Your Trusted Partner for <span className="premium-text-gradient">Virtual Excellence</span>
            </h1>
            <p className="text-body-large mb-12 max-w-3xl mx-auto">
              We are a team of dedicated professionals passionate about helping businesses grow through exceptional virtual assistant services. Your success is our mission.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto stagger-animation">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="card-modern text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">OUR STORY</span>
              <h2 className="text-heading-1 text-gray-900 mb-8">Building Success Stories Since 2020</h2>
              <div className="space-y-6 text-body leading-relaxed">
                <p>
                  TasksACE was founded with a simple yet powerful vision: to help businesses focus on what they do best by taking care of their administrative and operational tasks. We understand that every business owner has a passion for their core business, but often gets bogged down by routine tasks that consume valuable time and energy.
                </p>
                <p>
                  Since our inception, we have been committed to providing top-quality virtual assistant services that not only meet but exceed our clients' expectations. Our team of skilled professionals brings years of experience across various industries, ensuring that we can adapt to any business requirement.
                </p>
                <p>
                  Today, TasksACE serves clients globally, from startups to established enterprises, helping them achieve operational efficiency and business growth through our comprehensive suite of virtual assistant services.
                </p>
              </div>
            </div>

            <div className="space-y-8 fade-in-up">
              {/* Mission Container */}
              <div className="card-modern relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-heading-3 text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    To revolutionize how businesses operate by delivering world-class virtual assistant services that unlock growth potential. We transform administrative burdens into strategic advantages, enabling entrepreneurs and companies to focus on innovation, creativity, and scaling their vision while we handle the operational excellence behind the scenes.
                  </p>
                </div>
              </div>

              {/* Vision Container */}
              <div className="card-modern relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-heading-3 text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-body leading-relaxed">
                    To be the global leader in virtual assistance, setting the gold standard for reliability, innovation, and client success. We envision a future where every business, regardless of size, has access to professional support that accelerates their growth and amplifies their impact in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">OUR VALUES</span>
            <h2 className="text-heading-1 text-gray-900 mb-6">What Drives Us Forward</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to client success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 stagger-animation">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const colors = [
                { bg: "from-blue-500 to-blue-600", hoverBg: "from-blue-500/5 to-blue-600/5" },
                { bg: "from-green-500 to-green-600", hoverBg: "from-green-500/5 to-green-600/5" },
                { bg: "from-purple-500 to-purple-600", hoverBg: "from-purple-500/5 to-purple-600/5" },
                { bg: "from-yellow-500 to-yellow-600", hoverBg: "from-yellow-500/5 to-yellow-600/5" },
                { bg: "from-pink-500 to-pink-600", hoverBg: "from-pink-500/5 to-pink-600/5" },
                { bg: "from-indigo-500 to-indigo-600", hoverBg: "from-indigo-500/5 to-indigo-600/5" }
              ]
              const color = colors[index % colors.length]

              return (
                <div key={index} className="card-hover group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${color.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-heading-3 text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-body leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="relative section-padding">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">OUR JOURNEY</span>
            <h2 className="text-heading-1 text-gray-900 mb-6">Milestones in Our Growth</h2>
            <p className="text-body-large">Key achievements that shaped our path to success</p>
          </div>

          <div className="relative">
            {/* Soft Animated Timeline Line */}
            <div className="absolute left-12 top-16 bottom-16 w-0.5 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-blue-300/50 via-green-300/50 via-yellow-300/50 via-purple-300/50 to-pink-300/50 rounded-full"></div>
              {/* Flowing Lightning Effect */}
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-blue-400/80 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
              </div>
            </div>

            <div className="space-y-8 stagger-animation">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                const colors = [
                  { bg: "from-blue-500 to-blue-600", iconBg: "from-blue-100 to-blue-200", iconColor: "text-blue-600", connectColor: "blue-400/60" },
                  { bg: "from-green-500 to-green-600", iconBg: "from-green-100 to-green-200", iconColor: "text-green-600", connectColor: "green-400/60" },
                  { bg: "from-yellow-500 to-yellow-600", iconBg: "from-yellow-100 to-yellow-200", iconColor: "text-yellow-600", connectColor: "yellow-400/60" },
                  { bg: "from-purple-500 to-purple-600", iconBg: "from-purple-100 to-purple-200", iconColor: "text-purple-600", connectColor: "purple-400/60" },
                  { bg: "from-pink-500 to-pink-600", iconBg: "from-pink-100 to-pink-200", iconColor: "text-pink-600", connectColor: "pink-400/60" }
                ]
                const color = colors[index % colors.length]
                const nextColor = colors[(index + 1) % colors.length]
                const isLast = index === milestones.length - 1

                return (
                  <div key={index} className="flex items-center group relative">
                    {/* Soft Connection Bridge */}
                    {!isLast && (
                      <div className="absolute left-11.5 top-20 w-1 h-16 z-5">
                        <div className={`w-0.5 h-full bg-gradient-to-b from-${color.connectColor} to-${nextColor.connectColor} mx-auto rounded-full`}></div>
                        {/* Flowing spark */}
                        <div className="absolute top-0 left-0 w-1 h-3 bg-gradient-to-b from-white/80 to-transparent rounded-full animate-bounce"
                          style={{ animationDelay: `${index * 0.8}s`, animationDuration: '3s' }}></div>
                        {/* Glow effect */}
                        <div className={`absolute top-1/2 left-0 w-1 h-1 bg-${color.connectColor} rounded-full animate-ping opacity-60`}
                          style={{ animationDelay: `${index * 1.2}s`, animationDuration: '2.5s' }}></div>
                      </div>
                    )}

                    <div className="flex-shrink-0 w-24 text-center relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <span className="text-white font-bold text-lg relative z-10">{milestone.year}</span>
                        {/* Soft Pulsing Ring Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.bg} animate-ping opacity-15`}
                          style={{ animationDuration: '5s', animationDelay: `${index * 1.2}s` }}></div>
                        {/* Inner glow */}
                        <div className="absolute inset-2 rounded-xl bg-white/10 animate-pulse"
                          style={{ animationDuration: '3s', animationDelay: `${index * 0.6}s` }}></div>
                      </div>
                    </div>
                    <div className="ml-8 card-modern flex-1 group-hover:shadow-strong transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${color.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 ${color.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-heading-3 text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-body leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">OUR LEADERSHIP</span>
            <h2 className="text-heading-1 text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-body-large">The passionate professionals behind TasksACE's success</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-animation">
            {team.map((member, index) => {
              const colors = [
                { bg: "from-blue-500 to-blue-600", hoverBg: "from-blue-500/5 to-blue-600/5" },
                { bg: "from-green-500 to-green-600", hoverBg: "from-green-500/5 to-green-600/5" }
              ]
              const color = colors[index % colors.length]

              return (
                <div key={index} className="card-hover group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${color.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${color.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-3 text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-primary-500 font-semibold mb-4">{member.position}</p>
                      <p className="text-body leading-relaxed mb-4">{member.bio}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative section-padding">
        <div className="max-w-5xl mx-auto container-padding text-center">
          <div className="card-modern relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-orange-500/10 rounded-full blur-2xl"></div>

            <div className="relative max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-primary-700">Ready to Get Started?</span>
              </div>

              <h2 className="text-heading-1 text-gray-900 mb-6 leading-tight">
                Ready to Transform Your <span className="premium-text-gradient">Business Operations?</span>
              </h2>
              <p className="text-body-large mb-10 leading-relaxed">
                Join 26+ businesses already growing with TasksACE virtual assistant services.
                Let's discuss how we can help your business thrive and achieve operational excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a href="/contact" className="btn-primary group">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="/contact" className="btn-secondary group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">No Setup Fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 