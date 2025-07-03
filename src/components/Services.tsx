import { Shield, Sparkles, Heart, Zap, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Full Arch Implants",
      description: "Complete smile restoration with permanent, natural-looking teeth in just one day.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
      path: "/full-arch-implants"
    },
    {
      title: "Composite Bonding", 
      description: "Transform your smile with natural-looking tooth-colored resin in a single visit.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      path: "/composite-bonding"
    },
    {
      title: "Invisalign Braces",
      description: "Straighten your teeth discreetly with virtually invisible, removable aligners.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      path: "/invisalign-braces"
    },
    {
      title: "Teeth Whitening",
      description: "Achieve a brighter, more confident smile with professional whitening treatments.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      path: "/teeth-whitening"
    },
    {
      title: "Veneers",
      description: "Transform your smile with ultra-thin, custom-crafted porcelain shells.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      path: "/veneers"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      path: "/dental-implants"
    },
    {
      title: "Dentures",
      description: "Comfortable, natural-looking removable teeth replacement solutions.", 
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      path: "/dentures"
    },
    {
      title: "White Fillings",
      description: "Natural-looking, mercury-free composite fillings that blend seamlessly.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop", 
      path: "/white-fillings"
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
          <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Treatments</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            We Provide Industry
            <span className="block text-[#63316b]">Tailored Offerings For</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From routine cleanings to complex procedures, we offer comprehensive dental services using cutting-edge technology and personalized care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#63316b]/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#63316b] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* CTA */}
                <div className="inline-flex items-center space-x-2 text-[#63316b] font-semibold group/btn">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#63316b]/0 group-hover:bg-[#63316b]/5 transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-[#63316b] rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-white/5"></div>
            
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Book your comprehensive consultation today and discover how we can help you achieve the perfect smile you've always wanted.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center space-x-3 bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <span>Schedule Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
