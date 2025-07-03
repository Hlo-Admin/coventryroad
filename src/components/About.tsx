
import { CheckCircle, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "2000+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const features = [
    "State-of-the-art equipment and technology",
    "Experienced and qualified dental professionals",
    "Comfortable and relaxing environment",
    "Flexible payment options and insurance accepted",
    "Emergency dental care available",
    "Family-friendly practice for all ages"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                <span>About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Dental Care Since
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> 2008</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At Coventry Road Dentalcare, we believe that everyone deserves a healthy, beautiful smile. Our team of experienced professionals is dedicated to providing exceptional dental care in a comfortable, modern environment.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Birmingham, we serve patients from across the West Midlands with comprehensive dental services ranging from routine cleanings to complex restorative procedures. Our commitment to excellence and patient satisfaction has made us one of the most trusted dental practices in the region.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop"
                  alt="Modern dental office"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=300&fit=crop"
                  alt="Dental equipment"
                  className="rounded-2xl shadow-lg w-full h-36 object-cover"
                />
              </div>
              
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop"
                  alt="Dental consultation"
                  className="rounded-2xl shadow-lg w-full h-36 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop"
                  alt="Happy patient"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -top-4 -left-4 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Best Dental Clinic</div>
                  <div className="text-sm text-gray-600">Birmingham 2023</div>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">15+ Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
