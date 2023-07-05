import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";

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
              <div className="flex justify-between">
                <p className="text-lg font-medium">Price: {foodAndAccessory.price}(BDT)</p>
              </div>
            </CardBody>
            <Link to={`food-accessories/${foodAndAccessory.id}`}>
              <CardFooter className="">
                <Button size="lg" fullWidth={true}>
                  Buy
                </Button>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default FoodAccessories;
