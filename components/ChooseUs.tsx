import { CheckCircle, Shield, Clock, Users, Star, Zap } from 'lucide-react';

const benefits = [
  "24/7 Support & Communication",
  "Dedicated Virtual Assistant",
  "No Long-term Contracts",
  "Free Consultation & Trial",
  "99.9% Uptime Guarantee",
  "Affordable Premium Service"
];

const mainFeatures = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-level security and confidentiality agreements."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support ensuring your business never stops, no matter the timezone."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled professionals with proven track records in various business domains."
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Every task undergoes thorough quality checks to ensure exceptional results."
  }
];

export default function ChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
              <span className="text-primary-500 font-semibold text-sm tracking-wide uppercase mb-4 block">
                WHY CHOOSE TASKSACE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Success is Our <span className="text-gradient">Priority</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another virtual assistant service. We're your dedicated partners in business growth.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="/contact" className="btn-primary px-8 py-4 text-base">
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="relative">
            <div className="grid gap-6">
              {mainFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:border-white/40 transform hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
} 