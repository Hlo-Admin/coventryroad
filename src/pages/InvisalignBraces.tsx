
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvisalignBraces = () => {
  const serviceData = {
    title: "Invisalign Braces",
    subtitle: "Straighten your teeth discreetly with virtually invisible, removable aligners",
    description: "Invisalign represents the most advanced approach to teeth straightening, using a series of custom-made, virtually invisible aligners to gradually move your teeth into perfect position. Unlike traditional braces, Invisalign aligners are removable, comfortable, and barely noticeable, allowing you to maintain your lifestyle while achieving the straight smile you've always wanted. Treatment typically takes 12-18 months and requires no metal brackets or wires.",
    benefits: [
      "Virtually invisible - no one will know you're straightening your teeth",
      "Removable for eating, brushing, and special occasions",
      "Comfortable with no metal brackets or wires to irritate mouth",
      "Fewer office visits compared to traditional braces",
      "Maintain normal oral hygiene routine",
      "Predictable results with 3D treatment planning"
    ],
    process: [
      "Initial consultation and 3D digital scan of your teeth",
      "Custom treatment plan showing your teeth's movement over time",
      "Fabrication of your personalized series of aligners",
      "Fitting appointment and instructions for proper wear",
      "Progress check-ups every 6-8 weeks",
      "Retainer fitting to maintain your new straight smile"
    ],
    faq: [
      {
        question: "How long does Invisalign treatment take?",
        answer: "Most Invisalign treatments take 12-18 months, but this varies depending on the complexity of your case. Simple cases may be completed in as little as 6 months."
      },
      {
        question: "Do I have to wear the aligners all the time?",
        answer: "For best results, aligners should be worn 20-22 hours per day, removing them only for eating, drinking (except water), and cleaning your teeth."
      },
      {
        question: "Will Invisalign affect my speech?",
        answer: "There may be a slight temporary adjustment period, but most patients adapt quickly within a few days. Any speech changes are typically minimal and short-lived."
      },
      {
        question: "What happens after Invisalign treatment?",
        answer: "After treatment, you'll wear retainers to maintain your new smile. Initially, retainers are worn full-time, then gradually reduced to nighttime only."
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

export default InvisalignBraces;
