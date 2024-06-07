import { faqs } from "../data/dataFaqs";
import "../css/App.css";

import Accordion from "../Components/AccordionItem";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
