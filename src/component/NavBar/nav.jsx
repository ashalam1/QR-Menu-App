import React from "react";

const Nav = () => {
  return (
      <div className="flex flex-col items-center bg-black p-4 w-full">
        <img
          src="/images/restaurant-logo.svg"
          width="60"
          height="20"
          alt="restaurant"
        />
        <p className="mt-2 text-white text-sm">QR Menu App</p>
        <p className="mt-2 text-white text-sm">Delight in every bite</p>
      </div>
  );
};

export default Nav;
