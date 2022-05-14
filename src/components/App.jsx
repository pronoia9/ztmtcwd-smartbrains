import React from 'react';
// styles
import './App.css';
// components
import Preloader from './Preloader/Preloader';
import Navbar from './Navbar/Navbar';
// other
const logo = require('../images/logo6.png');

export default function App() {
  return (
    <div className='__next'>
      <Preloader />
      <Navbar logo={logo} />
    </div>
  );
}
