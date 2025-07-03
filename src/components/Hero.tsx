import { ArrowRight, Play, CheckCircle, Users, Award, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#63316b]/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fadeInUp">
            <span className="w-2 h-2 bg-[#63316b] rounded-full animate-pulse"></span>
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
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#63316b] hover:text-white transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (024) 7699 2020</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#63316b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">15+ Years</div>
                  <div className="text-sm">of Excellence</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#63316b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Birmingham</div>
                  <div className="text-sm">Based Practice</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#63316b]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#63316b]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
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
