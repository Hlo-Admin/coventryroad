
import { Shield, Sparkles, Heart, Zap, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments for the whole family.",
      features: ["Regular Check-ups", "Teeth Cleaning", "Cavity Treatment", "Gum Care"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments designed to enhance your confidence.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"]
    },
    {
      icon: Heart,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners for a perfect smile.",
      features: ["Metal Braces", "Clear Aligners", "Retainers", "Bite Correction"]
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "Urgent dental care when you need it most. We're here to help with dental emergencies.",
      features: ["24/7 Support", "Pain Relief", "Urgent Repairs", "Same-day Treatment"]
    },
    {
      icon: Clock,
      title: "Preventive Care",
      description: "Stay ahead of dental problems with our comprehensive preventive care programs.",
      features: ["Oral Exams", "X-rays", "Sealants", "Fluoride Treatment"]
    },
    {
      icon: Award,
      title: "Specialized Treatments",
      description: "Advanced dental procedures including implants, crowns, and surgical treatments.",
      features: ["Dental Implants", "Crowns & Bridges", "Root Canal", "Oral Surgery"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Dental Care for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Everyone</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From routine cleanings to complex procedures, we offer comprehensive dental services using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1 group-hover:space-x-2">
                <span>Learn More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-xl mb-8 text-blue-100">Book your consultation today and take the first step towards perfect oral health.</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
