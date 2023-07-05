import React, { useContext } from "react";
import { Input } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import PaymentWithCard from "../../components/PaymentForPetPosting/PaymentWithCard";

const PostPet = () => {
  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ownerName = form.ownerName?.value;
    const ownerEmail = form.ownerEmail?.value;
    const ownerPhone = form.ownerPhone?.value;

    const petName = form.petName?.value;
    const petCategory = form.petCategory?.value;
    const petGender = form.petGender?.value;
    const petColor = form.petColor?.value;
    const petFeedingTime = form.petFeedingTime?.value;

    const adaptionStartDate = form.adaptionStartDate?.value;
    const adaptionEndDate = form.adaptionEndDate?.value;
    const totalDaysOfAdaption = form.totalDaysOfAdaption?.value;
    const adaptionCost = form.adaptionCost?.value;

    // upload image to imgbb
    const petPhoto = event.target.petPhoto.files[0];
    // console.log(petPhoto);
    const formData = new FormData();
    formData.append("image", petPhoto);
    const url = `https://api.imgbb.com/1/upload?&key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData?.success) {
          const petPostData = {
            ownerName,
            ownerEmail,
            ownerPhone,
            adaptionStartDate,
            adaptionEndDate,
            totalDaysOfAdaption,
            adaptionCost,
            petName,
            petCategory,
            petGender,
            petColor,
            petFeedingTime,
            petPhoto: imageData?.data?.url,
          };
          // save data to database
          fetch("https://petcaretaker-server.vercel.app/postpet", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(petPostData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                form.reset();
              }
            })
            .catch((error) => toast.error(error?.message));
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      <p className="text-2xl font-medium text-center">Fill out the form below to adopt your pet</p>
      <form className="mt-5" onSubmit={handleSubmit}>
        {/* owner details */}
        <div>
          <p className="mb-2 text-lg">Owner Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <Input name="ownerName" label="Onwer Name" defaultValue={user.displayName} disabled />
            <Input name="ownerEmail" label="Onwer Email" defaultValue={user.email} disabled />
            <Input name="ownerPhone" label="Owner Phone(+880)" required />
          </div>
        </div>
        {/* pet details */}
        <div className="mt-5">
          <p className="mb-2 text-lg">Pet Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div>
              <label label htmlFor="petName" className="w-10">
                Pet Name
              </label>
              <input name="petName" className=" px-3 rounded border  bg-white max-w-xs my-1 w-full h-12" placeholder="e.g. Shiro" required />
            </div>

            <div>
              <label label htmlFor="petCategory" className="w-10">
                Select Pet
              </label>
              <select name="petCategory" className="select select-bordered px-3 rounded-s bg-white max-w-xs my-1 w-full" required>
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
              </select>
            </div>
            <div>
              <label label htmlFor="petGender" className="w-10">
                Pet Gender
              </label>
              <select name="petGender" className="select select-bordered px-3 rounded-s bg-white max-w-xs my-1 w-full" required>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label label htmlFor="petFeedingTime" className="w-10">
                Feeding Schedule
              </label>
              <select name="petFeedingTime" className="select select-bordered px-3 rounded-s bg-white max-w-xs my-1 w-full" required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <Input name="petPhoto" label="Pet image" type="file" className="w-60" required />
          </div>
        </div>
        {/* Pet Adaption Details */}
        <div className="mt-5">
          <p className="mb-2 text-lg">Pet Adaption Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <Input name="adaptionStartDate" label="Adaption Starts" type="date" required />
            <Input name="adaptionEndDate" label="Adaption Ends" type="date" required />
            <Input name="totalDaysOfAdaption" label="Total days of adaption" type="number" min={1} required />
            <Input name="adaptionCost" label="Adaption cost (BDT)" type="number" min={1} required />
          </div>
        </div>
        <PaymentWithCard />
      </form>
    </div>
  );
};

export default PostPet;
