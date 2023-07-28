import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center justify-between mx-auto px-10">
      <h1 className="text-white text-3xl font-light cursor-pointer">Санарип Долбоор</h1>
      <Navbar />
    </div>
  );
};

export default Header;
