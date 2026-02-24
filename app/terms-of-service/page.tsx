import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Scale, FileCheck, AlertTriangle, Users, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | TasksACE Virtual Assistant Services',
  description: 'TasksACE terms of service for virtual assistant services. Review our service terms, conditions, and policies for professional business support solutions.',
}

export default function TermsOfService() {
  const sections = [
    {
      title: "Service Description",
      icon: FileCheck,
      content: [
        "TasksACE provides virtual assistant services including administrative support, data entry, e-commerce assistance, and digital marketing services",
        "All services are provided remotely by qualified professionals",
        "Service delivery times and specifications will be agreed upon before project commencement",
        "We reserve the right to modify or discontinue services with proper notice"
      ]
    },
    {
      title: "Payment Terms",
      icon: Clock,
      content: [
        "Payment terms will be specified in your service agreement",
        "Invoices are due within 30 days unless otherwise agreed",
        "Late payments may incur additional fees as specified in your agreement",
        "Refunds are subject to our refund policy and project-specific terms"
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        "Provide accurate and complete information necessary for service delivery",
        "Ensure timely communication and feedback during project execution",
        "Respect our team members and maintain professional communication",
        "Comply with all applicable laws and regulations in your business operations"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Shield,
      content: [
        "Our liability is limited to the amount paid for specific services",
        "We are not liable for indirect, incidental, or consequential damages",
        "Client is responsible for backing up their own data and information",
        "We maintain professional liability insurance for covered services"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
            LEGAL INFORMATION
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our virtual assistant services.
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
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    By accessing and using TasksACE services, you accept and agree to be bound by the terms and conditions 
                    of this agreement. If you do not agree to abide by the above, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Additional Terms */}
          <div className="mt-16 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All work products created by TasksACE become the property of the client upon full payment. 
                TasksACE retains the right to use anonymized case studies and general methodologies for 
                marketing and training purposes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confidentiality</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain strict confidentiality regarding all client information and business data. 
                Our team members sign comprehensive non-disclosure agreements and follow industry-standard 
                data protection protocols.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Level Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We commit to maintaining a 99.9% task completion rate and responding to client communications 
                within 24-48 hours during business days. Specific service levels will be detailed in individual 
                service agreements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate services with 30 days written notice. Upon termination, all client 
                data will be securely returned or destroyed as requested. Outstanding invoices remain due and payable.
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-16 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms constitute the entire agreement between you and TasksACE. Any modifications must be 
                  made in writing and signed by both parties. If any provision is found unenforceable, the remaining 
                  provisions will continue in full force and effect.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For specific project terms, please refer to your individual service agreement which takes 
                  precedence over these general terms for that specific engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Terms?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@tasksace.com</p>
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