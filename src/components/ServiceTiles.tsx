
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const ServiceTiles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Full Arch Implants",
      description: "Complete smile restoration in one day",
      image: "/lovable-uploads/b3719a1c-237e-40d0-9e7a-b224c1dcd1d6.png",
      path: "/full-arch-implants",
      gradient: "from-[#63316b] to-purple-600"
    },
    {
      title: "Composite Bonding", 
      description: "Natural-looking tooth restoration",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/composite-bonding",
      gradient: "from-[#63316b] to-pink-600"
    },
    {
      title: "Invisalign Braces",
      description: "Invisible teeth straightening",
      image: "/lovable-uploads/9ca20df0-a984-4c24-bec5-dfa24a26b9ff.png",
      path: "/invisalign-braces",
      gradient: "from-[#63316b] to-indigo-600"
    },
    {
      title: "Teeth Whitening",
      description: "Brighter, whiter smile",
      image: "/lovable-uploads/6ea5a8aa-7b9b-4b0a-a3ff-ba1823a3dfeb.png",
      path: "/teeth-whitening",
      gradient: "from-[#63316b] to-yellow-500"
    },
    {
      title: "Veneers",
      description: "Transform with porcelain shells",
      image: "/lovable-uploads/69f725c9-fe56-4589-ba0f-98a1066a2646.png",
      path: "/veneers",
      gradient: "from-[#63316b] to-teal-600"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement",
      image: "/lovable-uploads/b025e17d-dffe-4d21-b83f-005975eaf587.png",
      path: "/dental-implants",
      gradient: "from-[#63316b] to-green-600"
    },
    {
      title: "Dentures",
      description: "Comfortable removable teeth",
      image: "/lovable-uploads/ae0893e2-a6ea-4235-9a36-845cce3bbe67.png",
      path: "/dentures",
      gradient: "from-[#63316b] to-orange-600"
    },
    {
      title: "White Fillings",
      description: "Mercury-free natural fillings",
      image: "/lovable-uploads/6ea5a8aa-7b9b-4b0a-a3ff-ba1823a3dfeb.png",
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
              <div className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} rounded-2xl text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20`}>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="relative p-6 bg-gradient-to-br from-black/40 to-transparent">
                  <div className="flex items-center justify-end mb-4">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
