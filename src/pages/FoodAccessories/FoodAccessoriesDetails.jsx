import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import successIcon from "../../assets/icons/check.png";

const FoodAccessoriesDetails = () => {
  const { user } = useContext(AuthContext);
  const foodAndAccessory = useLoaderData();
  const nevigate = useNavigate();

  const handleCart = (event) => {
    event.preventDefault();
    const quantity = event?.target?.quantity?.value;
    const price = foodAndAccessory?.price;

    const cart = {
      userEmail: user?.email,
      id: foodAndAccessory?.id,
      name: foodAndAccessory?.name,
      price: parseInt(price),
      quantity: parseInt(quantity),
    };

    fetch("https://petcaretaker-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast.success("Cart successfully added!");
          toast((t) => (
            <span className="flex justify-between items-center gap-5">
              <div className="flex justify-center items-center gap-5">
                <img src={successIcon} className="w-5" alt="" />
                <p>Product has been added in cart</p>
              </div>
              <button
                className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-green-500 px-4 text-xs font-medium tracking-wide text-white shadow-md shadow-green-200 transition duration-300 hover:bg-green-600 hover:shadow-sm hover:shadow-green-200 focus:bg-green-700 focus:shadow-sm focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none"
                onClick={() => {
                  toast.dismiss(t.id);
                  nevigate("/dashboard/cart");
                }}
              >
                Go to cart
              </button>
            </span>
          ));
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={foodAndAccessory.image} />
          <form class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" onSubmit={handleCart}>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <p class="leading-relaxed text-justify">{foodAndAccessory.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="w-72">
                <Input label="Quantity" type="number" name="quantity" min={1} max={20} required />
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">Price: {foodAndAccessory.price}(BDT)</span>
              <button class="flex ml-auto text-white text-sm bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" type="submit">
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FoodAccessoriesDetails;
