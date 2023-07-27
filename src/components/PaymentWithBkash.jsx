import React from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PaymentWithBkash = ({ total, user, cart }) => {
  const { displayName, email } = user;
  const nevugate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const holderName = form?.holderName?.value;
    const userEmail = form?.userEmail?.value;
    const productTotalPrice = form?.productTotalPrice?.value;
    const cardNumber = form?.cardNumber?.value;

    const paymentData = {
      holderName,
      userEmail,
      productTotalPrice,
      cart,
      cardNumber,
      cvc: "Bkash payment",
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
          nevugate("/");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  // otp
  const randomOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);

    toast.success(`Your Bkash OTP is ${otp}`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };
  return (
    <Fragment>
      <Button size="lg" color="pink" onClick={handleOpen} variant="gradient" fullWidth>
        Pay with bkash
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <form className="flex flex-col" onSubmit={handlePayment}>
            <div>
              <p className="font-bold uppercase text-pink-400 text-center">Payment With Bkash</p>
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
              <p className="font-semibold text-center">Phone Details</p>
              <div className="flex gap-x-3">
                <Input label="Phone Number(+880)" name="cardNumber" required />
                <Button size="sm" fullWidth onClick={randomOtp}>
                  Send OTP
                </Button>
              </div>
              <div className="flex gap-x-2 mt-2">
                <Input label="OTP" required />
                <Input label="Password" type="password" required />
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-5 mt-5">
              <Button size="lg" className="bg-pink-400" type="submit" fullWidth>
                Pay with bkash
              </Button>
            </div>
            <Toaster />
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default PaymentWithBkash;
