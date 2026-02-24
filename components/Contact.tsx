'use client'

import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Drowning in Tasks
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-4">
            Become your time with our Virtual assistance. Schedule a call to learn more.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <a 
            href="mailto:contact@tasksace.com" 
            className="inline-flex items-center bg-white text-primary-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-3 w-6 h-6" />
            Book A Call
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-orange-100">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-orange-100">contact@tasksace.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Schedule</h3>
            <p className="text-orange-100">24/7 Available</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-orange-100 mb-8 text-lg">
            Sign up for our newsletter to get updates, news, and free insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-900 font-medium shadow-lg"
            />
            <button className="bg-white text-primary-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 