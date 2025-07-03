
import { ArrowRight, Sparkles, Shield, Heart, Zap, Award, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const ServiceTiles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Full Arch Implants",
      description: "Complete smile restoration in one day",
      icon: <Sparkles className="w-6 h-6" />,
      path: "/full-arch-implants",
      gradient: "from-[#63316b] to-purple-600"
    },
    {
      title: "Composite Bonding", 
      description: "Natural-looking tooth restoration",
      icon: <Shield className="w-6 h-6" />,
      path: "/composite-bonding",
      gradient: "from-[#63316b] to-pink-600"
    },
    {
      title: "Invisalign Braces",
      description: "Invisible teeth straightening",
      icon: <Heart className="w-6 h-6" />,
      path: "/invisalign-braces",
      gradient: "from-[#63316b] to-indigo-600"
    },
    {
      title: "Teeth Whitening",
      description: "Brighter, whiter smile",
      icon: <Zap className="w-6 h-6" />,
      path: "/teeth-whitening",
      gradient: "from-[#63316b] to-yellow-500"
    },
    {
      title: "Veneers",
      description: "Transform with porcelain shells",
      icon: <Award className="w-6 h-6" />,
      path: "/veneers",
      gradient: "from-[#63316b] to-teal-600"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement",
      icon: <Users className="w-6 h-6" />,
      path: "/dental-implants",
      gradient: "from-[#63316b] to-green-600"
    },
    {
      title: "Dentures",
      description: "Comfortable removable teeth",
      icon: <Wrench className="w-6 h-6" />,
      path: "/dentures",
      gradient: "from-[#63316b] to-orange-600"
    },
    {
      title: "White Fillings",
      description: "Mercury-free natural fillings",
      icon: <Shield className="w-6 h-6" />,
      path: "/white-fillings",
      gradient: "from-[#63316b] to-cyan-600"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, scrollDelay);
    
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, scrollDelay);
      return () => clearInterval(newInterval);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive dental care tailored to your needs
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group flex-none w-80"
            >
              <div className={`glass bg-gradient-to-br ${service.gradient} p-6 rounded-2xl text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
