import { useState } from 'react';
import { Phone, Mail, Calendar, Play, ChevronDown, ChevronUp, MessageCircle, Smile, Apple, MessageSquare, Gem, Bone, Stethoscope, PoundSterling, CalendarDays, CreditCard, Percent, FileText, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FullArchImplants = () => {
  const [activeTab, setActiveTab] = useState('all-on-6');
  
  const benefits = [
    { icon: Smile, title: 'Regain confidence to smile again' },
    { icon: Apple, title: 'Eat your favourite food without struggle' },
    { icon: MessageSquare, title: 'No more loose dentures or adhesives' },
    { icon: Gem, title: 'Natural look and feel' },
    { icon: Bone, title: 'Restore facial shape & structure' },
    { icon: Stethoscope, title: 'Digital workflow = better outcomes' },
    { icon: PoundSterling, title: 'Starting from £2,650 per implant' },
    { icon: CalendarDays, title: '0% finance available with Chrysalis' }
  ];

  const implantTypes = [
    {
      id: 'full-arch',
      title: 'Full Arch Implants',
      description: 'Ideal for those missing all teeth, with loose dentures or failing bridges.'
    },
    {
      id: 'all-on-6',
      title: 'All-On-6 Dental Implants',
      description: '6 titanium implants with 12 zirconia teeth per arch. More stability and strength.'
    },
    {
      id: 'all-on-4',
      title: 'All-On-4 Dental Implants',
      description: '4 titanium implants with 10 zirconia teeth per arch. Less invasive. Great for reduced bone density.'
    }
  ];

  const faqs = [
    {
      question: "What is all-on-6 dental implants?",
      answer: "All-on-6 dental implants use 6 titanium implants to support a full arch of 12 zirconia teeth. This approach provides maximum stability and strength, making it ideal for patients who want the most secure and durable solution for full mouth restoration."
    },
    {
      question: "What is all-on-4 dental implants?",
      answer: "All-on-4 dental implants use 4 strategically placed titanium implants to support a full arch of 10 zirconia teeth. This less invasive approach is particularly suitable for patients with reduced bone density and offers excellent stability while requiring fewer implants."
    },
    {
      question: "What are the benefits of having dental implants?",
      answer: "Dental implants offer numerous benefits including restored chewing ability, improved speech, enhanced appearance, prevention of bone loss, elimination of loose dentures, and the confidence that comes with a permanent, natural-looking solution."
    },
    {
      question: "Am I suitable for dental implants?",
      answer: "Most people in good general health with adequate bone structure are suitable candidates for dental implants. We'll assess your individual case during a comprehensive consultation, including X-rays and examination of your oral health."
    },
    {
      question: "I'm nervous about dental treatments – what are my options?",
      answer: "We understand dental anxiety is common. We offer various sedation options including conscious sedation to help you feel relaxed and comfortable throughout your treatment. Our experienced team will discuss all options with you."
    },
    {
      question: "Why would I need a dental implant?",
      answer: "Dental implants are recommended when you have missing teeth, loose dentures, or failing dental work. They provide the most natural and permanent solution for tooth replacement, helping restore your smile, confidence, and quality of life."
    },
    {
      question: "What does it cost?",
      answer: "Full Arch Implants start from £12,500 per arch, with individual implants from £2,650. We provide transparent pricing and detailed treatment plans during your consultation, so you'll know exactly what to expect."
    },
    {
      question: "What if I can't afford dental implants?",
      answer: "We offer 0.0% APR finance for up to 12 months, with longer payment options available through Chrysalis Finance. We believe everyone deserves access to quality dental care and will work with you to find a payment plan that fits your budget."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#63316b]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Restore Your Smile with{' '}
                  <span className="text-[#63316b]">Full Arch Implants</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  A long-lasting and immovable remedy for individuals with extensive tooth loss.
                </p>
                
                <div className="bg-[#63316b]/10 border border-[#63316b]/20 rounded-lg p-6">
                  <p className="text-2xl font-semibold text-[#63316b] mb-2">
                    Full Arch Implants from just £8 per day
                  </p>
                  <p className="text-gray-600">
                    Talk to a consultant during regular clinic hours.
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center space-x-3 bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 group">
                  <Phone className="w-5 h-5" />
                  <span>Call 024 7631 2256</span>
                </button>
                
                <button className="inline-flex items-center space-x-3 border-2 border-[#63316b] text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-[#63316b] hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span>Request a Callback</span>
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=600&fit=crop" 
                  alt="Smiling patient with dental implants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Patient Smiles Transformed
            </h2>
            <p className="text-xl text-gray-600">
              See the incredible results our patients have achieved
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-158861761${item}-4486d14f3f99?w=300&h=200&fit=crop`} 
                      alt="Before treatment"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-160681197161${item}?w=300&h=200&fit=crop`} 
                      alt="After treatment"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What are Full Arch Implants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop" 
                alt="Dental implant explanation"
                className="w-full rounded-2xl shadow-lg"
              />
              
              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#63316b] rounded-full flex items-center justify-center hover:bg-[#63316b]/90 transition-all duration-300 group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What is a Dental Implant?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                A dental implant is an artificial root made from titanium that replaces the root of a missing tooth. It bonds with your jawbone over time, creating a strong foundation for a new tooth or bridge.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Full arch implants use multiple strategically placed implants to support an entire arch of replacement teeth, providing a permanent and natural-looking solution for extensive tooth loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Implant Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Which Treatment Fits You Best?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {implantTypes.map((type, index) => (
              <div key={type.id} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#63316b]/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-[#63316b]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#63316b]">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 text-[#63316b] font-semibold hover:text-[#63316b]/80 transition-colors">
                    <span>Learn More</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Us for Implants
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-[#63316b] mx-auto" />
                </div>
                <p className="text-gray-900 font-medium">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability CTA */}
      <section className="py-20 bg-[#63316b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Am I Suitable for This Treatment?
            </h2>
            
            <p className="text-xl opacity-90">
              Most people in good health are great candidates. Come in for your FREE consultation — let's build your personalised treatment plan.
            </p>
            
            <button className="inline-flex items-center space-x-3 bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
              <Calendar className="w-5 h-5" />
              <span>Book My Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dental Implants: What You Need to Know
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#63316b] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Concerned About Costs? We've Got You Covered.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <Percent className="w-8 h-8 text-[#63316b] mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">0.0% APR Finance</h3>
              <p className="text-gray-600 text-sm">for up to 12 months*</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <CalendarDays className="w-8 h-8 text-[#63316b] mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Longer Options</h3>
              <p className="text-gray-600 text-sm">available via Chrysalis Finance</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <Gem className="w-8 h-8 text-[#63316b] mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">& premium quality</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <PoundSterling className="w-8 h-8 text-[#63316b] mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Full Arch starts</h3>
              <p className="text-gray-600 text-sm">from £12,500 per arch</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300">
              <span>Learn More About Financing</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Got questions about Full Arch Implants?
          </p>
          <p className="text-xs text-gray-600">
            Tap to Chat or Call. Our team is ready to help.
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default FullArchImplants;
