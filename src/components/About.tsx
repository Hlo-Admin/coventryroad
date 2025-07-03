
import { Users, CheckCircle, Award, Heart, Shield, Star, MapPin, Phone } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '1000+', label: 'Happy Patients' },
    { number: '12', label: 'Modern Surgeries' },
    { number: '98%', label: 'Success Rate' }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Human-first approach',
      description: 'From kids to grandparents, nervous patients to routine checkups — you\'ll always feel seen, heard, and cared for.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Transparent, tailored care',
      description: 'We offer treatment options that suit your goals and your budget — nothing more, nothing less.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'NHS & Private Flexibility',
      description: 'We combine essential NHS treatments with premium private options — for care that fits your lifestyle.'
    }
  ];

  const team = [
    {
      name: 'Dr. Anoop Deol',
      role: 'General & Cosmetic Dentistry',
      description: 'Leading our practice with expertise in comprehensive dental care and aesthetic treatments.'
    },
    {
      name: 'Dr. Kalveen Manak',
      role: 'Implants & Smile Design',
      description: 'Specialist in dental implants and creating beautiful, functional smiles for our patients.'
    },
    {
      name: 'Dr. Satbir Birdi',
      role: 'Family Dentistry & Prevention',
      description: 'Dedicated to preventive care and making dental visits comfortable for the whole family.'
    }
  ];

  const patientLoves = [
    'Family-friendly and welcoming',
    'Gentle with nervous patients',
    'Full treatment range under one roof',
    'Transparent pricing, honest advice',
    'Flexible NHS & private plans',
    'Advanced smile care (implants, Invisalign, veneers & more)'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#63316b]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 glass bg-[#63316b]/10 backdrop-blur-sm text-[#63316b] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-[#63316b]/20">
            <Users className="w-4 h-4" />
            <span>About Coventry Road Dental Care</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Where Expertise Meets Empathy.
            <span className="block text-[#63316b]">And Every Smile Matters.</span>
          </h2>
          
          <div className="glass bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-[#63316b] mb-4">🦷 Our Philosophy</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <strong>Your smile is our passion.</strong>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're more than a dental clinic — we're a people-first practice, rooted in care, guided by excellence, and driven by a simple goal: helping you smile with confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              For over 25 years, we've transformed thousands of lives through gentle, reliable dentistry — delivered with honesty, precision, and heart.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl lg:text-5xl font-bold text-[#63316b] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">👨‍⚕️ What Makes Us Different?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/60 transition-all duration-300">
                <div className="w-12 h-12 bg-[#63316b] rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Excellence Recognition */}
        <div className="glass bg-gradient-to-r from-[#63316b]/10 to-[#63316b]/5 backdrop-blur-sm rounded-3xl p-8 mb-20 border border-[#63316b]/20">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-[#63316b]" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">🏆 Excellence Recognised</h3>
          <h4 className="text-xl font-semibold text-[#63316b] text-center mb-4">British Dental Association – Good Practice Certified</h4>
          <p className="text-gray-700 text-center leading-relaxed mb-4">
            We're proud recipients of the BDA Good Practice Award — a mark of quality assurance, trust, and commitment to the highest standards of dental care.
          </p>
          <blockquote className="text-lg font-medium text-[#63316b] text-center italic">
            "This recognition is more than a badge — it reflects our dedication to delivering safe, legal, and ethical care, every single day."
          </blockquote>
        </div>

        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">🌱 Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                  <span className="text-lg text-gray-700">To create healthy, confident smiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                  <span className="text-lg text-gray-700">To provide dental care that feels personal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                  <span className="text-lg text-gray-700">To make Coventry feel at home in our clinic</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Whether you need a routine check-up, a smile makeover, or help overcoming dental anxiety — our friendly, experienced team is ready to guide you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">👩‍⚕️ Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {team.map((member, index) => (
              <div key={index} className="glass bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#63316b] to-[#63316b]/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h4>
                <p className="text-[#63316b] font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 leading-relaxed">
            Our entire team of dentists, hygienists, and coordinators work with one mission — to put your smile and comfort first.
          </p>
        </div>

        {/* What Patients Love */}
        <div className="glass bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-20 border border-white/30">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">💬 What Our Patients Love</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {patientLoves.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#63316b] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">🙋 Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="font-bold text-gray-900 mb-3">Do you offer new patient appointments?</h4>
              <p className="text-gray-600">Yes! We welcome new patients with a 20-minute comprehensive consultation. Call us at 02476 312256 to book.</p>
            </div>
            <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="font-bold text-gray-900 mb-3">Can you help if I'm anxious about visiting?</h4>
              <p className="text-gray-600">Absolutely. We're experienced in supporting nervous patients with empathy, calming communication, and gentle care. Your comfort is always our priority.</p>
            </div>
            <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="font-bold text-gray-900 mb-3">What treatments do you offer?</h4>
              <p className="text-gray-600">From general and preventive care to complex cosmetic and implant dentistry — we offer a full spectrum of dental treatments.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center glass bg-gradient-to-r from-[#63316b] to-[#63316b]/90 backdrop-blur-sm rounded-3xl p-12 text-white border border-[#63316b]/30">
          <h3 className="text-3xl font-bold mb-4">📞 Ready to Join a Dental Family That Cares?</h3>
          <p className="text-xl mb-8 opacity-90">
            Whether it's your first visit or your 50th, we're here to make every experience warm, professional, and personalised.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#63316b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Book Your Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#63316b] transition-all duration-300">
              Request a Callback
            </button>
          </div>
          <p className="mt-6 flex items-center justify-center space-x-2 opacity-90">
            <MapPin className="w-5 h-5" />
            <span>Coventry Road Dental Care – Your smile starts here.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
