
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const ServiceTiles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: "Full Arch Implants",
      description: "Complete smile restoration in one day",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/full-arch-implants"
    },
    {
      title: "Composite Bonding", 
      description: "Natural-looking tooth restoration",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/composite-bonding"
    },
    {
      title: "Invisalign Braces",
      description: "Invisible teeth straightening",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/invisalign-braces"
    },
    {
      title: "Teeth Whitening",
      description: "Brighter, whiter smile",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/teeth-whitening"
    },
    {
      title: "Veneers",
      description: "Transform with porcelain shells",
      image: "https://images.unsplash.com/photo-1643326885857-4e6dc2d10a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/veneers"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/dental-implants"
    },
    {
      title: "Dentures",
      description: "Comfortable removable teeth",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/dentures"
    },
    {
      title: "White Fillings",
      description: "Mercury-free natural fillings",
      image: "https://images.unsplash.com/photo-1588776814053-c2b8b7a8e2a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      path: "/white-fillings"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;
    let interval: NodeJS.Timeout;

    const autoScroll = () => {
      if (isPaused) return;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startScrolling = () => {
      interval = setInterval(autoScroll, scrollDelay);
    };

    const stopScrolling = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    startScrolling();

    return () => {
      stopScrolling();
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group flex-none w-80"
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                {/* Background Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <ArrowRight className="w-5 h-5 text-[#63316b] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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
