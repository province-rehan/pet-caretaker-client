import React from "react";
import { useLoaderData } from "react-router-dom";

const AllOrderedFood = () => {
  const allOrders = useLoaderData();
console.log(allOrders)
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
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Product Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, i) => (
              <tr key={order?._id}>
                <th>{i + 1}</th>
                <td>
                  {
                    order?.cart?.map((productsNames, i) =>{
                      return(
                        <ul key={i}>{productsNames.name}</ul>
                      )
                    })
                  }
                </td>
                <td>{order?.holderName}</td>
                <td>{order?.userEmail}</td>
                <td>{order?.productTotalPrice}</td>
                <td className="text-green-500 font-semibold">PAID</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrderedFood;
