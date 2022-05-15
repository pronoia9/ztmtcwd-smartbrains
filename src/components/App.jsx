import React from 'react';
// styles
import './App.css';
// components
import Preloader from './Preloader/Preloader';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Body from './Body/Body';
// other / data
const logo = require('../images/logo.png');

export default function App() {
  let status = true; // TEMPORARY LOGIN STATUS

  return (
    <div className='__next'>
      <Preloader />
      <Navbar logo={logo} />

      <div className='particles circle-bg valign'>
        {/* header if not signed in, body if logged in */}
        {!status ? <Header /> : <Body />}

        <Background />
      </div>
    </div>
  );
}