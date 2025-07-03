import { ArrowRight, Phone, Calendar, CheckCircle, Heart, Wrench, MapPin, User, Zap, Clock, Smile, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DentalImplants = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Replace a missing tooth or multiple teeth",
      description: "Restore single teeth or multiple missing teeth"
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#63316b]" />,
      title: "Restore bite strength and mouth function",
      description: "Chew and bite with confidence like natural teeth"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#63316b]" />,
      title: "Secure support for dentures or bridges",
      description: "Eliminate loose dentures with implant support"
    },
    {
      icon: <User className="w-6 h-6 text-[#63316b]" />,
      title: "Trusted implant specialist team",
      description: "Expert care from experienced professionals"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#63316b]" />,
      title: "Prevent jawbone shrinkage and facial collapse",
      description: "Maintain your facial structure and jawbone health"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#63316b]" />,
      title: "Long-lasting and cost-effective solution",
      description: "Investment in your smile that can last a lifetime"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Smile, eat, and speak confidently again",
      description: "Regain your confidence and quality of life"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We'll assess your smile, discuss goals, and check suitability — no pressure, just guidance."
    },
    {
      number: "02", 
      title: "Precise 3D Planning",
      description: "Our implant team designs a treatment plan tailored to your bone, health, and ideal outcome."
    },
    {
      number: "03",
      title: "Minor Surgical Placement", 
      description: "The implant is placed painlessly under local anaesthetic. Healing begins."
    },
    {
      number: "04",
      title: "Crown, Bridge, or Denture Fixation",
      description: "Once healed, your custom-made tooth (or teeth) is attached — blending seamlessly."
    }
  ];

  const faqs = [
    {
      question: "Are dental implants right for me?",
      answer: "If you're missing teeth or tired of dentures, join us for a free consultation. We'll guide you."
    },
    {
      question: "What exactly is a dental implant?",
      answer: "It's a titanium post that replaces the root of a missing tooth. A crown is then placed on top."
    },
    {
      question: "Do implants last forever?",
      answer: "With good care, the implant root can last a lifetime. Crowns or bridges may last over a decade."
    },
    {
      question: "Will the procedure hurt?",
      answer: "It's a minor surgical procedure done under local anaesthesia — you'll feel nothing during it."
    },
    {
      question: "What if I'm not suitable?",
      answer: "We'll find an alternative option that suits your needs. We're here to restore your smile, no matter what."
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
                <span className="text-[#63316b]">Dental Implants</span> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Smile, chew, and live confidently again with natural-feeling, long-lasting dental implants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Implant Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Dental Implants Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Are Dental Implants?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Losing teeth can affect more than your smile — it impacts your confidence, eating, speech, and bone health.
                </p>
                <p>
                  A dental implant is a titanium root substitute that fuses with your jawbone, forming a solid base for a replacement tooth, bridge, or denture.
                </p>
                <p>
                  They look, feel, and function like real teeth, giving you a smile that's as strong as it is natural.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center font-semibold">1</div>
                    <span className="text-gray-700">Titanium implant placed</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center font-semibold">2</div>
                    <span className="text-gray-700">Bone fuses with implant</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#63316b] text-white rounded-full flex items-center justify-center font-semibold">3</div>
                    <span className="text-gray-700">Custom crown attached</span>
                  </div>
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
                Why Choose Dental Implants?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              "Many patients come in afraid they'll have to live with gaps or dentures forever. Implants give them their life — and their smile — back."
            </blockquote>
            <cite className="text-lg opacity-90">— Your Implant Dentist, Coventry Road Dental</cite>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Implant Journey
              </h2>
            </div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#63316b] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dental Implant FAQs
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

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#63316b] to-[#63316b]/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-light italic mb-6">
                "Implants don't just fix a missing tooth — they restore confidence, health, and joy in the everyday."
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Talk to Us About Implants</span>
                </button>
                <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DentalImplants;
