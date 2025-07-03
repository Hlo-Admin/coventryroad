
import { CheckCircle, Users, Award, Heart, Star, ArrowRight, Play } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "2000+", label: "Happy Patients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Emergency Care", icon: Heart }
  ];

  const features = [
    "State-of-the-art digital technology and equipment",
    "Board-certified dental professionals and specialists",
    "Comfortable, spa-like environment for relaxation",
    "Flexible financing and insurance options available",
    "Comprehensive emergency dental care services",
    "Family-friendly practice welcoming all ages"
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      speciality: "Cosmetic & General Dentistry"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      speciality: "Invisalign & Braces"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1594824881270-b89462677f7b?w=300&h=300&fit=crop&crop=face",
      speciality: "Implants & Surgery"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>About Our Practice</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Dental Care
                <span className="block text-gradient">Since 2008</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Coventry Road Dentalcare, we believe every patient deserves exceptional care in a comfortable, modern environment. Our team of experienced professionals combines cutting-edge technology with personalized attention to deliver outstanding results.
                </p>
                
                <p>
                  Located in the heart of Birmingham, we've been serving the West Midlands community with comprehensive dental services. Our commitment to excellence and patient satisfaction has earned us recognition as one of the region's premier dental practices.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <span>Meet Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center space-x-3 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-indigo-600 ml-0.5" />
                </div>
                <span>Virtual Tour</span>
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl animate-slideInRight">
                  <img
                    src="https://images.unsplash.com/photo-1629909613869-adb7a1b272fd?w=400&h=500&fit=crop"
                    alt="Modern dental office"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl animate-slideInRight" style={{animationDelay: '0.2s'}}>
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=300&fit=crop"
                    alt="Dental equipment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl animate-slideInRight" style={{animationDelay: '0.4s'}}>
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop"
                    alt="Dental consultation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl animate-slideInRight" style={{animationDelay: '0.6s'}}>
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=500&fit=crop"
                    alt="Happy patient"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 animate-scaleIn" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Best Dental Clinic</div>
                  <div className="text-sm text-gray-600">Birmingham 2023</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 animate-scaleIn" style={{animationDelay: '1.3s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">15+ Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our board-certified dental professionals bring years of experience and specialized training to provide you with the highest quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {member.role}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
