
import { Shield, Sparkles, Heart, Zap, Clock, Award, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Check-ups", "Professional Cleaning", "Cavity Treatment", "Gum Disease Prevention"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments and smile makeovers.",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Design", "Aesthetic Bonding"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions for all ages.",
      features: ["Invisalign Treatment", "Traditional Braces", "Clear Aligners", "Bite Correction"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "Immediate dental care when you need it most, available 24/7 for urgent situations.",
      features: ["24/7 Emergency Line", "Same-day Treatment", "Pain Management", "Urgent Repairs"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Preventive Care",
      description: "Proactive approach to maintaining optimal oral health and preventing dental issues.",
      features: ["Dental Examinations", "Digital X-rays", "Oral Cancer Screening", "Fluoride Treatment"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Restorative Care",
      description: "Restore function and aesthetics with our comprehensive restorative treatments.",
      features: ["Dental Implants", "Crowns & Bridges", "Root Canal Therapy", "Dentures"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Dental
            <span className="block text-gradient">Care Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From routine cleanings to complex procedures, we offer comprehensive dental services using cutting-edge technology and personalized care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200 card-hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <button className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group/btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
            
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                Book your comprehensive consultation today and discover how we can help you achieve the perfect smile you've always wanted.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center space-x-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                  <span>Call (024) 7699 2020</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
