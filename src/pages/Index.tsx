
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      
      {/* Floating CTA Bubble - Consistent across all pages */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#63316b] text-white p-4 rounded-full shadow-lg hover:bg-[#63316b]/90 transition-all duration-300 group">
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Ready to transform your smile?
          </p>
          <p className="text-xs text-gray-600">
            Chat with our dental experts today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
