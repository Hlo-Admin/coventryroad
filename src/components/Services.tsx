import {
  Shield,
  Sparkles,
  Heart,
  Zap,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Full Arch Implants",
      description:
        "Complete smile restoration with permanent, natural-looking teeth in just one day.",
      image: "/home/services/Full Arch Implants.jpg",
      path: "/full-arch-implants",
    },
    {
      title: "Composite Bonding",
      description:
        "Transform your smile with natural-looking tooth-colored resin in a single visit.",
      image: "/home/services/Composite Bonding.jpg",
      path: "/composite-bonding",
    },
    {
      title: "Invisalign Braces",
      description:
        "Straighten your teeth discreetly with virtually invisible, removable aligners.",
      image: "/home/services/Invisalign Braces.webp",
      path: "/invisalign-braces",
    },
    {
      title: "Teeth Whitening",
      description:
        "Achieve a brighter, more confident smile with professional whitening treatments.",
      image: "/home/services/Teeth Whitening.jpg",
      path: "/teeth-whitening",
    },
    {
      title: "Veneers",
      description:
        "Transform your smile with ultra-thin, custom-crafted porcelain shells.",
      image: "/home/services/Veneers.jpg",
      path: "/veneers",
    },
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
      image: "/home/services/Dental Implants.jpg",
      path: "/dental-implants",
    },
    {
      title: "Dentures",
      description:
        "Comfortable, natural-looking removable teeth replacement solutions.",
      image: "/home/services/Dentures.jpg",
      path: "/dentures",
    },
    {
      title: "White Fillings",
      description:
        "Natural-looking, mercury-free composite fillings that blend seamlessly.",
      image: "/home/services/White Fillings.jpg",
      path: "/white-fillings",
    },
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
            From routine cleanings to complex procedures, we offer comprehensive
            dental services using cutting-edge technology and personalized care.
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
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ display: "block" }}
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
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#63316b]/0 group-hover:bg-[#63316b]/5 transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
