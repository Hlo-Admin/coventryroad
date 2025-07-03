
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
    "Contact Us"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#63316b] via-[#63316b]/95 to-[#63316b]/90 text-white overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 glass bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 glass bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass bg-white/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <img 
                  src="/lovable-uploads/a149de9b-ffc7-4ccb-89c6-45a712d8505a.png" 
                  alt="Coventry Road Dentalcare" 
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Coventry Road</h3>
                <span className="text-sm text-white/80 font-medium">Dentalcare</span>
              </div>
            </Link>
            
            <p className="text-white/80 leading-relaxed">
              Providing exceptional dental care to Coventry and surrounding areas since 2008. Your smile is our priority, and your health is our commitment.
            </p>
            
            {/* Awards & Recognition */}
            <div className="flex items-center space-x-2 text-sm glass bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white/90">Award-Winning Dental Practice</span>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group border border-white/20">
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
                  className="block text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
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
                  className="block text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
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
                <div className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">Visit Our Clinic</p>
                  <p className="text-sm leading-relaxed">94 Coventry Rd<br />Bedworth, Coventry<br />CV12 8NW<br />United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">Call Us Today</p>
                  <p className="text-sm">024 7699 2020</p>
                  <p className="text-xs text-white/60">Emergency: 024 7699 2021</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 glass bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/80">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <p className="text-sm">info@coventryroaddentalcare.com</p>
                </div>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="mt-8 glass bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <h5 className="font-medium text-white mb-3">Opening Hours</h5>
              <div className="text-sm text-white/80 space-y-1">
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
                  <span className="text-white">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>© 2024 Coventry Road Dentalcare. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>Made with care in Coventry</span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
