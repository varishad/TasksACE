import React from 'react'
import type { Metadata } from 'next'
import { Clock, BookOpen, Users, ArrowRight } from 'lucide-react'

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/blog')
}

export default function BlogPage() {
  const upcomingTopics = [
    {
      icon: BookOpen,
      title: "Virtual Assistant Best Practices",
      description: "Learn the essential strategies for working effectively with virtual assistants"
    },
    {
      icon: Users,
      title: "Business Growth Strategies",
      description: "Discover proven methods to scale your business operations efficiently"
    },
    {
      icon: Clock,
      title: "Productivity Tips & Tricks",
      description: "Expert advice on maximizing productivity in your daily operations"
    }
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Coming Soon
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Blog is
              <span className="text-primary-500 block">Coming Soon</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're working hard to bring you valuable insights, tips, and industry updates.
              Our blog will feature expert advice on virtual assistance, business growth, and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-primary-500">Stay Tuned</div>
                <div className="text-sm text-gray-600">For valuable content</div>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-primary-500">Expert Insights</div>
                <div className="text-sm text-gray-600">From our team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our blog will feature comprehensive articles, case studies, and expert insights
              to help you make the most of virtual assistant services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingTopics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                </div>
              )
            })}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Get Notified First</h3>
            <p className="text-xl mb-8 opacity-90">
              Be the first to know when our blog launches and get exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Notify Me <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 