import React from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input, Typography } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PaymentWithBkash from "./PaymentWithBkash";

const Dialogue = ({ total, user, cart }) => {
  console.log(cart);
  const { displayName, email } = user;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const holderName = form?.holderName?.value;
    const userEmail = form?.userEmail?.value;
    const productTotalPrice = parseInt(form?.productTotalPrice?.value);
    const cardNumber = form?.cardNumber?.value;
    const expireDate = form?.expireDate?.value;
    const cvc = form?.cvc?.value;

    const paymentData = {
      holderName,
      userEmail,
      productTotalPrice,
      cart,
      cardNumber,
      expireDate,
      cvc,
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
          // delete
          fetch(`https://pet-caretaker-server.vercel.app/carts?email=${email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Payment success!");
              // window.location.reload(true);
              navigate("/dashboard/orderpetfood");
            })
            .catch((error) => toast.error(error.message));
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <Fragment>
      <Button size="" onClick={handleOpen} variant="gradient" className="w-1/4">
        Pay Now
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <Typography>
            <form className="flex flex-col mb-2" onSubmit={handlePayment}>
              <p className="font-semibold text-center">User Details</p>
              <div>
                <p className="text-sm my-2 text-black">Name</p>
                <Input label="Holder Name" name="holderName" defaultValue={displayName} disabled />
                <p className="text-sm my-2 text-black">User Email</p>
                <Input label="Holder Name" name="userEmail" defaultValue={email} disabled />
              </div>
              <div>
                <p className="font-semibold text-center">Product Details</p>
                <p className="text-sm text-black">Price</p>
                <Input label="Product Name" name="productTotalPrice" defaultValue={total} disabled />
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
              </div>
              <Toaster />
            </form>
            <PaymentWithBkash total={total} user={user} cart={cart} />
          </Typography>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default Dialogue;
