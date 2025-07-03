
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhiteFillings = () => {
  const serviceData = {
    title: "White Fillings",
    subtitle: "Natural-looking, mercury-free composite fillings that blend seamlessly with your teeth",
    description: "White fillings, also known as composite fillings, represent the modern standard for treating cavities and tooth damage. Made from a durable tooth-colored resin, these fillings bond directly to your tooth structure, providing excellent strength while maintaining a completely natural appearance. Unlike traditional silver amalgam fillings, white fillings contain no mercury and can be precisely matched to your tooth color, making them virtually invisible.",
    benefits: [
      "Natural appearance - perfectly matched to your tooth color",
      "Mercury-free and biocompatible materials",
      "Bonds directly to tooth structure for added strength",
      "Preserves more natural tooth structure than amalgam",
      "No expansion or contraction with temperature changes",
      "Can be used for both front and back teeth"
    ],
    process: [
      "Local anesthesia to ensure complete comfort during treatment",
      "Removal of decay and preparation of the tooth",
      "Acid etching to create bonding surface",
      "Application of bonding agent and composite resin in layers",
      "Light curing to harden each layer of material",
      "Final shaping, polishing, and bite adjustment"
    ],
    faq: [
      {
        question: "How long do white fillings last?",
        answer: "White fillings typically last 7-15 years, depending on their size, location, and your oral habits. They're very durable and can withstand normal chewing forces."
      },
      {
        question: "Are white fillings as strong as silver fillings?",
        answer: "Modern composite materials are very strong and suitable for most situations. For very large restorations, we may recommend crowns or inlays for optimal strength."
      },
      {
        question: "Do white fillings stain?",
        answer: "High-quality composite materials are stain-resistant, but they can discolor slightly over time. Regular cleanings help maintain their appearance."
      },
      {
        question: "Is the procedure painful?",
        answer: "The procedure is performed under local anesthesia, so you won't feel any pain. Some patients experience mild sensitivity afterward, which typically resolves quickly."
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

export default WhiteFillings;
