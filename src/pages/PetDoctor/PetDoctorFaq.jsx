import React from "react";
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const PetDoctorFaq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What are common signs of illness in pets?</AccordionHeader>
        <AccordionBody>Common signs of illness in pets include lethargy, loss of appetite, vomiting, diarrhea, coughing, sneezing, and changes in behavior or activity levels.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}> When should I take my sick pet to the veterinarian?</AccordionHeader>
        <AccordionBody>
          It is advisable to take your sick pet to the veterinarian if you notice persistent or severe symptoms, such as prolonged vomiting or diarrhea, difficulty breathing, inability to eat or
          drink, or any other concerning changes in behavior or appearance.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>How can I prevent my pet from getting sick?</AccordionHeader>
        <AccordionBody>
          To help prevent your pet from getting sick, ensure they receive regular veterinary check-ups and vaccinations, provide a balanced diet, maintain proper hygiene, and keep them away from
          potential hazards or toxins.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>Can pets catch illnesses from humans or other animals?</AccordionHeader>
        <AccordionBody>
          Yes, some illnesses can be transmitted between humans and pets, as well as between different animal species. It is important to practice good hygiene, such as washing hands before and after
          handling pets, to minimize the risk of transmission.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default PetDoctorFaq;
