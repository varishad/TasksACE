import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Cookie, Globe, Shield, BarChart3, Settings, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | TasksACE Website Usage Information',
  description: 'TasksACE cookie policy explaining how we use cookies to improve your website experience. Learn about our cookie usage and privacy practices.',
}

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: ["Session management", "Security features", "Load balancing", "Basic functionality"],
      duration: "Session or 1 year",
      required: true
    },
    {
      title: "Analytics Cookies",
      icon: BarChart3,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      duration: "2 years",
      required: false
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language preferences", "Region settings", "Theme preferences", "Form data"],
      duration: "1 year",
      required: false
    },
    {
      title: "Marketing Cookies",
      icon: Eye,
      description: "These cookies track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Ad targeting", "Social media integration", "Campaign tracking", "Interest profiling"],
      duration: "1-2 years",
      required: false
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
            LEGAL INFORMATION
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to improve your experience.
          </p>
          <div className="mt-8 text-gray-400 text-sm">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies to improve functionality, analyze performance, and provide personalized content. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                        {type.required && (
                          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{type.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-500">
                          <strong>Duration:</strong> {type.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use Google Analytics 
                to understand how visitors use our website. These services have their own privacy policies and 
                cookie practices.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Google Analytics:</strong> Analytics and performance tracking</p>
                <p><strong>Social Media:</strong> Social sharing and integration features</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Use your browser settings to block or delete cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Set your browser to notify you when cookies are being sent</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Opt out of analytics tracking through Google Analytics Opt-out</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Use private/incognito browsing mode</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Instructions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's how to manage cookies in popular browsers:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Chrome:</p>
                  <p className="text-gray-600">Settings → Privacy and Security → Cookies</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Firefox:</p>
                  <p className="text-gray-600">Options → Privacy & Security → Cookies</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Safari:</p>
                  <p className="text-gray-600">Preferences → Privacy → Cookies</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Edge:</p>
                  <p className="text-gray-600">Settings → Site permissions → Cookies</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Note</h3>
              <p className="text-gray-700 leading-relaxed">
                Please note that disabling cookies may affect the functionality of our website. Essential cookies 
                are necessary for the website to work properly and cannot be disabled without significantly 
                impacting your browsing experience.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@tasksace.com</p>
                  <p><strong>Business Email:</strong> info@tasksace.com</p>
                  <p><strong>Phone:</strong> +880 1981696760</p>
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