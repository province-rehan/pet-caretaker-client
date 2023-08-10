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
          <tr className="text-center">
            <th>User Name</th>
            <th>Product Name</th>
            <th>Total Price</th>
            <th>#Invoice Number</th>
            <th>Card Number</th>
            <th>CVC</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.holderName}</td>
              <td>
                {payment?.cart.map((productName, i) => {
                  return (
                    <ul key={i}>
                      <li>{productName?.name}</li>
                    </ul>
                  );
                })}
              </td>
              <td>{payment.productTotalPrice}</td>
              <td>{payment._id}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.cvc}</td>
              <td className="text-green-500 font-bold">PAID</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPayment;
