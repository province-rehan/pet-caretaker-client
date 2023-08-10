import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UsePetReceiver from "../../hooks/UsePetReceiver";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Adaption = () => {
  const adaptionPosts = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isReceiver] = UsePetReceiver(user?.email);

  const [disabledButtons, setDisabledButtons] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [petArray, setPetArray] = useState([]);
  console.log(petArray);

  useEffect(() => {
    const storedDisabledButtons = JSON.parse(localStorage.getItem("disabledButtons")) || [];
    setDisabledButtons(storedDisabledButtons);
  }, []);

  useEffect(() => {
    localStorage.setItem("disabledButtons", JSON.stringify(disabledButtons));
  }, [disabledButtons]);

  const handleAdopt = (adaptionPost, buttonId) => {
    // console.log(buttonId);
    const petReceiverName = user?.displayName;
    const petReceiverEmail = user?.email;
    const ownerName = adaptionPost?.ownerName;
    const ownerEmail = adaptionPost?.ownerEmail;
    const ownerPhone = adaptionPost?.ownerPhone;
    const petName = adaptionPost?.petName;
    const petCategory = adaptionPost?.petCategory;
    const adoptionStartDate = adaptionPost?.adaptionStartDate;
    const adoptionEndDate = adaptionPost?.adaptionEndDate;
    const dailyFeeding = adaptionPost?.petFeedingTime;

    const adoptionData = {
      petReceiverName,
      petReceiverEmail,
      ownerName,
      ownerEmail,
      ownerPhone,
      petName,
      petCategory,
      adoptionStartDate,
      adoptionEndDate,
      dailyFeeding,
    };

    fetch("https://petcaretaker-server.vercel.app/adoptiondata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adoptionData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Adoption succeed!");
          setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, buttonId]);
        }
      });
  };

  const getPetByName = (event) => {
    const petName = event?.target?.value;
    setSelectedPet(petName);
  };
  useEffect(() => {
    fetch(`https://pet-caretaker-server.vercel.app/pet?petName=${selectedPet}`)
      .then((res) => res.json())
      .then((data) => {
        setPetArray(data);
      });
  }, [selectedPet]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl font-medium text-center my-5">Pet For Adaption</p>
      <div className="">
        <select className="border w-52 p-1" label="Pet" name="petname" onChange={getPetByName}>
          <option selected>Select pet</option>
          <option>Cat</option>
          <option>Dog</option>
          <option>Bird</option>
        </select>
      </div>
      <section className="mx-auto px-4 grid my-5">
        <div className="card lg:card-side bg-base-100 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {petArray.length === 0 ? (
            <>
              {adaptionPosts.map((adaptionPost) => (
                <div className="max-w-sm rounded-md shadow-md bg-gray-50 text-gray-800">
                  <img src={adaptionPost.petPhoto} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-1">
                      <p>Pet Owner Name: {adaptionPost.ownerName}</p>
                      <p>Pet Owner Name: {adaptionPost.ownerPhone}</p>
                      <p>Pet Name: {adaptionPost.petName}</p>
                      <p>Pet Gender: {adaptionPost.petGender}</p>
                      <p>Pet Feeding time: {adaptionPost.petFeedingTime} times/day</p>
                      <p>Adoption Starts: {adaptionPost.adaptionStartDate}</p>
                      <p>Adoption Ends: {adaptionPost.adaptionEndDate}</p>
                      <p>Adoption Duration: {adaptionPost.totalDaysOfAdaption} days</p>
                      <p>Pet Cost Provided by owner: {adaptionPost.adaptionCost}Tk</p>
                    </div>
                    {isReceiver ? (
                      <Button fullWidth size="md" onClick={() => handleAdopt(adaptionPost, adaptionPost._id)} disabled={disabledButtons.includes(adaptionPost._id)}>
                        Adopt
                      </Button>
                    ) : (
                      <Button fullWidth size="sm" color="red" disabled>
                        Login as Receiver
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {petArray.map((adaptionPost) => (
                <div className="max-w-sm rounded-md shadow-md bg-gray-50 text-gray-800">
                  <img src={adaptionPost.petPhoto} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-1">
                      <p>Pet Owner Name: {adaptionPost.ownerName}</p>
                      <p>Pet Owner Name: {adaptionPost.ownerPhone}</p>
                      <p>Pet Name: {adaptionPost.petName}</p>
                      <p>Pet Gender: {adaptionPost.petGender}</p>
                      <p>Pet Feeding time: {adaptionPost.petFeedingTime} times/day</p>
                      <p>Adoption Starts: {adaptionPost.adaptionStartDate}</p>
                      <p>Adoption Ends: {adaptionPost.adaptionEndDate}</p>
                      <p>Adoption Duration: {adaptionPost.totalDaysOfAdaption} days</p>
                      <p>Pet Cost Provided by owner: {adaptionPost.adaptionCost}Tk</p>
                    </div>
                    {isReceiver ? (
                      <Button fullWidth size="md" onClick={() => handleAdopt(adaptionPost, adaptionPost._id)} disabled={disabledButtons.includes(adaptionPost._id)}>
                        Adopt
                      </Button>
                    ) : (
                      <Button fullWidth size="sm" color="red" disabled>
                        Login as Receiver
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Adaption;
