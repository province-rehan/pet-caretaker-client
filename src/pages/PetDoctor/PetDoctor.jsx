import React from "react";
import PetDoctorFaq from "./PetDoctorFaq";
import { toast } from "react-hot-toast";
import { Button } from "@material-tailwind/react";

const doctors = [
  {
    id: "1",
    doctorName: "Dr. Kamal Hasan",
    hospitalName: "Furry Animal Hospital",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557718072.jpg",
  },
  {
    id: "2",
    doctorName: "Dr. Marjan Ahmed",
    hospitalName: "Happy Tails Veterinary Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557719002.jpg",
  },
  {
    id: "3",
    doctorName: "Dr. Zahirul Islam",
    hospitalName: "Animal Wellness Hospital",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557722554.jpg",
  },
  {
    id: "4",
    doctorName: "Dr. Shahid Hassan",
    hospitalName: "Happy Pets Veterinary Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557722762.jpg",
  },
  {
    id: "5",
    doctorName: "Dr. Rohit Patel",
    hospitalName: "Harmony Veterinary Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557719073.jpg",
  },
  {
    id: "6",
    doctorName: "Dr. Arjun Das",
    hospitalName: "Pet Health Center",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557730926.jpg",
  },
  {
    id: "7",
    doctorName: "Dr. Karim Khan",
    hospitalName: "Animal Wellness Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557718322.jpg",
  },
  {
    id: "8",
    doctorName: "Dr. Ravi Sharma",
    hospitalName: "CareVet Animal Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557731331.jpg",
  },
  {
    id: "9",
    doctorName: "Dr. Akbar Ali",
    hospitalName: "Loving Paws Animal Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557738204.jpg",
  },
  {
    id: "10",
    doctorName: "Dr. Wadud Chowdhury",
    hospitalName: "Wellbeing Veterinary Clinic",
    imageUrl: "https://www.bdspecializedhospital.com/storage/app/public/media/1557720785.jpg",
  },
];
const PetDoctor = () => {
  const handleReserve = () => {
    toast((t) => (
      <span className="flex gap-5">
        <p>
          Please call <b>01915777831</b> for Bookings.
        </p>
        <Button size="xs" color="green" className="" onClick={() => toast.dismiss(t.id)}>
          Close
        </Button>
      </span>
    ));
  };
  const handleVideoCall = () => {
    toast("This Feature will be available soon.", {
      icon: "🔜",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl font-semibold text-center mb-5">Our Pet doctors</p>
      <div className="grid gap-10 p-5 grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {doctors.map((doctor) => (
          <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={doctor.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracki">{doctor.doctorName}</h2>
                <p className="text-gray-800">Hospital Name: {doctor.hospitalName}</p>
              </div>
              <div>
                <button type="button" className="flex items-center justify-center w-full p-2 mb-2 font-semibold tracki rounded-md bg-blue-600 text-gray-50" onClick={handleReserve}>
                  Take an Appointment
                </button>
                <button type="button" className="flex items-center justify-center w-full p-2 font-semibold tracki rounded-md bg-blue-600 text-gray-50" onClick={handleVideoCall}>
                  Video Conference
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center my-5 px-20">
        <p className="text-4xl font-medium">FAQ</p>
        <PetDoctorFaq />
      </div>
    </div>
  );
};

export default PetDoctor;
