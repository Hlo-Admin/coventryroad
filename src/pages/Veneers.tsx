import { ArrowRight, Phone, Calendar, CheckCircle, Sparkles, Smile, Shield, DollarSign, Syringe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Veneers = () => {
  useEffect(() => {
    document.title = "Porcelain Veneers - Transform Your Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Instant smile enhancement",
      description: "Transform your smile in just a few visits"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Fixes cracks, chips, gaps, or stains",
      description: "Address multiple cosmetic concerns at once"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Matches the natural look of your teeth",
      description: "Custom-crafted to blend seamlessly"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Preserves more of your original tooth",
      description: "Minimally invasive treatment approach"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Long-lasting and cost-effective",
      description: "Durable results that provide great value"
    },
    {
      icon: <Syringe className="w-6 h-6 text-[#63316b]" />,
      title: "Pain-free and minimally invasive",
      description: "Comfortable treatment with minimal preparation"
    }
  ];

  const recapBenefits = [
    "An instant smile boost",
    "Natural shade correction", 
    "Blending with your original teeth",
    "Comfortable, long-lasting results"
  ];

  const imperfections = [
    "Cracks",
    "Discolouration", 
    "Small gaps",
    "Irregular shapes"
  ];

  const faqs = [
    {
      question: "Are veneers right for me?",
      answer: "If you want to enhance your smile and cover visible flaws, veneers are an ideal choice. Book a FREE consult to explore your options."
    },
    {
      question: "How do veneers work?",
      answer: "A thin shell of porcelain is bonded to the front of your tooth to instantly enhance shape, shade, and alignment — often with no injections or drilling."
    },
    {
      question: "Am I suitable for veneers?",
      answer: "If you're not a perfect candidate, don't worry — we'll help you find an alternative solution that meets your smile goals."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559829834-3c0e0d2b1d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Restore Your Smile with{' '}
                <span className="text-[#63316b]">Veneers</span> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                A quick, pain-free and elegant way to correct chips, cracks, discolouration, and gaps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book My Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Veneers Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Say Goodbye to Imperfections
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Veneers are thin porcelain or ceramic shells bonded to the surface of your teeth to mask imperfections like:
                  </p>
                  <ul className="space-y-2 mt-4">
                    {imperfections.map((imperfection, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#63316b]" />
                        <span>{imperfection}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    They require minimal preparation and preserve more of your natural tooth structure than other cosmetic treatments.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Before and after veneer treatment" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Patients Love Veneers
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-[#63316b] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6">
              "We believe in preserving the beauty nature gave you, not replacing it — that's why our veneer approach is minimally invasive and individually tailored."
            </blockquote>
            <cite className="text-lg opacity-90 mb-8 block">— Coventry Road Dental Team</cite>
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Speak to Our Smile Consultant</span>
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Veneers – Your Questions Answered
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Benefits Recap Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Thin layers of white ceramic or porcelain deliver:
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {recapBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#63316b]" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Let's Talk Veneers</span>
            </button>
          </div>
        </section>

        {/* Service Tiles */}
        <ServiceTiles />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#63316b] to-[#63316b]/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Thinking about veneers but unsure if you qualify?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's chat or book a no-pressure free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
                <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default Veneers;
