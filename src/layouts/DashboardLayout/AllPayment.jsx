import React from "react";
import { useLoaderData } from "react-router-dom";

const AllPayment = () => {
  const payments = useLoaderData();
  return (
    <div>
      <p className="text-center text-2xl font-medium my-5">Payment</p>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Total Price</th>
            <th>#Invoice Number</th>
            <th>Card Number</th>
            <th>CVC</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.holderName}</td>
              <td>{payment.userEmail}</td>
              <td>{payment.productName}</td>
              <td>{payment.productPrice}</td>
              <td>{payment.productQuantity}</td>
              <td>{payment.productTotalPrice}</td>
              <td>{payment._id}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.cvc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPayment;
