import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <Header />
      <main className=" w-f h-full">
        <div className="mt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
