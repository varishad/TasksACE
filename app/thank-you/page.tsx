import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, MessageCircle, Mail, ArrowRight, Clock, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | TasksACE - We\'ll Be In Touch Soon',
  description: 'Thank you for your interest in TasksACE virtual assistant services. We\'ll be in touch within 24 hours to discuss your business needs and provide a custom solution.',
}

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
            MESSAGE RECEIVED
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Thank You for Contacting TasksACE
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your message has been successfully sent. We appreciate you contacting TasksACE.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Thank you for contacting TasksACE. Our team will check your email and reply as soon as possible.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Happens Next?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">We Review</h4>
                <p className="text-gray-600 text-sm">Our team reviews your message and project requirements carefully.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm">We'll reply within 24-48 hours with a detailed proposal.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Let's Start</h4>
                <p className="text-gray-600 text-sm">Once approved, we begin working on your project immediately.</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Need an Instant Reply?</h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              For immediate assistance and faster replies, contact us directly on WhatsApp. 
              We typically respond within minutes during business hours!
            </p>
            
            <a 
              href="https://wa.me/8801981696760" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Us Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
            
            <div className="mt-8 text-center">
              <p className="text-green-200 text-sm">
                📱 <strong>WhatsApp:</strong> +880 1981696760
              </p>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Explore Our Services</h4>
              <p className="text-gray-600 mb-6">
                Learn more about how TasksACE can transform your business operations.
              </p>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h4>
              <p className="text-gray-600 mb-6">
                See how we've helped other businesses achieve their goals.
              </p>
              <Link 
                href="/case-studies"
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 