import React from "react";
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>How does temporary pet adoption work on your website?</AccordionHeader>
        <AccordionBody>
          Temporary pet adoption on our website allows pet owners to entrust their pets to experienced caretakers for a specific period. Owners pay a nominal fee, and their pets receive proper care
          and attention during their absence.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>Can I trust the pet caretakers on your website?</AccordionHeader>
        <AccordionBody>
          Absolutely! We carefully screen and verify all pet caretakers on our platform. They have undergone a rigorous selection process and are passionate about animal care. We prioritize the safety
          and well-being of your pets.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>Can I buy pet food and accessories from your website?</AccordionHeader>
        <AccordionBody>
          Yes, we have a dedicated online store where you can find a wide range of pet food, accessories, and supplies. We offer high-quality products from trusted brands, ensuring the well-being of
          your pets.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>How do I contact a veterinarian for my pet's health concerns?</AccordionHeader>
        <AccordionBody>
          We provide a convenient platform to connect with professional veterinarians. You can schedule online consultations, seek advice, and address any health concerns you have about your beloved
          pets.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default FAQ;
