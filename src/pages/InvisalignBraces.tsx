import { useState } from 'react';
import { Phone, Mail, Calendar, Play, ChevronLeft, ChevronRight, Eye, Utensils, Clock, Smile, Shield, User, CheckCircle, Users, Heart, Star, MessageCircle, DollarSign, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';

const InvisalignBraces = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const journeySteps = [
    { image: '/lovable-uploads/6835c5cd-d5a1-4f43-bdd2-b4f8e4281f53.png', caption: '3D Scan Process' },
    { image: '/lovable-uploads/b36a9abe-94d8-4d84-bfc4-8cfa96f50a54.png', caption: 'Custom Aligners' },
    { image: '/lovable-uploads/f5f56c66-3af5-4799-8c25-992c6ef7417c.png', caption: 'Final Transformation' }
  ];

  const benefits = [
    { icon: Eye, title: 'Virtually invisible clear aligners' },
    { icon: Utensils, title: 'Removable for eating and brushing' },
    { icon: Clock, title: 'Predictable results with digital planning' },
    { icon: Shield, title: 'No food restrictions' },
    { icon: Smile, title: 'Comfortable and smooth edges' },
    { icon: User, title: 'Led by experienced dentists' }
  ];

  const conditions = [
    { icon: CheckCircle, title: 'Crowded Teeth' },
    { icon: CheckCircle, title: 'Twisted or Rotated Teeth' },
    { icon: CheckCircle, title: 'Crossbite' },
    { icon: CheckCircle, title: 'Overbite or Underbite' },
    { icon: CheckCircle, title: 'Gapped Teeth' },
    { icon: CheckCircle, title: 'Protruding Front Teeth' }
  ];

  const whyChooseUs = [
    { icon: Calendar, title: 'FREE consultations, no pressure' },
    { icon: Users, title: 'Invisalign-trained, passionate team' },
    { icon: Smile, title: 'Focused on discreet and confident transformation' },
    { icon: DollarSign, title: 'Great value, flexible finance options' },
    { icon: MapPin, title: 'Local care with a personal touch' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journeySteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Align Your Smile with Invisalign Braces in Coventry
          </h1>
          <p className="text-2xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Discreet, removable, and virtually invisible aligners for a confident smile — without the metal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Calendar className="w-5 h-5" />
              <span>Book a Free Consultation</span>
            </button>
            <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Request a Callback</span>
            </button>
          </div>
        </div>
      </section>

      {/* What is Invisalign Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Straighten Your Teeth Without Brackets or Wires
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Misaligned teeth can affect your confidence, and traditional braces aren't for everyone. At Coventry Road Dentalcare, we offer Invisalign – the clear solution to straighter teeth for adults and teens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Using advanced 3D imaging, we can show you your final smile even before your treatment begins.
              </p>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center relative">
                {!isVideoPlaying ? (
                  <>
                    <img 
                      src="/lovable-uploads/b36a9abe-94d8-4d84-bfc4-8cfa96f50a54.png" 
                      alt="Invisalign aligners"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={handleVideoPlay}
                        className="w-20 h-20 bg-[#63316b] rounded-full flex items-center justify-center hover:bg-[#63316b]/90 transition-all duration-300 group shadow-lg"
                      >
                        <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hagnJjEydjE?autoplay=1"
                    title="Invisalign Treatment Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Scan to Smile</h2>
            <p className="text-xl text-gray-600">Your Invisalign journey walkthrough</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <img 
                  src={journeySteps[currentSlide].image} 
                  alt={journeySteps[currentSlide].caption}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#63316b] text-center">
                  {journeySteps[currentSlide].caption}
                </h3>
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

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Invisalign?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Invisalign in 3 Easy Steps</h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#63316b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">FREE Consultation</h3>
                <p className="text-lg text-gray-700">
                  Meet our Invisalign dentist for a relaxed chat. We'll discuss your concerns and scan your teeth using 3D iTero tech.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Preview Your Future Smile</h3>
                <p className="text-lg text-gray-700">
                  Get a digital simulation of how your teeth will look after treatment — before we even begin.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Your Smile Journey</h3>
                <p className="text-lg text-gray-700">
                  Receive your custom clear aligners. Wear each set for 2 weeks, changing gradually as your teeth shift into perfect position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light italic text-gray-700 mb-8">
            "I didn't want metal braces as an adult — Invisalign gave me the smile I dreamed of without anyone even noticing."
          </blockquote>
          <p className="text-lg text-gray-500">— Real Patient Review</p>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Is Invisalign Right for You?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <condition.icon className="w-6 h-6 text-[#63316b]" />
                </div>
                <p className="font-medium text-gray-900">
                  {condition.title}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Our dentists will recommend the best clear system for your case — safe, affordable, and discreet.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Coventry Road Dentalcare?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-[#63316b]" />
                </div>
                <p className="font-medium text-gray-900">
                  {reason.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Straight Teeth May Be a Phone Call Away</h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help you smile again — book your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Service Tiles */}
      <ServiceTiles />

      {/* Floating Chat CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Questions about Invisalign?
          </div>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default InvisalignBraces;
