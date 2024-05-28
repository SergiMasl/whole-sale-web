import "./faqs.sass";
import FAQsContent from "./FAQsContent";
import AccardionFAQs from "./AccardionFAQs";

export default function FAQs() {
  return (
    <section className="section-container">
      <div className="faq-wrapper">
        <FAQsContent />
        <AccardionFAQs />
      </div>
    </section>
  );
}
