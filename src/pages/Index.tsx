
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingBubble from '../components/FloatingBubble';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <FloatingBubble />
    </div>
  );
};

export default Index;
