
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompositeBonding = () => {
  const serviceData = {
    title: "Composite Bonding",
    subtitle: "Transform your smile with natural-looking tooth-colored resin in a single visit",
    description: "Composite bonding is a versatile and affordable cosmetic dental treatment that can dramatically improve the appearance of your teeth. Using advanced tooth-colored composite resin, we can repair chips, close gaps, reshape teeth, and create a more uniform smile. This minimally invasive procedure typically requires no anesthesia and can be completed in just one appointment, making it an ideal choice for patients seeking immediate results.",
    benefits: [
      "Immediate results in just one appointment",
      "No anesthesia typically required - completely painless",
      "Preserves natural tooth structure with minimal preparation",
      "Cost-effective alternative to veneers or crowns",
      "Natural appearance that matches your existing teeth",
      "Easily repairable if damaged over time"
    ],
    process: [
      "Consultation to assess your teeth and discuss desired outcomes",
      "Color matching to ensure perfect blend with natural teeth",
      "Gentle tooth surface preparation (no drilling required)",
      "Application of bonding agent and composite resin in layers",
      "Sculpting and shaping to achieve desired tooth form",
      "Final polishing for a natural, glossy finish"
    ],
    faq: [
      {
        question: "How long does composite bonding last?",
        answer: "Composite bonding typically lasts 5-10 years with proper care. The longevity depends on your oral habits, diet, and maintenance routine."
      },
      {
        question: "Is composite bonding painful?",
        answer: "No, composite bonding is generally painless and rarely requires anesthesia. Most patients find the procedure very comfortable."
      },
      {
        question: "Can composite bonding stain?",
        answer: "While composite resin is stain-resistant, it can discolor over time, especially with coffee, tea, wine, or smoking. Regular cleanings help maintain appearance."
      },
      {
        question: "How do I care for bonded teeth?",
        answer: "Care for bonded teeth just like natural teeth with regular brushing and flossing. Avoid biting hard objects and consider a night guard if you grind your teeth."
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

export default CompositeBonding;
