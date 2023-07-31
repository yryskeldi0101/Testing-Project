import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import UsersPage from '../pages/UsersPage';
import WeatherPage from '../pages/WeatherPage';
import MainPage from '../pages/MainPage';
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="weather" element={<WeatherPage />} />
      </Route>
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
};

export default AppRoute;
