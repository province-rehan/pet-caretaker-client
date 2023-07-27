import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";
import rating from "../../assets/icons/star.png";

const FoodAccessories = () => {
  const foodAndAccessories = useLoaderData();
  return (
    <div>
      <p className="text-3xl font-medium text-center my-5">Food And Accessories</p>
      <section className="container mx-auto px-4 grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        {foodAndAccessories.map((foodAndAccessory) => (
          <Card className="w-full max-w-[26rem] shadow-lg" key={foodAndAccessory.id}>
            <CardHeader floated={false} color="blue-gray">
              <img src={foodAndAccessory.image} alt={foodAndAccessory.name} />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <p color="blue-gray" className="font-medium">
                  {foodAndAccessory.name}
                </p>
              </div>
              <p className="text-gray-700 text-justify">{foodAndAccessory.description.slice(0, 50)}...</p>
              <div className="flex justify-between mt-3">
                <p className="font-medium">Price: {foodAndAccessory.price}(BDT)</p>
                <p className="font-medium flex justify-center items-center">
                  <img src={rating} className="w-5 mr-1" alt="" />
                  <p>{foodAndAccessory.rating}</p>
                </p>
              </div>
            </CardBody>
            <Link to={`food-accessories/${foodAndAccessory.id}`}>
              <CardFooter className="">
                <button className="inline-flex items-center justify-center w-full h-9 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  Buy
                </button>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default FoodAccessories;
