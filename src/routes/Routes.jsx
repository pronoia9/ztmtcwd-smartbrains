/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import FaceRecognitionPage from '../views/FaceRecognitionPage';
import ProfilePage from '../views/ProfilePage';
import SigninPage from '../views/SigninPage';
import RegisterPage from '../views/RegisterPage';

export default function App(props) {
  const user = props.state.user;

  return (
    <Routes>
      <Route path='/register'         element={user ? <Navigate to={`/clarifai/${user.id}`} /> : <RegisterPage {...props} />} />
      <Route path='/signin'           element={user ? <Navigate to={`/clarifai/${user.id}`} /> : <SigninPage {...props} />} />
      <Route path='/clarifai'         element={<FaceRecognitionPage {...props} />} />
      <Route path='/clarifai/:userId' element={user ? <FaceRecognitionPage {...props} /> : <Navigate to='/clarifai' />} />
      <Route path='/profile/:userId'  element={user ? <ProfilePage {...props} /> : <Navigate to={'/'} />}></Route>
      <Route path='/'                 element={<HomePage />} />
    </Routes>
  );
}