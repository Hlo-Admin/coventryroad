
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const treatments = [
    { name: 'Full Arch Implants', path: '/full-arch-implants' },
    { name: 'Composite Bonding', path: '/composite-bonding' },
    { name: 'Invisalign Braces', path: '/invisalign-braces' },
    { name: 'Teeth Whitening', path: '/teeth-whitening' },
    { name: 'Veneers', path: '/veneers' },
    { name: 'Dental Implants', path: '/dental-implants' },
    { name: 'Dentures', path: '/dentures' },
    { name: 'White Fillings', path: '/white-fillings' }
  ];

  const quickLinks = [
    "About Us",
    "Our Team",
    "Patient Reviews",
    "New Patients",
    "Payment Options",
    "Contact Us"
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#63316b]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#63316b] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Coventry Road</h3>
                <span className="text-sm text-gray-300 font-medium">Dentalcare</span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional dental care to Birmingham and surrounding areas since 2008. Your smile is our priority, and your health is our commitment.
            </p>
            
            {/* Awards & Recognition */}
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-gray-300">Award-Winning Dental Practice</span>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#63316b] transition-all duration-300 hover:scale-110 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#63316b] transition-all duration-300 hover:scale-110 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#63316b] transition-all duration-300 hover:scale-110 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#63316b] transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-400 hover:text-[#63316b] transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Our Treatments */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Our Treatments</h4>
            <div className="space-y-4">
              {treatments.map((treatment, index) => (
                <Link 
                  key={index}
                  to={treatment.path} 
                  className="block text-gray-400 hover:text-[#63316b] transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {treatment.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#63316b]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#63316b]" />
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Visit Our Clinic</p>
                  <p className="text-sm leading-relaxed">123 Coventry Road<br />Birmingham B26 3EA<br />United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Call Us Today</p>
                  <p className="text-sm">024 7699 2020</p>
                  <p className="text-xs text-gray-500">Emergency: 024 7699 2021</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#63316b]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#63316b]" />
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <p className="text-sm">info@coventryroaddentalcare.com</p>
                </div>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <h5 className="font-medium text-white mb-3">Opening Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#63316b]">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Coventry Road Dentalcare. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>Made with care in Birmingham</span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#63316b] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#63316b] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#63316b] transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#63316b] transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
