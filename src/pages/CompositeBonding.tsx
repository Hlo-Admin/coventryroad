
import { ArrowRight, Phone, Calendar, CheckCircle, Sparkles, Smile, Shield, DollarSign, Syringe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CompositeBonding = () => {
  useEffect(() => {
    document.title = "Composite Bonding - Natural Tooth Restoration | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Natural-looking results",
      description: "Seamlessly blends with your existing teeth"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Quick and painless",
      description: "Usually completed in a single visit"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Fixes multiple issues",
      description: "Chips, cracks, gaps, and discoloration"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Preserves tooth structure",
      description: "Minimally invasive treatment approach"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Cost-effective solution",
      description: "Affordable alternative to veneers"
    },
    {
      icon: <Syringe className="w-6 h-6 text-[#63316b]" />,
      title: "No anesthesia needed",
      description: "Comfortable treatment experience"
    }
  ];

  const faqs = [
    {
      question: "Is composite bonding right for me?",
      answer: "Composite bonding is ideal for minor cosmetic improvements like small chips, gaps, or discoloration. Book a consultation to see if it's the right solution for your needs."
    },
    {
      question: "How long does composite bonding last?",
      answer: "With proper care, composite bonding can last 3-10 years. Regular dental check-ups and good oral hygiene will help extend its lifespan."
    },
    {
      question: "Does composite bonding require special care?",
      answer: "Maintain good oral hygiene and avoid biting hard objects. The bonded teeth can be cared for just like your natural teeth with regular brushing and flossing."
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
                Natural Looking{' '}
                <span className="text-[#63316b]">Composite Bonding</span> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Fix chips, cracks, gaps and discoloration with our tooth-colored composite resin treatment.
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

        {/* What is Composite Bonding */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What is Composite Bonding?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Composite bonding is a simple, painless cosmetic dental treatment that uses tooth-colored resin to repair and enhance your teeth.
                  </p>
                  <p>
                    The composite material is carefully applied, shaped, and polished to match your natural teeth, creating seamless results that look and feel natural.
                  </p>
                  <p>
                    It's perfect for fixing minor imperfections and can dramatically improve your smile in just one visit.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Composite bonding treatment" 
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
                Why Choose Composite Bonding?
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
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Book your free consultation today and discover how composite bonding can enhance your smile.
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

export default CompositeBonding;
