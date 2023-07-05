import React from "react";

const Brands = () => {
  return (
    <section className="p-6 text-gray-800">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Brands</h2>
      </div>
      <div className="container flex flex-wrap justify-center items-center mx-auto text-gray-600">
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://www.wellnesspet.com/wp-content/uploads/2021/06/logo-wellness.png" alt="" className="h-4/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://www.wellnesspet.com/wp-content/uploads/2022/05/Untitled-1-1024x270.png" alt="" className="h-3/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://dev-wellpet-redesign.pantheonsite.io/wp-content/uploads/2021/11/omh-logo.png" alt="" className="h-3/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://www.wellnesspet.com/wp-content/uploads/2022/05/DSN_GoodDog-Logo-01-1.png" alt="" className="h-3/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://dev-wellpet-redesign.pantheonsite.io/wp-content/uploads/2021/06/logo-holistic-select.svg" alt="" className="h-3/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://www.wellnesspet.com/wp-content/uploads/2022/05/sojos-2.png" alt="" className="h-3/6"/>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src="https://dev-wellpet-redesign.pantheonsite.io/wp-content/uploads/2021/06/logo-eagle-pack.jpeg" alt="" className="h-3/6"/>
        </div>
      </div>
    </section>
  );
};

export default Brands;
