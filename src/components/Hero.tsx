
import { Phone, Calendar, MapPin, Clock, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 glass bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glass bg-pink-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-white/30">
              <Award className="w-4 h-4 inline mr-2" />
              BDA Good Practice Certified
            </div>
            <div className="glass bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-white/30">
              <Users className="w-4 h-4 inline mr-2" />
              25+ Years Experience
            </div>
            <div className="glass bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-white/30">
              <MapPin className="w-4 h-4 inline mr-2" />
              Coventry Local Practice
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Premium Dental Care in{' '}
            <span className="gradient-text">Coventry</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fadeInUp">
            Where expertise meets empathy. Experience gentle, reliable dentistry delivered with honesty, precision, and heart at Coventry Road Dental Care.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="glass bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 animate-fadeInUp">
              <Phone className="w-8 h-8 text-[#63316b] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Same Day Appointments</h3>
              <p className="text-gray-600 text-sm">Emergency and routine care available</p>
            </div>
            <div className="glass bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 animate-fadeInUp">
              <Users className="w-8 h-8 text-[#63316b] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">NHS & Private Options</h3>
              <p className="text-gray-600 text-sm">Flexible payment plans available</p>
            </div>
            <div className="glass bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 animate-fadeInUp">
              <Award className="w-8 h-8 text-[#63316b] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">State-of-the-art equipment & techniques</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp">
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Your Free Consultation</span>
            </button>
            <button className="glass bg-white/80 backdrop-blur-sm text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-white/30 inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call: 024 7699 2020</span>
            </button>
          </div>

          {/* Quick Info */}
          <div className="glass bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/30 animate-fadeInUp">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-[#63316b]" />
                <span className="text-gray-700">94 Coventry Rd, Bedworth, Coventry</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-[#63316b]" />
                <span className="text-gray-700">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
