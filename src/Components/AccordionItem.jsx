import { faqs } from "../data/dataFaqs";

import AccordionItem from "./Accordion";

function Accordion() {
  return (
    <div>
      {faqs.map((faqElement, i) => (
        <AccordionItem faqElement={faqElement} num={i} key={i} />
      ))}
    </div>
  );
}

export default Accordion;
