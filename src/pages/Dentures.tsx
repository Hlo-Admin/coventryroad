
import { Phone, Calendar, CheckCircle, Users, Award, Star, Shield, Heart, Wrench, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceTiles from '../components/ServiceTiles';
import FloatingBubble from '../components/FloatingBubble';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Dentures = () => {
  useEffect(() => {
    document.title = "Dentures - Comfortable Tooth Replacement | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Options for NHS and private care",
      description: "Flexible payment options to suit your budget"
    },
    {
      icon: <Users className="w-6 h-6 text-[#63316b]" />,
      title: "Designed to suit your lifestyle and budget",
      description: "Personalized solutions for every patient"
    },
    {
      icon: <Star className="w-6 h-6 text-[#63316b]" />,
      title: "Natural aesthetics that blend seamlessly",
      description: "Look and feel like your natural teeth"
    },
    {
      icon: <Award className="w-6 h-6 text-[#63316b]" />,
      title: "Created by skilled, experienced dental technicians",
      description: "Expert craftsmanship for superior quality"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Comfortable fit with soft or flexible materials",
      description: "Advanced materials for maximum comfort"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Implant-supported options available",
      description: "Extra stability for enhanced confidence"
    }
  ];

  const dentureTypes = [
    {
      title: "Full Dentures",
      description: "For complete tooth replacement in the upper or lower arch",
      icon: <Wrench className="w-8 h-8 text-[#63316b]" />
    },
    {
      title: "Partial Dentures", 
      description: "Fill gaps between remaining teeth, preserving your natural smile",
      icon: <Users className="w-8 h-8 text-[#63316b]" />
    },
    {
      title: "Flexible Dentures",
      description: "Soft, lightweight, and ideal for comfort",
      icon: <Heart className="w-8 h-8 text-[#63316b]" />
    },
    {
      title: "Implant-Supported Dentures",
      description: "Fixed securely for confidence and ease of use",
      icon: <Shield className="w-8 h-8 text-[#63316b]" />
    }
  ];

  const faqs = [
    {
      question: "What is a denture?",
      answer: "Dentures are removable appliances, made of acrylic, chrome, or flexible materials, with artificial teeth attached. They restore the appearance and function of natural teeth."
    },
    {
      question: "What are the benefits of dentures?",
      answer: "Modern dentures look more natural than ever before and allow patients to eat, smile, and speak with comfort. We offer several styles and materials suited to different needs and budgets."
    },
    {
      question: "Can I remove my denture?",
      answer: "Yes. Dentures are designed to be removed daily — typically at night — for cleaning and maintenance, similar to caring for natural teeth."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section with 3D Model - Visible on all devices */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Restore Your Smile with
                  <span className="text-[#63316b] block">Dentures</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Tailored solutions that fit comfortably, look natural, and bring back confidence in your everyday life.
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
                    <p className="text-[#63316b] font-medium text-sm sm:text-base">3D Denture Model</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Interactive visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Dentures Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                A Trusted Way to Restore Missing Teeth
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  There's no true substitute for your own natural teeth, but well-crafted dentures can come close in both function and appearance.
                </p>
                <p>At Coventry Road Dental, we offer:</p>
                <ul className="space-y-2">
                  <li>• Full and partial dentures</li>
                  <li>• Acrylic, chrome, and flexible base options</li>
                  <li>• Implant-supported alternatives for a fixed feel</li>
                </ul>
                <p>
                  Advancements in denture materials allow for natural-looking tooth shades and improved comfort.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16 text-[#63316b]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Dentures</h3>
                  <p className="text-gray-600">Natural-looking and comfortable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Denture Treatments
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-[#63316b] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6">
              "Loose dentures can undermine confidence and limit quality of life. We help you feel like yourself again — with comfort, function, and a confident smile."
            </blockquote>
            <cite className="text-lg opacity-90">— Coventry Road Dental Team</cite>
          </div>
        </section>

        {/* Denture Types Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dentures That Fit Your Needs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dentureTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{type.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{type.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you prefer a traditional or advanced fixed solution, we'll help you find the option that fits you best.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Restore comfort, speech, and confidence — without compromise.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Request Callback</span>
              </button>
              <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <FloatingBubble />
      <Footer />
    </>
  );
};

export default Dentures;
