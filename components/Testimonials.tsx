'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const testimonials = [
    {
      text: "The best for excel entry, accuracy and fast. TasksACE delivered exceptional service that exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Business Owner",
      company: "Tech Innovations Inc.",
      rating: 5
    },
    {
      text: "They completed my Facebook group task with precision and efficiency. Highly recommended for social media management.",
      author: "Michael Chen",
      role: "Marketing Manager",
      company: "Digital Growth Agency",
      rating: 5
    },
    {
      text: "Outstanding e-commerce support. They helped streamline our online store operations and increased our conversion rates.",
      author: "Emma Rodriguez",
      role: "E-commerce Director",
      company: "Fashion Forward",
      rating: 5
    },
    {
      text: "Professional administrative support that allowed me to focus on growing my business. TasksACE is truly reliable.",
      author: "David Thompson",
      role: "CEO",
      company: "Thompson Consulting",
      rating: 5
    },
    {
      text: "Excellent data analysis and reporting services. Their attention to detail and accuracy is impressive.",
      author: "Lisa Park",
      role: "Operations Manager",
      company: "Global Solutions Ltd.",
      rating: 5
    },
    {
      text: "24/7 customer support and quick turnaround times. TasksACE has become an essential part of our team.",
      author: "Robert Williams",
      role: "Founder",
      company: "StartUp Ventures",
      rating: 5
    },
    {
      text: "Perfect for handling our lead generation and CRM management. Professional service with great communication.",
      author: "Jessica Kumar",
      role: "Sales Director",
      company: "Growth Dynamics",
      rating: 5
    },
    {
      text: "Reliable virtual assistant services that scale with our business needs. Highly professional and efficient team.",
      author: "Mark Davis",
      role: "VP Operations",
      company: "Enterprise Solutions",
      rating: 5
    },
    {
      text: "Great support for content creation and social media management. They understand our brand perfectly.",
      author: "Amanda Foster",
      role: "Marketing Lead",
      company: "Creative Studios",
      rating: 5
    },
    {
      text: "Exceptional service quality and competitive pricing. TasksACE has helped us optimize our business processes.",
      author: "James Wilson",
      role: "Business Manager",
      company: "Efficient Systems",
      rating: 5
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    setIsMounted(true)

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">TESTIMONIALS</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">What our clients say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who have experienced the TasksACE difference
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: isMounted ? `translateX(-${currentIndex * 100}%)` : 'translateX(0%)' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-3xl p-12 mx-4 text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-3xl text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="w-16 h-0.5 bg-primary-500 mx-auto mb-6"></div>
                    <div>
                      <p className="font-bold text-gray-900 text-xl mb-1">{testimonial.author}</p>
                      <p className="text-gray-600 text-lg">{testimonial.role}</p>
                      <p className="text-primary-500 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-500 transition-colors" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-500 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>


      </div>
    </section>
  )
}

export default Testimonials 