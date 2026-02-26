'use client'

import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden min-h-[85vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animation-delay-1000 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center py-12 lg:py-20 h-full">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-gray-200/50 fade-in-up">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-sm font-semibold text-gray-700">5.0 Rated by 226+ Happy Clients</span>
            </div>

            {/* Main Headline - Mobile Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block text-gray-900">Scale Your Business with</span>
              <span className="premium-text-gradient">Expert Virtual Assistants</span>
            </h1>

            {/* Subheadline - Mobile Optimized */}
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8 fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
              Get dedicated virtual assistant services tailored to your business needs.
              Focus on what matters most while we handle the rest.
            </p>

            {/* Key Highlights - Mobile Friendly */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200/50">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">Professional Virtual Assistants</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200/50">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-200/50">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">99.9% Task Completion Rate</span>
              </div>
            </div>

            {/* Single CTA Button - Mobile Optimized */}
            <div className="mb-12 fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg group"
              >
                <span>Start Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators - Improved Design */}
            <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">1578+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="font-semibold">226+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold">5.0 Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
