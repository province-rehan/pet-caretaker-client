import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const WelcomeDash = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="flex items-center  dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl mb-5">Hey, {user?.displayName}</p>
          <h2 className="font-bold text-4xl mb-5">
            <span className="sr-only">Welcome</span>Welcome
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">To Your Dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeDash;
