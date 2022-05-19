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
      <Route path='/register' element={!props.user ? <RegisterPage {...props} /> : <HomePage {...props} />} />
      <Route path='/signin' element={!props.user ? <SigninPage {...props} /> : <HomePage {...props} />} />
      <Route path='/' element={<HomePage {...props} />} />
    </Routes>
  );
}