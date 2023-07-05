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
        <AccordionHeader onClick={() => handleOpen(1)}>How will I know if my order is placed successfully?</AccordionHeader>
        <AccordionBody>
          After placing your order, you will typically receive a confirmation message or email. This confirmation will contain details about your order, such as the items purchased, quantity, total
          cost, and any shipping information. Additionally, some platforms may provide you with an order number or reference code that you can use for tracking purposes. If you're uncertain about the
          status of your order or have any concerns, you can always reach out to the customer support team of the respective platform or company for assistance.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>How will my order be delivered to me?</AccordionHeader>
        <AccordionBody>
          Welcome to our online pet shop, where you'll find a wide range of high-quality products for your beloved pets. Enjoy a seamless shopping experience with convenient delivery options,
          including reliable shipping services and local couriers. We prioritize excellent customer service and provide tracking information for your peace of mind. Discover a world of quality
          products, personalized service, and valuable resources for your furry companions. Shop with us today and give your pets the care they deserve.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>What will happen if I get Damaged or Defective Items ?</AccordionHeader>
        <AccordionBody>
          If you made a purchase on Petcaretaker.com or the PetSmart app and received a damaged or defective product, contact a Customer Care Representative within 30 days of delivery at 01938468796.
          Please be prepared to supply the order number and product number from your original confirmation e-mail, as well as your e-mail address and phone number. If you made a purchase through a
          delivery provider's app and received a damaged or defective product, contact the delivery providers customer service.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>Benefits of Creating an Account</AccordionHeader>
        <AccordionBody>
          <div>
            <p className="font-bold"> News and exclusive offers!</p>
            <p>Sign up to receive email updates on special promotions, new product announcements, gift ideas and more.</p>
          </div>
          <div>
            <p className="font-bold"> Order History</p>
            <p>Receive important information about your order. You can even track it up to the minute it arrives.</p>
          </div>
          <div>
            <p className="font-bold">Faster Checkout</p>
            <p> Save your billing and shipping information to make it easier to buy your favorite gear. (read more about security)</p>
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default FAQ;
