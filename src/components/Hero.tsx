
import { ArrowRight, Play, CheckCircle, Users, Award, Star, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#63316b]/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fadeInUp">
            <MapPin className="w-4 h-4" />
            <span>Premium Dental Care in Birmingham</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Your Perfect Smile
            <span className="block text-[#63316b]">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Experience exceptional dental care with our state-of-the-art treatments and compassionate approach. We're committed to giving you the confidence that comes with a healthy, beautiful smile.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#63316b]/90 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3 group">
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#63316b] hover:text-white transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>Call (024) 7699 2020</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#63316b]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">15+ Years</div>
                  <div className="text-sm">of Excellence</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#63316b]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Birmingham</div>
                  <div className="text-sm">Based Practice</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#63316b] fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">5-Star</div>
                  <div className="text-sm">Patient Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#63316b] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#63316b] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
