import {
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle,
  Sparkles,
  Smile,
  Shield,
  DollarSign,
  Syringe,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceTiles from "../components/ServiceTiles";
import FloatingBubble from "../components/FloatingBubble";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CompositeBonding = () => {
  useEffect(() => {
    document.title =
      "Composite Bonding - Natural Tooth Restoration | Coventry Road Dental Care";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#63316b]" />,
      title: "Natural-looking results",
      description: "Seamlessly blends with your existing teeth",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#63316b]" />,
      title: "Quick and painless",
      description: "Usually completed in a single visit",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#63316b]" />,
      title: "Fixes multiple issues",
      description: "Chips, cracks, gaps, and discoloration",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#63316b]" />,
      title: "Preserves tooth structure",
      description: "Minimally invasive treatment approach",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#63316b]" />,
      title: "Cost-effective solution",
      description: "Affordable alternative to veneers",
    },
    {
      icon: <Syringe className="w-6 h-6 text-[#63316b]" />,
      title: "No anesthesia needed",
      description: "Comfortable treatment experience",
    },
  ];

  const faqs = [
    {
      question: "Why would I want composite bonding?",
      answer:
        "Composite bonding is usually used when a patient has fractured their tooth or chipped the edges of their teeth. It's also ideal if you dislike the gaps between your teeth or want to fix discolouration. If you are self-conscious about the way your teeth look or want a more cosmetic appearance, composite bonding is a great option.",
    },
    {
      question: "What are the advantages of composite bonding?",
      answer:
        "Composite bonding is a non-invasive treatment that can be reversed. It's also more cost effective than other cosmetic treatments, such as veneers or crowns. Achieving your desired look will give you the confidence to smile again without feeling self-conscious. Composite bonding starts from as little as £250 per tooth, and we offer a FREE consultation with our treatment coordinator to discuss your personalised treatment plan.",
    },
    {
      question: "Is composite bonding right for me?",
      answer:
        "Composite bonding is ideal for minor cosmetic improvements like small chips, gaps, or discoloration. Book a consultation to see if it's the right solution for your needs.",
    },
    {
      question: "How long does composite bonding last?",
      answer:
        "With proper care, composite bonding can last 3-10 years. Regular dental check-ups and good oral hygiene will help extend its lifespan.",
    },
    {
      question: "Does composite bonding require special care?",
      answer:
        "Maintain good oral hygiene and avoid biting hard objects. The bonded teeth can be cared for just like your natural teeth with regular brushing and flossing.",
    },
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
                <span className="text-[#63316b]">Composite Bonding</span> in
                Coventry
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                Fix chips, cracks, gaps and discoloration with our tooth-colored
                composite resin treatment.
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
                    Composite bonding is a very simple cosmetic procedure which
                    is completely pain free. During treatment a white resin
                    material will be placed onto the area required and moulded
                    into the desired shape. The resin with then be set with a
                    curing light and finally the tooth polished.
                  </p>
                  <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Request a Callback</span>
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="/services/CompositeBonding/composite-bonding.jpeg"
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
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Easy Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
              It's As Easy As <span className="text-[#63316b]">1 2 3</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  FREE Consultation
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A relaxed chat with our treatment coordinator who will discuss
                  your personalised treatment plan with you and answer any
                  questions you may have.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  Teeth Whitening
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A three-week optional teeth whitening journey to give your
                  teeth that extra boost of brightness to achieve your dream
                  smile.
                  <br />
                  <br />A 3D iTero Scan is done to make your bespoke whitening
                  trays, this can also be done at your consultation appointment.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center bg-[#63316b]/5 border border-[#63316b]/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xl w-full mx-auto">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63316b] text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#63316b] mb-2 text-center">
                  All Go Go Go with your new smile
                </h3>
                <p className="text-gray-700 text-center text-base">
                  A pain free experience with no hassle and no injections! Just
                  a beautiful dream smile achieved in as little as one
                  appointment. This appointment is where the composite bonding
                  will take place.
                </p>
              </div>
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
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border"
                >
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#63316b]/5 rounded-2xl p-8 border border-[#63316b]/10 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#63316b]">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-lg mb-6 text-gray-700 opacity-90">
                Book your free consultation today and discover how composite
                bonding can enhance your smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
                <Link
                  to="/"
                  className="border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
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
