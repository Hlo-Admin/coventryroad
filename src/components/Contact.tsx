
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Coventry Road", "Birmingham B26 3EA", "United Kingdom"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["024 7699 2020", "Emergency: 024 7699 2021"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@coventryroaddentalcare.com", "appointments@crdental.co.uk"]
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Emergency Only"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Today</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your journey to better oral health? Contact our friendly team to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Coventry Road, Birmingham</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
              <p className="text-blue-100">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200"
                  placeholder="024 7699 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white">
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="checkup" className="text-gray-900">General Check-up</option>
                  <option value="cleaning" className="text-gray-900">Teeth Cleaning</option>
                  <option value="cosmetic" className="text-gray-900">Cosmetic Treatment</option>
                  <option value="emergency" className="text-gray-900">Emergency Care</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200 resize-none"
                  placeholder="Tell us about your dental needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 hover:scale-105 transform duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
