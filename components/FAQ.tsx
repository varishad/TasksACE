'use client'

import { useState, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do TasksACE virtual assistants provide?",
    answer: "Our virtual assistants provide comprehensive administrative support including email management, calendar scheduling, data entry, customer service, social media management, content creation, research, ecommerce support, and specialized business operations assistance."
  },
  {
    question: "How quickly can I get started with a virtual assistant?",
    answer: "You can get started within 24-48 hours. After our initial consultation call, we'll match you with the perfect assistant based on your specific needs and begin the onboarding process immediately."
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer flexible pricing plans starting from $8/hour for basic administrative tasks, $12/hour for specialized support, and $18/hour for premium expert-level assistance. All plans include dedicated support and no setup fees."
  },
  {
    question: "Are your virtual assistants available in different time zones?",
    answer: "Yes! We have virtual assistants available across multiple time zones including US Eastern/Pacific, European, and Asian time zones to ensure 24/7 coverage for your business needs."
  },
  {
    question: "What if I'm not satisfied with my virtual assistant?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll either match you with a different assistant or provide a full refund. Your success is our priority."
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "All our virtual assistants sign strict NDAs and we use enterprise-grade security protocols. We're SOC 2 compliant and implement advanced encryption, secure access controls, and regular security audits to protect your sensitive information."
  },
  {
    question: "Can I scale up or down my virtual assistant hours?",
    answer: "Absolutely! Our plans are designed for flexibility. You can easily scale up during busy periods or scale down during slower times with just 24 hours notice. No long-term contracts required."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve various industries including real estate, healthcare, legal, e-commerce, consulting, marketing agencies, financial services, and technology startups. Our assistants are trained in industry-specific tools and processes."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Get answers to common questions about our virtual assistant services and how we can help transform your business operations.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="content-spacing">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="card-modern overflow-hidden group transition-all duration-500 hover:shadow-medium"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-8 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary-500/30 rounded-3xl"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-heading-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  {openItems.includes(index) ? (
                    <Minus size={18} className="transition-transform duration-300" />
                  ) : (
                    <Plus size={18} className="transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="h-px bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 mb-6"></div>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="card-modern bg-gradient-to-br from-primary-50 to-orange-50 border-primary-200">
            <h3 className="text-heading-3 mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-body mb-6 text-gray-600">
              Our team is here to help you find the perfect virtual assistant solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 