import React from "react";
import FAQ from "./FAQ";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-10 w-6/6 lg:w-5/6 text-center">
        <p className="text-4xl uppercase font-medium mb-2">About Us</p>
        <p className="">
          At Pet Caretaker, we go beyond providing temporary care for pets. We believe in offering a comprehensive experience for pet owners. In addition to connecting pet owners with qualified
          caretakers, our website also features a convenient shopping option where you can find a wide range of pet food and accessories. Furthermore, we provide a directory of trusted pet doctors,
          ensuring that your furry friends receive the best medical care. Your pet's well-being is our top priority, and we strive to offer a holistic solution for all your pet-related needs.
        </p>
      </div>
      <div className="p-10 w-5/6">
        <p className="text-4xl font-medium mb-2">FAQs</p>
        <FAQ />
      </div>
      <div></div>
    </div>
  );
};

export default About;
