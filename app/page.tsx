import React from 'react'
import type { Metadata } from 'next'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Testimonials from '../components/Testimonials'
import { ArrowRight, MessageSquare, Calendar, CheckCircle, ClipboardList, ShoppingCart } from 'lucide-react';

import { generateDynamicMetadata } from '@/lib/seo'

export async function generateMetadata() {
  return await generateDynamicMetadata('/')
}

export default function Home() {
  const services = [
    {
      icon: ClipboardList,
      title: "Administrative Assistant",
      description: "Streamline daily operations with comprehensive administrative support.",
      features: ["Email Management", "Scheduling", "Data Entry", "Document Preparation"],
      link: "/services/administrative"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Assistant",
      description: "Optimize your online store operations and boost sales performance.",
      features: ["Product Listing", "Order Processing", "Customer Service", "Inventory Management"],
      link: "/services/ecommerce-assistant"
    }
  ]

  const quickStats = [
    { number: "386+", label: "Projects Done", subtext: "Delivered on time" },
    { number: "26+", label: "Happy Clients", subtext: "5-star rated" },
    { number: "99.9%", label: "Success Rate", subtext: "Quality guaranteed" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Services Preview - Streamlined */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">OUR SERVICES</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What can we help you with?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized virtual assistant services designed for your business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary-200 relative overflow-hidden">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a href={service.link} className="text-primary-500 font-semibold text-base hover:text-primary-600 transition-colors inline-flex items-center group-hover:translate-x-1 duration-300">
                        Learn More <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a href="/services" className="btn-primary text-base px-8 py-4">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Condensed */}
      <ChooseUs />

      {/* Testimonials - Compact */}
      <Testimonials />

      {/* Final CTA - Clean White Design */}
      <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 26+ businesses already growing with TasksACE virtual assistant services.
              Let's discuss how we can help your business thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/contact" className="group border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-primary-50">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
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
      </section>

    </main>
  )
} 