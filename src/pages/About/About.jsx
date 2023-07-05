import React from "react";
import FAQ from "./FAQ";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-10 w-6/6 lg:w-5/6 text-center">
        <p className="text-4xl uppercase font-medium mb-2">About Us</p>
        <p className="">
          Pet Adoption Website is Ireland and Northern Ireland's largest animal adoption portal, bringing together dogs, cats, and other animals available to adopt from rescues across Ireland. This
          means the public can view and apply to available animals in one place, rather than having to check each rescue individually.
        </p>
      </div>
      <div className="p-10 w-5/6">
        <p className="text-4xl font-medium mb-2">FAQs</p>
        <FAQ />
      </div>
      <div>
      </div>
    </div>
  );
};

export default About;
