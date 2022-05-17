import React, { useState } from 'react';
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
const data = require('../data/data.json');

export default function App() {
  const [state, setState] = useState({ user: null });

  return (
    <div className='__next'>
      <Preloader />
      <Navbar logo={logo} setState={setState} />

      <div className='particles circle-bg valign'>
        {/* header if not signed in, body if logged in */}
        {!state.user ? <Header /> : <Body user={state.user} placeholder='' />}

        <Background data={data.particles.vie} />
      </div>
    </div>
  );
}