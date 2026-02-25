'use client'

import { ClipboardList, ShoppingCart, Zap, Clock, Headphones } from 'lucide-react';

const Services = () => {
  const assistantTypes = [
    {
      icon: ClipboardList,
      title: "Administrative Assistant",
      description: "A versatile professional managing daily office tasks efficiently.",
      features: ["Email Management", "Calendar Scheduling", "Document Organization", "Travel Planning"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Assistant",
      description: "A trusted ally specializing in optimizing and managing the operations of online stores.",
      features: ["Product Listing", "Inventory Management", "Customer Support", "Order Processing"]
    }
  ]

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Customized Solutions",
      description: "TasksACE understands that every business is unique. We offer tailor-made solutions to cater to your specific challenges and objectives."
    },
    {
      icon: Clock,
      title: "We're Fast, Accurate & Reliable",
      description: "Precision is our priority. TasksACE guarantees excellence in every task, delivering projects with speed and commitment to error-free results."
    },
    {
      icon: Headphones,
      title: "24/7 Premium Support",
      description: "TasksACE offers round-the-clock premium support, ensuring assistance whenever you need it for a seamless and responsive experience."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What kind of virtual assistant are you looking for?
          </h2>
        </div>

        {/* Assistant Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {assistantTypes.map((assistant, index) => {
            const IconComponent = assistant.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{assistant.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{assistant.description}</p>

                <ul className="space-y-4">
                  {assistant.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-3 h-3 gradient-bg rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are here for you. We always give you satisfaction. We are a team of professionals who are passionate about delivering high-quality Virtual Assistant services to our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="text-center card-hover p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Contact Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services 