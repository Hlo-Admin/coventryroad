
import { ArrowRight, Phone, Calendar, CheckCircle, Sparkles, Smile, Shield, DollarSign, Syringe, Heart, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DentalImplants = () => {
  useEffect(() => {
    document.title = "Dental Implants - Permanent Tooth Replacement | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Permanent solution",
      description: "Long-lasting tooth replacement that can last a lifetime"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Natural look and feel",
      description: "Functions just like your natural teeth"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Preserves jawbone",
      description: "Prevents bone loss and maintains facial structure"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "No damage to adjacent teeth",
      description: "Unlike bridges, implants don't affect neighboring teeth"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Cost-effective long-term",
      description: "Investment that pays off over decades"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Improved confidence",
      description: "Eat, speak, and smile with complete confidence"
    }
  ];

  const faqs = [
    {
      question: "Am I suitable for dental implants?",
      answer: "Most people with good oral health are suitable for implants. We'll assess your bone density and overall health during your consultation to determine if implants are right for you."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and good oral hygiene, dental implants can last 25 years or even a lifetime. Regular dental check-ups are essential for long-term success."
    },
    {
      question: "Is the implant procedure painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel pain during treatment. Most patients report minimal discomfort afterward, which can be managed with over-the-counter pain medication."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section with 3D Model */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium
                  <span className="text-[#63316b] block">Dental Implants</span>
                  in Coventry
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Replace missing teeth with permanent, natural-looking dental implants that function just like your own teeth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#63316b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Request a Callback</span>
                  </button>
                  <button className="border-2 border-[#63316b] text-[#63316b] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book Free Consultation</span>
                  </button>
                </div>
              </div>
              
              {/* Right 3D Object - Visible on all devices */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 glass bg-gradient-to-br from-[#63316b]/10 to-purple-100 rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#63316b]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#63316b]" />
                    </div>
                    <p className="text-[#63316b] font-medium text-sm sm:text-base">3D Implant Model</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Interactive visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What are Dental Implants */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What are Dental Implants?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Dental implants are titanium posts that are surgically placed into the jawbone to replace the roots of missing teeth.
                  </p>
                  <p>
                    Once the implant integrates with your bone, a natural-looking crown is attached, giving you a permanent replacement that looks, feels, and functions like a natural tooth.
                  </p>
                  <p>
                    Implants can replace single teeth, multiple teeth, or even support full dentures for a complete smile restoration.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dental implant procedure" 
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
                Why Choose Dental Implants?
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
                Ready for Permanent Tooth Replacement?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Book your free consultation to discover if dental implants are right for you.
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

export default DentalImplants;
