import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-[250px]">
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>{" "}
      </div>
    </div>
  );
};

export default Spinner;
