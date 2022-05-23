/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import FaceRecognitionPage from '../views/FaceRecognitionPage';
import ProfilePage from '../views/ProfilePage';
import SigninPage from '../views/SigninPage';
import RegisterPage from '../views/RegisterPage';

export default function App(props) {
  let { userId } = useParams();
  
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage {...props} />} />
      <Route path='/signin' element={<SigninPage {...props} />} />
      <Route path='/clarifai' element={<FaceRecognitionPage {...props} />} />
      <Route path='/profile/:userId' element={<ProfilePage {...props} />} />
      <Route path='/' element={<HomePage {...props} />} />
    </Routes>
  );
}