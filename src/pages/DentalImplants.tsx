
import ServiceTemplate from '../components/ServiceTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DentalImplants = () => {
  const serviceData = {
    title: "Dental Implants",
    subtitle: "Permanent tooth replacement that looks, feels, and functions like natural teeth",
    description: "Dental implants are the gold standard for replacing missing teeth, offering a permanent solution that closely mimics the structure and function of natural teeth. A titanium post is surgically placed into the jawbone, where it integrates with the bone to create a stable foundation for a custom crown. This process, called osseointegration, ensures your implant becomes a permanent part of your mouth, providing unmatched stability and longevity.",
    benefits: [
      "Permanent solution - can last a lifetime with proper care",
      "Natural appearance and function identical to real teeth",
      "Preserves jawbone structure and prevents bone loss",
      "No impact on adjacent teeth unlike bridges",
      "Easy maintenance with normal brushing and flossing",
      "Improved confidence in eating, speaking, and smiling"
    ],
    process: [
      "Comprehensive examination including 3D imaging and treatment planning",
      "Surgical placement of titanium implant into jawbone",
      "Healing period of 3-6 months for osseointegration",
      "Abutment placement to connect implant to crown",
      "Custom crown fabrication to match your natural teeth",
      "Final crown placement and bite adjustment"
    ],
    faq: [
      {
        question: "How successful are dental implants?",
        answer: "Dental implants have a success rate of over 95%. With proper care and maintenance, they can last a lifetime, making them an excellent long-term investment."
      },
      {
        question: "Am I a candidate for dental implants?",
        answer: "Most healthy adults with adequate bone density are candidates. We'll evaluate your specific situation during consultation, including bone quality and overall health."
      },
      {
        question: "Is the implant procedure painful?",
        answer: "The procedure is performed under local anesthesia, so you won't feel pain during treatment. Post-operative discomfort is typically minimal and well-managed with medication."
      },
      {
        question: "How long does the implant process take?",
        answer: "The complete process typically takes 3-6 months, with most of this time being healing. The actual surgical procedures are usually completed in 1-2 visits."
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

export default DentalImplants;
