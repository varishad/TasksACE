import React from 'react'
import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Award, Star, Clock, Target, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TechCorp Solutions Case Study | How TasksACE Transformed Their Business Operations',
  description: 'Discover how TasksACE helped TechCorp Solutions streamline their operations with virtual assistant services. Learn about the results, cost savings, and business transformation.',
  keywords: 'TechCorp Solutions case study, virtual assistant success story, business transformation, operational efficiency, cost savings, VA services results',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'TechCorp Solutions Case Study | How TasksACE Transformed Their Business Operations',
    description: 'Discover how TasksACE helped TechCorp Solutions streamline their operations with virtual assistant services. Learn about the results, cost savings, and business transformation.',
    type: 'article',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/case-studies/techcorp-solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechCorp Solutions Case Study | TasksACE Business Transformation',
    description: 'Discover how TasksACE helped TechCorp Solutions streamline their operations with virtual assistant services.',
    creator: '@tasksace',
  },
}

export default function TechCorpCaseStudy() {
  const projectOverview = {
    client: "TechCorp Solutions",
    industry: "Technology Services",
    duration: "6 months",
    teamSize: "3 dedicated VAs",
    servicesProvided: ["Administrative Support", "Data Management", "Customer Service", "Lead Generation"]
  }

  const challenges = [
    {
      title: "Overwhelming Administrative Tasks",
      description: "CEO spending 30+ hours/week on admin work instead of strategic planning",
      icon: Clock
    },
    {
      title: "Inefficient Data Management",
      description: "Customer data scattered across multiple systems, causing delays and errors",
      icon: Target
    },
    {
      title: "Poor Customer Response Times",
      description: "Customer inquiries taking 48+ hours to respond, affecting satisfaction",
      icon: Users
    }
  ]

  const solutions = [
    {
      title: "Dedicated Administrative Team",
      description: "Assigned 2 specialized VAs to handle all administrative tasks, including email management, scheduling, and document preparation",
      results: ["30 hours/week saved", "100% task completion rate", "Same-day email responses"]
    },
    {
      title: "Data Management System",
      description: "Implemented comprehensive CRM data organization and management with quality assurance protocols",
      results: ["99.9% data accuracy", "50% faster data retrieval", "Centralized customer database"]
    },
    {
      title: "Customer Service Excellence",
      description: "Established 24/7 customer support system with professional response protocols and follow-up procedures",
      results: ["2-hour response time", "95% customer satisfaction", "40% increase in retention"]
    }
  ]

  const results = [
    { metric: "Time Saved", value: "30+ hrs/week", icon: Clock, color: "from-primary-500 to-orange-500" },
    { metric: "Cost Reduction", value: "60%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { metric: "Customer Satisfaction", value: "95%", icon: Users, color: "from-blue-500 to-cyan-500" },
    { metric: "Revenue Growth", value: "40%", icon: Award, color: "from-purple-500 to-violet-500" }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-500/10 rounded-full px-4 py-2 mb-6 border border-primary-500/20">
                <Award className="w-4 h-4 text-primary-400 mr-2" />
                <span className="text-primary-400 text-sm font-semibold">SUCCESS STORY</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How TechCorp Solutions Scaled 40%
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how our comprehensive virtual assistant services helped TechCorp Solutions save 30+ hours per week, 
                reduce operational costs by 60%, and achieve remarkable business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/case-studies" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
                  View More Cases
                </Link>
              </div>
            </div>
            
            {/* Project Overview Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Project Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Client</span>
                  <span className="text-white font-semibold">{projectOverview.client}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Industry</span>
                  <span className="text-white font-semibold">{projectOverview.industry}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Duration</span>
                  <span className="text-white font-semibold">{projectOverview.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Team Size</span>
                  <span className="text-white font-semibold">{projectOverview.teamSize}</span>
                </div>
                <div className="pt-3">
                  <span className="text-gray-300 block mb-3">Services Provided</span>
                  <div className="space-y-2">
                    {projectOverview.servicesProvided.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-400" />
                        <span className="text-white text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic approach delivered exceptional outcomes that transformed TechCorp's operations and growth trajectory.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                  <div className="text-gray-600 font-medium">{result.metric}</div>
                </div>
              );
            })}
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-8 text-center">
            <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed">
              "TasksACE transformed our business operations completely. The virtual assistant team is professional, 
              efficient, and has become an integral part of our success. Highly recommended!"
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="font-bold text-gray-900">Michael Chen</div>
                <div className="text-gray-600">CEO, TechCorp Solutions</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                          Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join TechCorp Solutions and other successful businesses that have transformed their operations with TasksACE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/case-studies" className="group border-2 border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-500/10">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 