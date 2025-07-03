import { ArrowRight, Phone, Calendar, CheckCircle, Star, Sparkles, Home, Users, Clock, DollarSign, RefreshCw, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TeethWhitening = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Brightens stained and ageing teeth",
      description: "Removes years of discoloration from coffee, wine, and natural aging"
    },
    {
      icon: <Star className="w-6 h-6 text-[#63316b]" />,
      title: "Boosts confidence and self-esteem",
      description: "Feel more confident with a brighter, more attractive smile"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Improves overall appearance",
      description: "A whiter smile can make you look younger and more vibrant"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#63316b]" />,
      title: "Safe, fast, and non-invasive",
      description: "Professional-grade treatment with no drilling or surgery required"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Affordable and long-lasting",
      description: "Cost-effective treatment with results that can last for years"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#63316b]" />,
      title: "Easy top-ups from home",
      description: "Maintain your results with convenient at-home touch-ups"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-[#63316b]" />,
      title: "Custom trays tailored to your mouth",
      description: "Perfect fit for optimal results"
    },
    {
      icon: <Home className="w-8 h-8 text-[#63316b]" />,
      title: "Use at home at your own pace",
      description: "Convenient treatment on your schedule"
    },
    {
      icon: <Users className="w-8 h-8 text-[#63316b]" />,
      title: "Advised by trained professionals",
      description: "Expert guidance throughout your journey"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#63316b]" />,
      title: "Quick, comfortable, safe, and pain-free",
      description: "Professional results without discomfort"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Professional Consultation",
      description: "We'll assess your teeth, shade, goals and recommend the best whitening brand for you."
    },
    {
      number: "02",
      title: "iTero Scan",
      description: "A quick 3D scan of your teeth is taken to create your custom-fit trays."
    },
    {
      number: "03",
      title: "Start Whitening at Home",
      description: "Pick up your trays and gels, then whiten from home over the next few days — it's that simple!"
    },
    {
      number: "04",
      title: "Top Up Anytime",
      description: "You can re-use your trays with additional gel whenever you want to refresh your brightness."
    }
  ];

  const faqs = [
    {
      question: "Is teeth whitening right for me?",
      answer: "Yes! If your teeth have dulled over time or you want to boost your smile safely and affordably, whitening is a great choice."
    },
    {
      question: "How long will the treatment take?",
      answer: "After your scan, you'll collect your custom trays and gels. Your results will depend on your current shade, lifestyle, and diet."
    },
    {
      question: "Does it hurt?",
      answer: "Whitening is painless when supervised by a dental professional. Some may experience temporary sensitivity — and we offer solutions to help."
    },
    {
      question: "Can I whiten again later?",
      answer: "Absolutely. Once you have your trays, you can simply purchase more gel to refresh your smile anytime."
    },
    {
      question: "What about crowns, veneers, or dentures?",
      answer: "These materials don't whiten. We'll recommend cleaning or replacement if needed to ensure your smile looks even and natural."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        {/* Hero Section - Unified structure */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Content - Left Side */}
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Brighten Your Smile with{' '}
                  <span className="text-[#63316b]">Teeth Whitening</span> in Coventry
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Safe. Professional. Pain-free. Done from the comfort of your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              
              {/* Hero Image - Right Side */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop" 
                    alt="Professional teeth whitening results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Teeth Whitening Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional teeth whitening process" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  A Simple Treatment with a Big Impact
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Teeth whitening is one of the easiest, most cost-effective, and longest-lasting ways to enhance your smile — and boost your confidence.
                  </p>
                  <p>
                    At Coventry Road Dental Care, we offer two professional-grade home whitening systems with custom trays and gels, selected based on:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#63316b]" />
                      <span>The shade of your teeth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#63316b]" />
                      <span>Your desired brightness</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#63316b]" />
                      <span>Your budget</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Two whitening brands, one goal: Your best smile
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-[#63316b] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6">
              "Tooth whitening can give your smile and confidence a boost — and we love seeing our patients light up from the inside out."
            </blockquote>
            <cite className="text-lg opacity-90">— Coventry Road Dental Team</cite>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You'll Love About It
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

        {/* Steps Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How It Works — Your Whitening Journey
              </h2>
            </div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#63316b] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
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
                Whitening FAQs
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Once you brighten your smile, everything changes
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Confidence, presence, self-image — it all starts with a brighter smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Book My Free Consultation</span>
              </button>
              <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#63316b] transition-all duration-300 inline-flex items-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      
      {/* Standardized Floating CTA Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Ready to brighten your smile?
          </p>
          <p className="text-xs text-gray-600">
            Chat with us about professional teeth whitening options.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeethWhitening;
