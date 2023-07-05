import React from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PaymentWithBkash from "./PaymentWithBkash";

const Dialogue = ({ cartItem, user }) => {
  const { displayName, email } = user;
  const { name, price, quantity, _id } = cartItem;
  const nevugate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const holderName = form?.holderName?.value;
    const userEmail = form?.userEmail?.value;
    const productName = form?.productName?.value;
    const productPrice = form?.productPrice?.value;
    const productQuantity = form?.productQuantity?.value;
    const productTotalPrice = form?.productTotalPrice?.value;
    const cardNumber = form?.cardNumber?.value;
    const expireDate = form?.expireDate?.value;
    const cvc = form?.cvc?.value;

    const paymentData = {
      holderName,
      userEmail,
      productName,
      productPrice,
      productQuantity,
      productTotalPrice,
      cardNumber,
      expireDate,
      cvc,
      productId: _id,
    };

    fetch("https://petcaretaker-server.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Payment success!");
          nevugate("/");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <Fragment>
      {cartItem?.price && !cartItem.paid && (
        <Button size="sm" onClick={handleOpen} variant="gradient">
          Pay
        </Button>
      )}
      {cartItem?.price && cartItem.paid && (
        <p className="text-green-700">
          <Button size="sm" color="green" disabled>
            Paid
          </Button>
        </p>
      )}
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <form className="flex flex-col" onSubmit={handlePayment}>
            <div>
              <p className="font-semibold text-center">User Details</p>
              <p className="text-sm my-2 text-black">Name</p>
              <Input label="Holder Name" name="holderName" defaultValue={displayName} disabled />
              <p className="text-sm my-2 text-black">User Email</p>
              <Input label="Holder Name" name="userEmail" defaultValue={email} disabled />
            </div>
            <div>
              <p className="font-semibold text-center">Product Details</p>
              <p className="text-sm text-black">Price</p>
              <Input label="Product Name" name="productName" defaultValue={name} disabled />
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm my-2 text-black">Price</p>
                  <Input label="Price" name="productPrice" defaultValue={price} disabled containerProps={{ className: "min-w-[72px]" }} />
                </div>
                <div>
                  <p className="text-sm my-2 text-black">Quantity</p>
                  <Input label="Price" name="productQuantity" defaultValue={quantity} disabled containerProps={{ className: "min-w-[72px]" }} />
                </div>
                <div>
                  <p className="text-sm my-2 text-black">Total Price</p>
                  <Input label="Price" name="productTotalPrice" defaultValue={price * quantity} disabled containerProps={{ className: "min-w-[72px]" }} />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-center">Card Details</p>
              <Input label="CardNumber" name="cardNumber" maxLength={16} required />
              <div className="my-4 flex items-center gap-4">
                <Input label="Expires" name="expireDate" type="date" maxLength={5} containerProps={{ className: "min-w-[72px]" }} required />
                <Input label="CVC" name="cvc" maxLength={4} containerProps={{ className: "min-w-[72px]" }} required />
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <Button size="lg" type="submit" fullWidth>
                Pay with stripe
              </Button>
              <PaymentWithBkash cartItem={cartItem} user={user} />
            </div>
            <Toaster />
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default Dialogue;
