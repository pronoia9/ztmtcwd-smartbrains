/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import SigninPage from '../views/SigninPage';
import RegisterPage from '../views/RegisterPage';

export default function App(props) {
  return (
    <Switch>
      <Route exact path='/projects'>
        <SigninPage {...props} />
      </Route>

      <Route exact path='/projects-2-col'>
        <RegisterPage {...props} />
      </Route>

      <Route exact path='/'>
        <HomePage {...props} />
      </Route>

      <Route path='*'>{/* <NotFound /> */}</Route>
    </Switch>
  );
}