import React, { useContext, useState } from "react";
import { Card, Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import UseAccessToken from "../../../hooks/UseAccessToken";

const Register = () => {
  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  const nevigate = useNavigate();

  // user data
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = UseAccessToken(createdUserEmail);
  if (token) {
    nevigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event?.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const password = form.password.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const nidNumber = form.nidNumber.value;
    const birthCertificateNumber = form.birthCertificateNumber.value;
    const role = form.loginAs.value;

    // upload image and post form to mongodb
    const birthCertificateImage = event.target.birthCertificatePhoto.files[0];
    // console.log(birthCertificateImage, "image link");
    const formData = new FormData();
    formData.append("image", birthCertificateImage);
    const url = `https://api.imgbb.com/1/upload?&key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          const userDetails = {
            userName,
            userEmail,
            location,
            phone,
            nidNumber,
            birthCertificateNumber,
            role,
            birthCertificatePhoto: imgData?.data?.url,
          };
          // save user details to database
          fetch("https://petcaretaker-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast.success("Registration successful");
                form.reset();
                // verify token
                setCreatedUserEmail(userEmail);
              }
            })
            .catch((error) => toast.error(error.message));
        }
      });

    // console.log({ userName, userEmail, password, location, phone, birthCertificateNumber, nidNumber, birthCertificatePhoto, role });
    // register user
    createUser(userEmail, password)
      .then((result) => {
        const user = result.user;
        handleUpdateUser(userName);
        // console.log(user);
      })
      .catch((error) => toast.error(error.message));
  };

  // update user
  const handleUpdateUser = (name) => {
    const currentUser = {
      displayName: name,
    };
    updateUserProfile(currentUser)
      .then(() => {})
      .catch((error) => toast.error(error));
  };

  return (
    <Card className="flex justify-center items-center shadow-none m-10">
      <Typography variant="h4" color="blue-gray">
        REGISTER
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2" onSubmit={handleRegister}>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  mb-4 gap-6">
          <Input name="name" size="lg" label="Name" className="capitalize" required />
          <Input name="email" size="lg" label="Email" required />
          <Input name="password" type="password" size="lg" label="Password" required />
          <Input name="location" size="lg" label="Location" className="capitalize" />
          <Input name="phone" size="lg" label="Phone Number" type="number" required />
          <Input name="birthCertificateNumber" size="lg" label="Birth Certificate Number" type="number" required />
          <Input name="nidNumber" size="lg" label="NID Number (Optional)" type="number" />
          <Input name="birthCertificatePhoto" size="lg" label="Birth Certificate Number" type="file" required />
          <div>
            <label label htmlFor="loginAs" className="w-full">
              Register as a pet
            </label>
            <select name="loginAs" className="select select-bordered px-3 rounded-sm bg-white max-w-xs my-1 w-full" required>
              <option>owner</option>
              <option>receiver</option>
            </select>
          </div>
        </div>
        <p className="text-red-500">N.B: If you are an adopter please mark those options. Otherwise you wont be able to adopt pets.</p>
        <Checkbox
          label={
            <div>
              <Typography color="blue-gray" className="font-medium">
                Have you any prior experience adopting any pet?
              </Typography>
            </div>
          }
        />
        <Checkbox
          label={
            <div>
              <Typography color="blue-gray" className="font-medium">
                I take the full responsibility of the pets. If any injury happend to the pets.
              </Typography>
            </div>
          }
        />
        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Register;
