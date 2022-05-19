/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import SigninPage from '../views/SigninPage';
import RegisterPage from '../views/RegisterPage';

export default function App(props) {
  return (
    <Routes>
      <Route exact path='/register' element={<RegisterPage {...props} />} />
      <Route exact path='/signin' element={<SigninPage {...props} />} />
      <Route exact path='/home' element={<HomePage {...props} />} />
      <Route path='/' element={<HomePage {...props} />} />
    </Routes>
  );
}