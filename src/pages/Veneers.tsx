
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Veneers = () => {
  const serviceData = {
    title: "Veneers",
    subtitle: "Transform your smile with ultra-thin, custom-crafted porcelain shells",
    description: "Porcelain veneers are ultra-thin, custom-made shells that are bonded to the front surface of your teeth to create a perfect smile. These virtually undetectable restorations can correct a wide range of cosmetic issues including discoloration, chips, gaps, and misalignment. Each veneer is individually crafted to match your facial features and desired smile, providing you with natural-looking results that can last for decades with proper care.",
    benefits: [
      "Natural appearance that mimics real tooth enamel",
      "Durable and long-lasting - can last 15-20 years",
      "Stain-resistant and color-stable",
      "Minimally invasive procedure preserving tooth structure",
      "Immediate transformation of your entire smile",
      "Custom-designed to complement your facial features"
    ],
    process: [
      "Comprehensive smile design consultation and treatment planning",
      "Digital impressions and photographs of your current smile",
      "Minimal tooth preparation and temporary veneer placement",
      "Custom fabrication of your porcelain veneers in our lab",
      "Try-in appointment to ensure perfect fit and appearance",
      "Final bonding and polishing for your new smile"
    ],
    faq: [
      {
        question: "How long do porcelain veneers last?",
        answer: "With proper care, porcelain veneers typically last 15-20 years. They're highly durable and resistant to chipping when you avoid biting hard objects."
      },
      {
        question: "Do veneers require special care?",
        answer: "Veneers require the same care as natural teeth - regular brushing, flossing, and dental checkups. Avoid biting hard objects and consider a night guard if you grind your teeth."
      },
      {
        question: "Are veneers reversible?",
        answer: "Veneers involve minimal tooth preparation, so while the process involves some permanent changes, the amount of tooth structure removed is very conservative."
      },
      {
        question: "How many veneers do I need?",
        answer: "The number varies based on your smile goals. Some patients get 2-4 veneers for specific concerns, while others choose 6-10 veneers for a complete smile makeover."
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

export default Veneers;
