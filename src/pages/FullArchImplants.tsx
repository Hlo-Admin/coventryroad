
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FullArchImplants = () => {
  const serviceData = {
    title: "Full Arch Implants",
    subtitle: "Complete smile restoration with permanent, natural-looking teeth in just one day",
    description: "Full arch implants represent the pinnacle of modern dental restoration technology. This revolutionary treatment allows us to replace an entire arch of missing or damaged teeth with a permanent, natural-looking solution that functions just like your original teeth. Using advanced implant technology, we can often complete your transformation in a single visit, giving you back your confidence and quality of life immediately.",
    benefits: [
      "Permanent solution that lasts a lifetime with proper care",
      "Natural appearance and function - eat, speak, and smile with confidence",
      "Often completed in a single day with immediate results",
      "Preserves jawbone structure and facial support",
      "No daily removal or maintenance like traditional dentures",
      "Improved oral health and easier cleaning routine"
    ],
    process: [
      "Comprehensive consultation and 3D imaging to plan your treatment",
      "Surgical placement of titanium implants into the jawbone",
      "Immediate attachment of temporary teeth (same day procedure)",
      "Healing period of 3-6 months while implants integrate with bone",
      "Final impressions and custom fabrication of permanent teeth",
      "Placement of final restoration and bite adjustment"
    ],
    faq: [
      {
        question: "How long do full arch implants last?",
        answer: "With proper care and regular dental visits, full arch implants can last a lifetime. The titanium implants integrate permanently with your jawbone, while the crown portion may need replacement after 15-20 years due to normal wear."
      },
      {
        question: "Am I a candidate for full arch implants?",
        answer: "Most patients with missing or severely damaged teeth are candidates. We'll evaluate your bone density, overall health, and specific needs during your consultation to determine if this treatment is right for you."
      },
      {
        question: "What is the recovery process like?",
        answer: "Most patients experience minimal discomfort and can return to normal activities within a few days. You'll have temporary teeth immediately, so you won't be without teeth during healing."
      },
      {
        question: "How do I care for my full arch implants?",
        answer: "Care is similar to natural teeth - regular brushing, flossing, and dental checkups. We'll provide specific instructions and tools to help you maintain your new smile."
      }
    ]
  };

  return (
    <>
      <Header />
      <ServiceTemplate {...serviceData} />
      <Footer />
    </>
  );
};

export default FullArchImplants;
