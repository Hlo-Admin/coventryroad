
import { Phone, Calendar, Shield, Heart, CheckCircle, Palette, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WhiteFillings = () => {
  const benefits = [
    {
      icon: <Palette className="w-6 h-6 text-[#63316b]" />,
      title: "Matched exactly to your tooth colour",
      description: "Perfectly blended with your natural teeth"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Mercury-free and safe",
      description: "Biocompatible materials for your health"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#63316b]" />,
      title: "Hard-wearing and long-lasting",
      description: "Durable restoration that stands the test of time"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Seamless appearance, no dark spots",
      description: "Natural-looking results that won't show"
    },
    {
      icon: <User className="w-6 h-6 text-[#63316b]" />,
      title: "Placed by highly skilled cosmetic dentists",
      description: "Expert care from experienced professionals"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Ideal for front or back teeth",
      description: "Versatile solution for any location"
    }
  ];

  const faqs = [
    {
      question: "What are white fillings made from?",
      answer: "A high-quality composite resin that can be shaped and colour-matched to blend perfectly with your natural teeth."
    },
    {
      question: "Are white fillings right for me?",
      answer: "If you're looking for a mercury-free, natural-looking option, composite fillings may be a great choice. Book a consultation to explore what's best for you."
    },
    {
      question: "Can anyone get white fillings?",
      answer: "Yes — they're available for everyone, depending on the size and location of the filling. We'll assess your suitability at your appointment."
    },
    {
      question: "Can I replace my metal fillings?",
      answer: "Possibly. While we don't always recommend removing healthy amalgam fillings, we'll guide you through the pros and cons and suggest what's right for you."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Natural. Safe. Seamless.{' '}
                <span className="text-[#63316b]">White Fillings</span> in Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                A mercury-free solution that blends beautifully with your natural teeth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
                <button className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Are White Fillings Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                A Modern, Natural-Looking Alternative to Metal Fillings
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  In the past, fillings were made of silver-coloured amalgam, which often showed when you smiled or laughed.
                </p>
                <p className="text-lg text-gray-700">Today, our tooth-coloured composite fillings offer:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                    <span>A natural look that matches your teeth</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                    <span>Strong, reliable restoration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                    <span>Mercury-free safety and aesthetics</span>
                  </li>
                </ul>
                <p className="text-gray-600 italic">
                  Though they take a little longer to place than silver fillings, the results speak for themselves — discreet, durable, and beautiful.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#63316b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-16 h-16 text-[#63316b]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">White vs Silver Fillings</h3>
                  <p className="text-gray-600">Natural appearance that blends seamlessly</p>
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
                Why Choose White Fillings?
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

        {/* Patient-Centered Highlight Section */}
        <section className="py-16 bg-[#63316b] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6">
              "We believe that beautiful smiles should look natural and healthy — and you shouldn't have to hide yours because of a silver spot when you laugh."
            </blockquote>
            <cite className="text-lg opacity-90">— Coventry Road Dental Care Team</cite>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                White Filling FAQs
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

        {/* Closing Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              A small fix can make a big difference.
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let your smile shine again — naturally and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Request Callback</span>
              </button>
              <Link to="/" className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book My Consultation</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky CTA Bubble */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-[#63316b] text-white p-4 rounded-full shadow-lg max-w-xs">
            <p className="text-sm font-medium mb-2">
              Tired of dark metal fillings showing when you smile?
            </p>
            <p className="text-xs opacity-90">
              Let's talk about switching to white fillings — safely and beautifully.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhiteFillings;
