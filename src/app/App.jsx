import { faqs } from "../data/dataFaqs";
import "../css/App.css";

import Accordion from "../Components/Accordion";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
