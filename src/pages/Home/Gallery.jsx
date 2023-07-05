import React from "react";
import first from "../../assets/images/pet/first.jpg";
import second from "../../assets/images/pet/second.jpg";
import third from "../../assets/images/pet/third.jpg";
import fourth from "../../assets/images/pet/fourth.jpg";
import fifth from "../../assets/images/pet/fifth.jpg";
import sixth from "../../assets/images/pet/sixth.jpg";

const Gallery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Here is our gallery</h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover the cutest pets in our gallery! Explore adorable kittens, playful puppies, majestic horses, graceful birds, and fascinating reptiles. Fall in love with their unique beauty and the
            joy they bring to our lives. Join us in celebrating the incredible bond between humans and pets.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={first} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={second} />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src={third} />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src={fourth} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={fifth} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={sixth} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
