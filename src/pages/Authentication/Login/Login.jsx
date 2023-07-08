import React, { useContext, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/images/login.jpg";
import logingoogle from "../../../assets/icons/google.svg";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";
import UseAccessToken from "../../../hooks/UseAccessToken";

const Login = () => {
  const navigate = useNavigate();
  const { googleLogin, logIn } = useContext(AuthContext);
  const google = new GoogleAuthProvider();

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = UseAccessToken(loginUserEmail);

  if (token) {
    window.location.reload(false);
    navigate("/");
  }

  const handleGoogle = () => {
    googleLogin(google)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login with google successful");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login successful");
        }
        form.reset();
        // console.log(user);
        setLoginUserEmail(email);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={loginImg} />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <Card color="" shadow={false} className="flex items-center justify-center">
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Login.
            </Typography>
            <form className="mt-8 mb-2 w-80 sm:w-96" onSubmit={handleLogin}>
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Email" name="email" required />
                <Input type="password" size="lg" label="Password" name="password" required />
              </div>
              <Button variant="outlined" className="flex items-center justify-center gap-3" fullWidth={true} onClick={handleGoogle}>
                <img src={logingoogle} alt="metamask" className="h-6 w-6" />
                Continue with Google
              </Button>
              <Button type="submit" className="mt-6" fullWidth>
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                New to Pet Caretaker?{" "}
                <Link to="/register" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                  Register
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Login;
