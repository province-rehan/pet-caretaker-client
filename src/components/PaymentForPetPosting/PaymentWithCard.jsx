import React, { useContext } from "react";
import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import PaymentForPetPostingWithBkash from "./PaymentForPetPostingWithBkash";

const PaymentWithCard = () => {
  const nevugate = useNavigate();
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handlePayment = () => {
    toast.success("Payment for post was successfully");
    nevugate("/adaption");
  };

  return (
    <Fragment>
      <Button size="lg" fullWidth onClick={handleOpen} type="submit" variant="gradient" className="mt-5">
        Pay 50Tk for adoption post
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
                  <p className="text-xl font-semibold my-2 text-blue-600">Charge for post: 50Tk</p>
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
              <Button size="lg" fullWidth onClick={handlePayment}>
                Pay with stripe
              </Button>
              <PaymentForPetPostingWithBkash user={user} />
            </div>
            <Toaster />
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default PaymentWithCard;
