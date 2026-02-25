import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, Quote, Award, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories | TasksACE Virtual Assistant Case Studies',
  description: 'Explore TasksACE client success stories and case studies. See how businesses achieved growth with our virtual assistant services. Real results, proven strategies.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Technology Services",
      challenge: "CEO spending 30+ hours/week on administrative tasks, inefficient data management, and poor customer response times",
      solution: "Dedicated administrative team, comprehensive data management system, and 24/7 customer service implementation",
      results: [
        "30+ hours/week saved for strategic planning",
        "60% reduction in operational costs",
        "40% revenue growth in 6 months",
        "95% customer satisfaction rate"
      ],
      testimonial: "TasksACE completely transformed our operations. We went from drowning in administrative work to focusing entirely on strategic growth. The results speak for themselves - 40% revenue growth and 60% cost reduction in just 6 months!",
      author: "Michael Chen",
      position: "CEO",
      duration: "6 months",
      image: "/api/placeholder/400/300",
      detailLink: "/case-studies/techcorp-solutions"
    },
    {
      company: "BIGBANG YOGURT",
      industry: "Food & Beverage",
      challenge: "Managing customer orders and inventory across multiple locations",
      solution: "Implemented comprehensive e-commerce and administrative support",
      results: [
        "40% increase in order processing efficiency",
        "Reduced inventory management time by 60%",
        "Improved customer satisfaction score to 4.8/5"
      ],
      testimonial: "TasksACE transformed our operations completely. Their e-commerce assistants helped us streamline our ordering process and manage inventory across all our yogurt stores. The efficiency gains have been remarkable.",
      author: "Sarah Johnson",
      position: "Operations Manager",
      duration: "6 months",
      image: "/api/placeholder/400/300"
    },
    {
      company: "DreamCity",
      industry: "Real Estate",
      challenge: "Lead generation and customer follow-up for property sales",
      solution: "Dedicated lead generation and administrative support team",
      results: [
        "300% increase in qualified leads",
        "50% reduction in response time to inquiries",
        "25% increase in conversion rates"
      ],
      testimonial: "The lead generation services provided by TasksACE have been exceptional. They helped us identify and connect with high-quality prospects, resulting in significant growth in our property sales.",
      author: "Michael Chen",
      position: "Sales Director",
      duration: "8 months",
      image: "/api/placeholder/400/300"
    },
    {
      company: "Noon E-commerce",
      industry: "E-commerce",
      challenge: "Product catalog management and customer service scaling",
      solution: "Full-service e-commerce support including product listing and customer service",
      results: [
        "500+ products successfully listed",
        "24/7 customer support implementation",
        "35% increase in customer retention"
      ],
      testimonial: "TasksACE's e-commerce specialists helped us scale our operations seamlessly. Their attention to detail in product listings and excellent customer service support has been invaluable to our growth.",
      author: "Ahmed Al-Rashid",
      position: "E-commerce Manager",
      duration: "12 months",
      image: "/api/placeholder/400/300"
    }
  ]

  const testimonials = [
    {
      text: "The best for excel entry, accuracy and fast. I found Great service delivered by Rishad and his team. He is super talented for any kinds of data entry job I have been using him for several times and never disappointed me. Recommended.",
      author: "Robert Smith",
      position: "Business Owner",
      company: "Smith Enterprises",
      rating: 5
    },
    {
      text: "TasksAce is an excellent virtual assistant. They completed my Facebook group task with precision and efficiency. I highly recommend them for any Excel data entry or virtual assistant work.",
      author: "Lisa Anderson",
      position: "Marketing Manager",
      company: "Growth Marketing Co.",
      rating: 5
    },
    {
      text: "They were very quick and understanding with what I needed. And they worked super fast and gave me a definitive time when it will be done! that's pretty rare here!",
      author: "David Wilson",
      position: "E-commerce Owner",
      company: "Wilson's Store",
      rating: 5
    },
    {
      text: "Rishad was amazing to work with! He made sure he understood exactly what I wanted about data entry and lead generation and his communication throughout the entire process was appreciated.",
      author: "Jennifer Brown",
      position: "Sales Director",
      company: "BrownTech Solutions",
      rating: 5
    }
  ]

  const stats = [
    { number: "386", label: "Projects Completed", icon: Award },
    { number: "26", label: "Happy Clients", icon: Users },
    { number: "5.0", label: "Average Rating", icon: Star, suffix: "★" },
    { number: "99%", label: "Client Retention", icon: TrendingUp }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-4">
            SUCCESS STORIES
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Client Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how TasksACE has helped businesses across various industries achieve remarkable results through our virtual assistant services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                    {stat.suffix && <span className="text-primary-500">{stat.suffix}</span>}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who have transformed their businesses with TasksACE
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-primary-500 text-sm font-bold tracking-wider uppercase mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.company}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Quote className="w-8 h-8 text-primary-500 mb-4" />
                    <p className="text-gray-700 leading-relaxed mb-6">"{study.testimonial}"</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-900">{study.author}</p>
                      <p className="text-gray-600">{study.position}</p>
                      <p className="text-sm text-primary-500 font-medium mt-2">Duration: {study.duration}</p>
                      {study.detailLink && (
                        <div className="mt-4">
                          <a 
                            href={study.detailLink}
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200"
                          >
                            View Full Case Study
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied clients across different industries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl card-hover border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary-500 text-primary-500" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-primary-500 mb-6" />
                
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-primary-500 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our growing list of successful clients and experience the difference.
          </p>
          <a href="/contact" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
} 