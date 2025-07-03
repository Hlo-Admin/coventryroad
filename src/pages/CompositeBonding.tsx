
import { useState } from 'react';
import { Phone, Mail, Calendar, Play, ChevronLeft, ChevronRight, Tooth, Mirror, Palette, Smile, Check, PoundSterling, CalendarDays, Heart, Star, MessageCircle, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompositeBonding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    { before: '/placeholder.svg', after: '/placeholder.svg', caption: 'Chipped Tooth Fixed' },
    { before: '/placeholder.svg', after: '/placeholder.svg', caption: 'Gap Closed' },
    { before: '/placeholder.svg', after: '/placeholder.svg', caption: 'Discolouration Corrected' },
    { before: '/placeholder.svg', after: '/placeholder.svg', caption: 'Smile Transformation' }
  ];

  const benefits = [
    { icon: Tooth, title: 'Fix chipped or fractured teeth' },
    { icon: Mirror, title: 'Close gaps between teeth' },
    { icon: Palette, title: 'Correct discolouration for a brighter look' },
    { icon: Smile, title: 'Smile with confidence again' }
  ];

  const advantages = [
    { icon: Check, title: 'Non-invasive and completely reversible' },
    { icon: PoundSterling, title: 'Cost-effective vs. veneers or crowns' },
    { icon: CalendarDays, title: 'Results in just one visit' },
    { icon: Heart, title: 'No drilling, no pain, no downtime' },
    { icon: Star, title: 'Boosts confidence instantly' },
    { icon: PoundSterling, title: 'Starts from just £250 per tooth' },
    { icon: Check, title: 'Free consultation to build your personalised plan' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Composite Bonding in Coventry
          </h1>
          <p className="text-2xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            A simple, pain-free way to perfect your smile.
          </p>
          <p className="text-xl text-[#63316b] font-semibold mb-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            From just £250 per tooth with a FREE consultation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              <span>Call 024 7631 2256</span>
            </button>
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Request a Callback</span>
            </button>
          </div>
          
          <p className="text-gray-500 mt-6 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            Let's personalise your smile journey.
          </p>
        </div>
      </section>

      {/* What is Composite Bonding Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Exactly Is Composite Bonding?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Composite bonding is a quick, pain-free cosmetic procedure that enhances your smile in just one visit. A white resin material is carefully placed onto the tooth, moulded into shape, cured with a light, and polished for a flawless finish.
              </p>
              
              {/* Process Steps */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                  <p className="text-sm font-medium">Apply Resin</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                  <p className="text-sm font-medium">Shape</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                  <p className="text-sm font-medium">Cure</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                  <p className="text-sm font-medium">Polish</p>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Play className="w-16 h-16 text-[#63316b]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference</h2>
            <p className="text-xl text-gray-600">Swipe through real transformations</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Before</h3>
                  <img 
                    src={beforeAfterImages[currentSlide].before} 
                    alt="Before treatment"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">After</h3>
                  <img 
                    src={beforeAfterImages[currentSlide].after} 
                    alt="After treatment"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-[#63316b]">
                  {beforeAfterImages[currentSlide].caption}
                </h4>
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Bonding */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Composite Bonding?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:bg-[#63316b] hover:text-white">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-[#63316b] group-hover:text-white mx-auto" />
                </div>
                <p className="font-medium group-hover:text-white">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Ideal for anyone looking for a cosmetic upgrade — without surgery, pain or needles.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advantages of Composite Bonding</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-[#63316b]" />
                </div>
                <p className="font-medium text-gray-900">
                  {advantage.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">It's As Easy As 1, 2, 3</h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#63316b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                <p className="text-lg text-gray-700">
                  A relaxed chat with our treatment coordinator who will walk you through your smile goals and options.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#63316b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Optional Teeth Whitening</h3>
                <p className="text-lg text-gray-700">
                  Boost brightness with a 3-week whitening journey using custom 3D iTero trays made just for you.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#63316b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Go Go Go with Your New Smile!</h3>
                <p className="text-lg text-gray-700">
                  Your bonding appointment: pain-free, no injections, and all completed in just one visit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-[#63316b] text-white px-6 py-3 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Start to finish in as little as 1 week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Section */}
      <section className="py-20 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light italic mb-8">
            "The procedure was quick and painless — and now, I smile without hesitation!"
          </blockquote>
          <p className="text-lg opacity-90 mb-12">— Actual Patient Testimonial</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule My Free Consultation</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>I Have Questions</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Chat CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Curious about Composite Bonding?
          </div>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default CompositeBonding;
