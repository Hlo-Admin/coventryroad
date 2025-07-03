import { Users, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '2500+', label: 'Happy Patients' },
    { number: '12+', label: 'Awards Won' },
    { number: '98%', label: 'Success Rate' }
  ];

  const features = [
    {
      title: 'Modern Technology',
      description: 'We utilize the latest dental technology for accurate diagnoses and effective treatments.'
    },
    {
      title: 'Experienced Team',
      description: 'Our team of skilled dentists and specialists are dedicated to providing exceptional care.'
    },
    {
      title: 'Comfortable Environment',
      description: 'Relax in our modern and comfortable clinic designed to make your visit stress-free.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'General Dentist',
      description: 'Dr. Johnson is a highly skilled general dentist with over 10 years of experience. She is passionate about providing comprehensive care to her patients.'
    },
    {
      name: 'Dr. Michael Lee',
      role: 'Cosmetic Dentist',
      description: 'Dr. Lee is a renowned cosmetic dentist specializing in smile makeovers and aesthetic dentistry. He is committed to creating beautiful, natural-looking smiles.'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Orthodontist',
      description: 'Dr. Chen is a board-certified orthodontist with expertise in Invisalign and traditional braces. She is dedicated to helping patients achieve straight, healthy smiles.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#63316b]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#63316b]/10 text-[#63316b] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>About Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Excellence in Dental Care
            <span className="block text-[#63316b]">Since 2008</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            At Coventry Road Dentalcare, we combine cutting-edge technology with compassionate care to deliver exceptional dental experiences for every patient.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#63316b] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Smile, Our Passion
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over 15 years, we've been Birmingham's trusted destination for comprehensive dental care. Our commitment to excellence and patient comfort has made us a leading practice in the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that everyone deserves a healthy, beautiful smile. That's why we offer a full range of services from preventive care to complex restorative treatments, all delivered with the highest standards of quality and care.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#63316b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#63316b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#63316b]/90 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#63316b] rounded-2xl flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 bg-[#63316b]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#63316b]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-[#63316b] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
