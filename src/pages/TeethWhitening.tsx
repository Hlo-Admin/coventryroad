
import { ArrowRight, Phone, Calendar, CheckCircle, Sparkles, Smile, Shield, DollarSign, Syringe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TeethWhitening = () => {
  useEffect(() => {
    document.title = "Professional Teeth Whitening - Brighter Smile | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Professional results",
      description: "Up to 8 shades whiter in just one session"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Safe and effective",
      description: "Clinically proven whitening agents"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Long-lasting results",
      description: "Results can last 1-3 years with proper care"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Enamel protection",
      description: "Gentle formula that protects tooth enamel"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Great value",
      description: "Professional results at competitive prices"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Boost confidence",
      description: "Feel more confident with a brighter smile"
    }
  ];

  const faqs = [
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, professional teeth whitening is completely safe when performed by qualified dental professionals. We use clinically proven whitening agents that are gentle on your teeth and gums."
    },
    {
      question: "How long do whitening results last?",
      answer: "Results typically last 1-3 years depending on your lifestyle and diet. Avoiding staining foods and drinks, and maintaining good oral hygiene will help extend the results."
    },
    {
      question: "Will whitening cause sensitivity?",
      answer: "Some patients may experience mild sensitivity during or after treatment, but this is temporary and usually subsides within 24-48 hours. We use desensitizing agents to minimize any discomfort."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Professional{' '}
                <span className="text-[#63316b]">Teeth Whitening</span> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Achieve a brilliantly white smile with our safe, effective professional teeth whitening treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Teeth Whitening */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Professional Teeth Whitening
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Our professional teeth whitening treatments use advanced whitening technology to safely and effectively brighten your smile.
                  </p>
                  <p>
                    Unlike over-the-counter products, our professional treatments can achieve dramatic results in just one session, making your teeth up to 8 shades whiter.
                  </p>
                  <p>
                    We offer both in-office treatments for immediate results and take-home kits for gradual whitening at your convenience.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional teeth whitening treatment" 
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
                Why Choose Professional Whitening?
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

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
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

        {/* Service Tiles */}
        <ServiceTiles />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#63316b] to-[#63316b]/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Ready for a Brighter Smile?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Book your free consultation and discover how teeth whitening can transform your smile.
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

export default TeethWhitening;
