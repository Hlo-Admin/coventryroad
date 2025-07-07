import { useState } from "react";
import {
  Phone,
  Mail,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
  Eye,
  Utensils,
  Clock,
  Smile,
  Shield,
  User,
  CheckCircle,
  Users,
  Heart,
  Star,
  MessageCircle,
  DollarSign,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceTiles from "../components/ServiceTiles";

const InvisalignBraces = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const journeySteps = [
    {
      image: "/lovable-uploads/299453f5-63b1-4193-8164-955b3504b4b8.png",
      caption: "Detailed Digital Scan",
      description:
        "Advanced 3D scanning technology captures every detail of your teeth alignment",
    },
    {
      image: "/lovable-uploads/9ca20df0-a984-4c24-bec5-dfa24a26b9ff.png",
      caption: "Custom Clear Aligners",
      description:
        "Your personalised Invisalign aligners are precisely crafted for your treatment",
    },
  ];

  const benefits = [
    { icon: Smile, title: "Straighten your teeth discreetly" },
    { icon: Star, title: "Achieve a beautiful straight smile" },
    {
      icon: Eye,
      title: "Clear aligners are virtually invisible and comfortable",
    },
    {
      icon: Utensils,
      title: "Your Invisalign aligners can be removed for eating and brushing",
    },
    {
      icon: CheckCircle,
      title:
        "Brace treatment transforms crowded, twisted, crossed and protruding teeth",
    },
    {
      icon: DollarSign,
      title: "Great value systems that are convenient and safe",
    },
    { icon: Users, title: "Experienced and passionate dentists" },
  ];

  const conditions = [
    { icon: CheckCircle, title: "Crowded Teeth" },
    { icon: CheckCircle, title: "Twisted or Rotated Teeth" },
    { icon: CheckCircle, title: "Crossbite" },
    { icon: CheckCircle, title: "Overbite or Underbite" },
    { icon: CheckCircle, title: "Gapped Teeth" },
    { icon: CheckCircle, title: "Protruding Front Teeth" },
  ];

  const whyChooseUs = [
    { icon: Calendar, title: "FREE consultations, no pressure" },
    { icon: Users, title: "Invisalign-trained, passionate team" },
    { icon: Smile, title: "Focused on discreet and confident transformation" },
    { icon: DollarSign, title: "Great value, flexible finance options" },
    { icon: MapPin, title: "Local care with a personal touch" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journeySteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + journeySteps.length) % journeySteps.length
    );
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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Align your Smile with{" "}
            <span className="text-[#63316b]">Invisalign Braces</span> in
            Coventry
          </h1>
          <p
            className="text-2xl text-gray-600 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Discreet, removable, and virtually invisible aligners for a
            confident smile — without the metal.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                Straighten Your Smile with{" "}
                <span className="text-[#63316b]">No Brackets or Wires</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Misaligned teeth can affect your confidence, and traditional
                braces aren't for everyone. At Coventry Road Dentalcare, we
                offer Invisalign – the clear solution to straighter teeth for
                adults and teens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Using advanced 3D imaging, we can show you your final smile even
                before your treatment begins.
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                      <button
                        onClick={handleVideoPlay}
                        className="w-20 h-20 bg-[#63316b] rounded-full flex items-center justify-center hover:bg-[#63316b]/90 transition-all duration-300 group shadow-lg"
                      >
                        <Play
                          className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                        />
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

      {/* Journey Carousel (now Benefits of Invisalign) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Static Image only */}
            <div className="flex justify-center items-center order-1 lg:order-none">
              <img
                src={journeySteps[0].image}
                alt={journeySteps[0].caption}
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Right: Text only */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                The <span className="text-[#63316b]">Benefits</span> of
                Invisalign
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Invisalign treatment is a virtually invisible way to straighten
                your teeth. Using advanced 3D computer-imaging technology,
                Invisalign shows you your transformed smile from start to finish
                before you even start the treatment! With your approval a series
                of clear aligners are then custom-made for your teeth to move
                them little by little.
                <br />
                <br />
                Each aligner is worn for around two weeks before being replaced
                by the next in the series, gradually moving towards the desired
                final position. The treatment time depends on how complex your
                case is but your Invisalign provider will give you an estimated
                timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Why Choose <span className="text-[#63316b]">Invisalign?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              // Center the last card if it's alone in the last row (not a multiple of 3)
              const isLast = index === benefits.length - 1;
              const needsCenter = benefits.length % 3 !== 0 && isLast;
              return (
                <div
                  key={index}
                  className={
                    `bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:bg-[#63316b] hover:text-white` +
                    (needsCenter
                      ? " lg:col-span-3 flex flex-col items-center justify-center"
                      : "")
                  }
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-[#63316b] group-hover:text-white mx-auto" />
                  </div>
                  <p className="font-medium group-hover:text-white">
                    {benefit.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Is <span className="text-[#63316b]">Invisalign</span> Right for
              You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <condition.icon className="w-6 h-6 text-[#63316b]" />
                </div>
                <p className="font-medium text-gray-900">{condition.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Our dentists will recommend the best clear system for your case —
              safe, affordable, and discreet.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#63316b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Straight Teeth May Be a{" "}
            <span className="text-white underline">Phone Call Away</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help you smile again — book your free consultation
            today.
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
