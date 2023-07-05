import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import deleteIcon from "../../assets/icons/delete.png";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import Dialogue from "../../components/Dialogue";

const GetOrderedFood = () => {
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
        window.location.reload(true);
        toast.success("Delete cart was successful");
      })
      .catch((error) => toast.error(error.message));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-5/6">
      <p className="text-3xl font-medium text-center mb-5">Ordered Food List</p>
      <table className="table table-zebra text-center">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Payment</th>
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
                {" "}
                <button>
                  <Dialogue cartItem={cartItem} user={user} />
                </button>
              </td>
              <td>
                <button className="" onClick={() => handleDelete(cartItem.id)}>
                  <img src={deleteIcon} alt="" className="w-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetOrderedFood;
