
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeethWhitening = () => {
  const serviceData = {
    title: "Teeth Whitening",
    subtitle: "Achieve a brighter, more confident smile with professional whitening treatments",
    description: "Professional teeth whitening is the fastest and most effective way to brighten your smile. Our advanced whitening systems can lighten your teeth by several shades in just one visit, removing years of stains from coffee, wine, smoking, and natural aging. We offer both in-office treatments for immediate results and take-home kits for gradual whitening at your convenience, all supervised by our dental professionals for safety and optimal results.",
    benefits: [
      "Dramatic results - teeth can become 3-8 shades whiter",
      "Safe and effective under professional supervision",
      "Fast treatment - results visible immediately",
      "Boosts confidence and enhances your smile",
      "Multiple options to fit your schedule and budget",
      "Long-lasting results with proper maintenance"
    ],
    process: [
      "Comprehensive dental examination to ensure suitability",
      "Professional cleaning to remove surface stains and plaque",
      "Gum protection and application of whitening gel",
      "Light activation to accelerate the whitening process",
      "Multiple applications during single visit for optimal results",
      "Post-treatment care instructions and maintenance tips"
    ],
    faq: [
      {
        question: "How long do teeth whitening results last?",
        answer: "Professional whitening results typically last 1-3 years, depending on your diet, habits, and oral hygiene. Touch-up treatments can help maintain your bright smile."
      },
      {
        question: "Is teeth whitening safe?",
        answer: "Yes, professional teeth whitening is completely safe when performed by qualified dental professionals. We use clinically proven methods and monitor your treatment."
      },
      {
        question: "Will whitening cause tooth sensitivity?",
        answer: "Some patients experience temporary sensitivity, which typically subsides within 24-48 hours. We use desensitizing agents to minimize any discomfort."
      },
      {
        question: "Who is not a candidate for teeth whitening?",
        answer: "Pregnant women, children under 16, and patients with certain dental conditions may not be suitable candidates. We'll assess your eligibility during consultation."
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

export default TeethWhitening;
