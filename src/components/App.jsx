import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
// styles
import './App.css';
// components
import Preloader from './Preloader/Preloader';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Body from './Body/Body';
// other / data
import particlesOptions from '../data/particles.json';
const logo = require('../images/logo.png');

export default function App() {
  let status = false; // TEMPORARY LOGIN STATUS

  return (
    <div className='__next'>
      <Preloader />
      <Navbar logo={logo} />

      <div className='particles circle-bg valign'>
        {/* header if not signed in, body if logged in */}
        {!status ? <Header /> : <Body />}

        <div className='gradient-circles'>
          <Particles options={particlesOptions} init={useCallback((main) => { loadFull(main) }, [])} />
          <div></div>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
          <div className='line bottom left'></div>
        </div>
      </div>
    </div>
  );
}