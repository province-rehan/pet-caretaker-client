import React from "react";
import hero from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <section className=" text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-3xl">Where pets are family, and their happiness is our priority.</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Welcome to Pet Caretaker, the ultimate platform for pet owners. We provide secure temporary pet care, a convenient shopping experience for pet supplies, and a trusted network of pet
            doctors. Your pet's welfare is our top priority
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link rel="noopener noreferrer" to="/login" className="">
              <Button>Get Started</Button>
            </Link>
            <Link rel="noopener noreferrer" to="/contact" className="">
              <Button variant="outlined">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
