import React from "react";

const Statistics = () => {
  return (
    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500">1.2K+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Owners</p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500">1K+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">adopters</p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500">3K+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Users</p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-500">5K+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
