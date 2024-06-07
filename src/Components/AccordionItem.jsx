/* eslint-disable react/prop-types */

import AccordionItem from "./Accordion";

function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faqElement, i) => (
        <AccordionItem
          title={faqElement.title}
          text={faqElement.text}
          num={i}
          key={i}
        />
      ))}
    </div>
  );
}

export default Accordion;
