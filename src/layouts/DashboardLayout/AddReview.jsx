import React, { useContext } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const postReview = (event) => {
    event.preventDefault();
    const form = event?.target;
    const userName = form?.userName.value;
    const review = form?.review.value;
    const rating = form?.rating.value;

    const userReview = {
      userName,
      rating,
      reviewDescription: review,
    };

    // save the review
    fetch("https://petcaretaker-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Review saved successfully");
          form.reset();
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <p className="text-3xl font-medium text-center">Review</p>
      <form className="flex flex-col justify-center items-center" onSubmit={postReview}>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 w-5/6 justify-center items-center my-5">
          <Input name="userName" label="Name" defaultValue={user?.displayName} required />
          <Input name="rating" label="Rating" type="number" min={0} max={5} step="0.1" required />
        </div>
        <div className="w-5/6">
          <Textarea name="review" label="Message" required />
        </div>
        <Button type="submit" className="w-5/6 mt-5 text-sm" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
