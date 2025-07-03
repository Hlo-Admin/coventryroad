
import { MapPin, Phone, Mail, Clock, Send, Star, CheckCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: ["123 Coventry Road", "Birmingham B26 3EA", "United Kingdom"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us Today",
      details: ["024 7699 2020", "Emergency: 024 7699 2021"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@coventryroaddentalcare.com", "appointments@crdental.co.uk"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Only"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    "Free consultation for new patients",
    "Same-day emergency appointments",
    "Flexible payment plans available",
    "Insurance claims processed directly"
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Start Your Journey to a
            <span className="block text-gradient">Perfect Smile</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to experience exceptional dental care? Contact our friendly team today to schedule your consultation and take the first step towards optimal oral health.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-indigo-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-indigo-600" />
                <span>Why Choose Us?</span>
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center group hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <p className="font-semibold text-gray-700 mb-1">Interactive Map</p>
                <p className="text-sm text-gray-600">123 Coventry Road, Birmingham</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Book Your Free Consultation</h3>
                  <p className="text-indigo-100 text-lg">Fill out the form below and we'll contact you within 24 hours to schedule your appointment.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-indigo-100">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-indigo-100">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-indigo-100">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-indigo-100">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200 transition-all duration-300"
                        placeholder="024 7699 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-100">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white transition-all duration-300">
                      <option value="" className="text-gray-900">Select a service...</option>
                      <option value="consultation" className="text-gray-900">General Consultation</option>
                      <option value="cleaning" className="text-gray-900">Professional Cleaning</option>
                      <option value="cosmetic" className="text-gray-900">Cosmetic Treatment</option>
                      <option value="orthodontics" className="text-gray-900">Orthodontics</option>
                      <option value="emergency" className="text-gray-900">Emergency Care</option>
                      <option value="other" className="text-gray-900">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-100">Preferred Appointment Time</label>
                    <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white transition-all duration-300">
                      <option value="" className="text-gray-900">Select preferred time...</option>
                      <option value="morning" className="text-gray-900">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="afternoon" className="text-gray-900">Afternoon (12:00 PM - 5:00 PM)</option>
                      <option value="evening" className="text-gray-900">Evening (5:00 PM - 7:00 PM)</option>
                      <option value="weekend" className="text-gray-900">Weekend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-indigo-100">Additional Notes</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200 resize-none transition-all duration-300"
                      placeholder="Tell us about your dental needs, concerns, or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg hover:-translate-y-1 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message & Book Consultation</span>
                  </button>

                  <p className="text-center text-sm text-indigo-200">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
