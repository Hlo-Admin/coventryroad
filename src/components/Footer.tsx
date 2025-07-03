
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Coventry Road</h3>
                <span className="text-sm text-blue-400 font-medium">Dentalcare</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional dental care to Birmingham and surrounding areas since 2008. Your smile is our priority.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-4">
              <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="block text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About Us</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Appointments</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Emergency Care</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">General Dentistry</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Cosmetic Dentistry</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Orthodontics</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Teeth Whitening</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Dental Implants</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Root Canal</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Coventry Road</p>
                  <p>Birmingham B26 3EA</p>
                  <p>United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">024 7699 2020</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@coventryroaddentalcare.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Opening Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Coventry Road Dentalcare. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
