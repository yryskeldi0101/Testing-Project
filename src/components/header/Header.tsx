import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-20  flex items-center justify-between
    bg-gradientBg mx-auto px-10 shadow-2xl"
    >
      <h1 className="text-white sm:text-3xl text-xl font-light cursor-pointer">Санарип Долбоор</h1>
      <Navbar />
    </div>
  );
};

export default Header;
