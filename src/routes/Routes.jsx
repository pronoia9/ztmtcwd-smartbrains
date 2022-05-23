/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import ProfilePage from '../views/ProfilePage';
import SigninPage from '../views/SigninPage';
import RegisterPage from '../views/RegisterPage';

export default function App(props) {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage {...props} />} />
      <Route path='/signin' element={<SigninPage {...props} />} />
      <Route path='/profile' element={<ProfilePage {...props} />} />
      <Route path='/' element={<HomePage {...props} />} />
    </Routes>
  );
}