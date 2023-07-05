import React from "react";
import { useLoaderData } from "react-router-dom";

const AllOrderedFood = () => {
  const allOrders = useLoaderData();

  return (
    <div>
      <p className="text-3xl font-medium text-center my-5">All Orders</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Buyer Email</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, i) => (
              <tr key={order?._id}>
                <th>{i + 1}</th>
                <td>{order?.name}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.quantity}</td>
                <td>{order?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrderedFood;
