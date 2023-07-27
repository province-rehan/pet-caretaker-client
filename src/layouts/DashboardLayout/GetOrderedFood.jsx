import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const GetOrderedFood = () => {
  // // shopping bag route
  const { user, loading } = useContext(AuthContext);
  const [shoppingBag, setShoppingBag] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setShoppingBag(data));
  }, [user.email]);

  if (loading) {
    return <Spinner />;
  }
  console.log(shoppingBag);
  return (
    <div className="">
      <p className="text-3xl font-medium text-center mb-5">Shopping Bag</p>
      <table className="table table-zebra text-center">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Product</th>
            <th>Invoice No.</th>
            <th>Card No.</th>
            <th>CVC</th>
            <th>Total Price</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {shoppingBag.map((shoppingBags, index) => (
            <tr key={shoppingBags._id}>
              <th>{index + 1}</th>
              <td>{shoppingBags.holderName}</td>
              <td>{shoppingBags?.cart.map((productName, i) =>{
                return(
                  <ul key={i}>
                    <li>{productName?.name}</li>
                  </ul>
                )
              })}</td>
              <td>{shoppingBags._id}</td>
              <td>{shoppingBags.cardNumber}</td>
              <td>{shoppingBags.cvc}</td>
              <td>{shoppingBags.productTotalPrice}</td>
              <td className="text-green-400 font-bold">PAID</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetOrderedFood;
