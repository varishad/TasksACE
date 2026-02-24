import React from 'react'
import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ShoppingCart, CheckCircle, Package, BarChart3, MessageSquare } from 'lucide-react';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-commerce Assistant Virtual Services | TasksACE Complete Online Store Management',
  description: 'Professional e-commerce assistant services for complete online store management. Product management, customer support, inventory control, and store optimization for your e-commerce business.',
  keywords: 'e-commerce assistant, online store management, product management, customer support, inventory control, store optimization, e-commerce virtual assistant',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'E-commerce Assistant Virtual Services | TasksACE Complete Online Store Management',
    description: 'Professional e-commerce assistant services for complete online store management. Product management, customer support, inventory control, and store optimization for your e-commerce business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/services/ecommerce-assistant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Assistant Virtual Services | TasksACE',
    description: 'Professional e-commerce assistant services. Complete online store management, product management, and customer support.',
    creator: '@tasksace',
  },
}

export default function EcommerceAssistantPage() {
  const features = [
    {
      icon: Package,
      title: "Product Management",
      description: "Complete product listing, optimization, inventory tracking, and catalog management across platforms."
    },
    {
      icon: ShoppingCart,
      title: "Order Processing",
      description: "Efficient order management, processing, tracking, and customer communication throughout the fulfillment process."
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Monitor performance, track metrics, analyze trends, and provide detailed reports for data-driven decisions."
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Professional customer service, live chat support, and review management to maintain high satisfaction."
    }
  ]

  const platforms = [
    "Shopify", "Amazon", "eBay", "WooCommerce", "BigCommerce", "Etsy", "Walmart Marketplace", "Facebook Shop"
  ]

  const packages = [
    {
      name: "Starter",
      price: "$16/hour",
      hours: "15-25 hours/week",
      features: [
        "Product listing & optimization",
        "Basic inventory management",
        "Order processing",
        "Customer email support"
      ]
    },
    {
      name: "Growth",
      price: "$18/hour", 
      hours: "25-35 hours/week",
      features: [
        "All Starter features",
        "Multi-platform management",
        "Live chat support", 
        "Sales reporting",
        "Review management"
      ]
    },
    {
      name: "Scale",
      price: "$20/hour",
      hours: "35+ hours/week", 
      features: [
        "All Growth features",
        "Advanced analytics",
        "Marketing campaign support",
        "Supplier communication",
        "Custom integrations"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
                E-COMMERCE SOLUTIONS
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Expert E-commerce Assistant Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Scale your online store with dedicated e-commerce support. From product management to customer service, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                  Start Growing Today
                </a>
                <a href="/services" className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:border-white transition-colors">
                  View All Services
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <ShoppingCart className="w-12 h-12 text-primary-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Starting from</h3>
                  <p className="text-3xl font-bold text-primary-500">$16/hour</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Product listing & optimization</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Inventory & order management</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Customer support & live chat</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Multi-platform support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Platforms We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <span className="text-gray-800 font-semibold">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete E-commerce Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online store, handled by e-commerce experts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Support Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your online store's needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${index === 1 ? 'ring-2 ring-primary-500' : ''}`}>
                {index === 1 && (
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4 text-center">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary-500 mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-6">{pkg.hours}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
                  index === 1 
                    ? 'bg-primary-500 text-white hover:bg-primary-600' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Scale Your E-commerce Business?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let our e-commerce experts help you grow your online store and increase sales.
          </p>
          <a href="/contact" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
            Start Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
} 