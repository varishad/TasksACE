import React from 'react'
import type { Metadata } from 'next'
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | TasksACE Data Protection & Security',
  description: 'TasksACE privacy policy explaining how we protect your data and maintain confidentiality. Learn about our security measures and data handling practices.',
}

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Personal information you provide when contacting us or using our services",
        "Business information necessary to provide virtual assistant services",
        "Communication records to maintain service quality and records",
        "Usage data to improve our services and user experience"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "To provide and deliver the virtual assistant services you request",
        "To communicate with you about our services and respond to inquiries",
        "To improve our services and develop new features",
        "To comply with legal obligations and protect our legitimate interests"
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties",
        "Information may be shared with trusted service providers who assist in our operations",
        "We may disclose information when required by law or to protect our rights",
        "Business transfers may include the transfer of customer information"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement industry-standard security measures to protect your information",
        "All data transmission is encrypted using SSL/TLS protocols",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to maintain data protection standards"
      ]
    }
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
            LEGAL INFORMATION
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are committed to protecting your privacy and handling your personal information responsibly.
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
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At TasksACE, we understand that your privacy is important. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our virtual assistant services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
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

          {/* Additional Information */}
          <div className="mt-16 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights and Choices</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of certain
                communications from us. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Data Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a global service provider, we may transfer your information to countries outside your jurisdiction.
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

    </main>
  )
} 