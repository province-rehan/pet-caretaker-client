import React from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PaymentForPetPostingWithBkash = ({ user }) => {
  const nevugate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handlePayment = () => {
    toast.success("Payment for post was successfully");
    nevugate("/adaption");
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
      <Button size="lg" color="pink" fullWidth onClick={handleOpen} type="submit" variant="gradient">
        Pay with bkash
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <form className="flex flex-col">
            <div>
              <p className="font-semibold text-center">User Details</p>
              <p className="text-sm my-2 text-black">Name</p>
              <Input label="Holder Name" name="holderName" defaultValue={user?.displayName} disabled />
              <p className="text-sm my-2 text-black">User Email</p>
              <Input label="Holder Name" name="userEmail" defaultValue={user?.email} disabled />
            </div>
            <div>
              <p className="font-semibold text-center">Payment Details</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold my-2 text-blue-600">Charge for the post: 50Tk</p>
                </div>
              </div>
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
              <Button size="lg" className="bg-pink-400" onClick={handlePayment} fullWidth>
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

export default PaymentForPetPostingWithBkash;
