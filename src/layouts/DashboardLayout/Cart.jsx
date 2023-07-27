import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import deleteIcon from "../../assets/icons/delete.png";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import Dialogue from "../../components/Dialogue";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user, loading } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://petcaretaker-server.vercel.app/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`https://petcaretaker-server.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.reload(true);
          toast.success("Delete cart was successful");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  if (loading) {
    return <Spinner />;
  }
  let total = 0;
  cart.forEach((item) => {
    total = total + item.quantity * item.price;
  });

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <div className="w-5/6">
            <p className="text-3xl font-medium text-center mb-5">Pet Food Cart</p>
            <table className="table table-zebra text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Delete Cart Product</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, index) => (
                  <tr key={cartItem._id}>
                    <th>{index + 1}</th>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.quantity}</td>
                    <td>{cartItem.price}</td>
                    <td>{cartItem.quantity * cartItem.price}</td>
                    <td>
                      <button className="" onClick={() => handleDelete(cartItem.id)}>
                        <img src={deleteIcon} alt="" className="w-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center flex-col">
              <p className="text-3xl text-center mb-5">Total Price: {total}</p>
              <button>
                <Dialogue total={total} cart={cart} user={user} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="mb-10 text-3xl">Please add products to cart</p>
          <Link to="/food-accessories">
            <Button>Shop Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
