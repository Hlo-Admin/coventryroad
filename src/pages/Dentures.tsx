
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dentures = () => {
  const serviceData = {
    title: "Dentures",
    subtitle: "Comfortable, natural-looking removable teeth replacement solutions",
    description: "Modern dentures have come a long way from the uncomfortable, artificial-looking teeth of the past. Our custom-crafted dentures are designed using advanced materials and techniques to provide optimal comfort, natural appearance, and improved function. Whether you need partial or complete dentures, we create personalized solutions that restore your ability to eat, speak, and smile with confidence while maintaining the natural contours of your face.",
    benefits: [
      "Restored ability to eat a variety of foods comfortably",
      "Improved speech and pronunciation",
      "Enhanced facial support and youthful appearance",
      "Cost-effective tooth replacement option",
      "Immediate restoration of your smile",
      "Custom-fit for maximum comfort and stability"
    ],
    process: [
      "Comprehensive oral examination and treatment planning",
      "Impressions and measurements of your mouth",
      "Wax try-in to test fit, appearance, and bite",
      "Custom fabrication of your dentures",
      "Final fitting and adjustment for optimal comfort",
      "Follow-up appointments for fine-tuning and care instructions"
    ],
    faq: [
      {
        question: "How long do dentures last?",
        answer: "Well-maintained dentures typically last 5-10 years. Over time, your mouth changes shape, so periodic adjustments and eventual replacement are normal."
      },
      {
        question: "Will dentures affect my eating?",
        answer: "There's an adjustment period, but most patients can eat comfortably with dentures. We'll provide guidance on foods to try first and eating techniques."
      },
      {
        question: "How do I care for my dentures?",
        answer: "Daily cleaning with denture cleanser, soaking overnight, and regular dental checkups are essential. Handle them carefully as they can break if dropped."
      },
      {
        question: "Can I sleep with my dentures in?",
        answer: "It's generally recommended to remove dentures at night to give your gums a rest and prevent bacterial buildup. Soak them in denture solution overnight."
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

export default Dentures;
