import React, { useContext, useEffect, useState } from "react";
import { Button, IconButton, Collapse } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  // logout function
  const handleLogOut = () => {
    logout()
      .then(() => {
        if (logout) {
          toast.success("You have successfully logged out");
        }
      })
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-medium">
      <Link to="/">Home</Link>
      <Link to="/adaption">Adaption</Link>
      <Link to="/food-accessories">Food & Accessories</Link>
      <Link to="/review">Review</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/pet-doctors">Pet Doctor</Link>
      <Link to="/dashboard">Dashboard</Link>
    </ul>
  );

  return (
    <nav className="py-2 px-4 lg:px-8 lg:py-4 shadow-none bg-white">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <label htmlFor="dashboard-drawer" className="block 2xl:hidden xl:hidden lg:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium text-2xl text-blue-500">
          Pet Caretaker
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div>
          {user?.uid ? (
            <>
              <Button variant="gradient" size="sm" className="lg:inline-block" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="gradient" size="sm" className="lg:inline-block">
                  Login
                </Button>
              </Link>
            </>
          )}
          <IconButton
            variant="text"
            className="ml-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </nav>
  );
};

export default NavigationBar;
