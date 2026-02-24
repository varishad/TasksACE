import React from 'react'
import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { ArrowRight, CheckCircle, Star, Clock, PenTool, Zap, ThumbsUp, ShieldCheck, ChevronDown, ChevronUp, Edit, MessageSquare, TrendingUp, Users, DollarSign, Target, Mail, Award } from 'lucide-react';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Copywriting Virtual Assistant Services | TasksACE Professional Content Writing',
  description: 'Professional copywriting virtual assistant services including content writing, marketing copy, product descriptions, and creative content. Expert writers for your business needs.',
  keywords: 'copywriting virtual assistant, content writing services, marketing copy, product descriptions, creative content writing, professional copywriting',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'Copywriting Virtual Assistant Services | TasksACE Professional Content Writing',
    description: 'Professional copywriting virtual assistant services including content writing, marketing copy, product descriptions, and creative content. Expert writers for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/services/copywriting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copywriting Virtual Assistant Services | TasksACE',
    description: 'Professional copywriting services. Content writing, marketing copy, product descriptions, and creative content.',
    creator: '@tasksace',
  },
}

export default function CopywritingPage() {
  const features = [
    {
      icon: PenTool,
      title: "Sales Copy That Converts",
      description: "High-converting sales pages, product descriptions, and email sequences that turn visitors into customers."
    },
    {
      icon: Target,
      title: "Targeted Messaging",
      description: "Copy that speaks directly to your audience's pain points and motivates them to take action."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality. Get your copy when you need it most."
    }
  ]

  const services = [
    "Sales Page Copy",
    "Email Marketing Sequences", 
    "Landing Page Copy",
    "Product Descriptions",
    "Blog Content",
    "Social Media Copy",
    "Ad Copy (Google, Facebook)",
    "Website Copy"
  ]

  const testimonial = {
    text: "TasksACE's copywriting completely transformed our conversion rates. Our sales increased by 180% within just 2 months!",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-24 pb-24 overflow-hidden">
        {/* Background effects identical to footer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-primary-500">Copywriting</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
                PROFESSIONAL COPYWRITING
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Copy That <span className="text-gradient">Converts</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your marketing with compelling copy that speaks directly to your audience and drives real results. From sales pages to email campaigns, we craft words that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="#features" className="btn-secondary">
                  View Samples
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <PenTool className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Professional Copywriting</h3>
                <p className="text-gray-300">Words that work, results that matter</p>
              </div>
              
              <div className="space-y-3">
                {['Sales Copy', 'Email Sequences', 'Landing Pages', 'Product Descriptions'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 mb-6">
              Why Choose Our <span className="text-gradient">Copywriting</span>
            </h2>
            <p className="text-body-large max-w-2xl mx-auto">
              We don't just write words, we craft compelling messages that connect with your audience and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center card-modern p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-1 mb-6">
                Complete <span className="text-gradient">Copywriting Services</span>
              </h2>
              <p className="text-body-large text-gray-600 mb-8">
                From attention-grabbing headlines to compelling calls-to-action, we handle every aspect of your copywriting needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-600 italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-primary-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Copy?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create compelling copy that connects with your audience and drives real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="btn-primary">
                Get Free Copy Consultation
                <Mail className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">26+ Happy Clients</div>
              </div>
              <div>
                <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Fast Delivery</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 