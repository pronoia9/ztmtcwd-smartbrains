import React, { useState, useEffect } from 'react';
// styles
import './App.scss';
// components
import Preloader from './Preloader/Preloader';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Body from './Body/Body';
// other / data
const logo = require('../images/logo.png');
const data = require('../data/data.json');
const keys = require('../data/keys.json');

export default function App() {
  const [state, setState] = useState({ user: null });
  // SET TEMPORARY USER INFO
  useEffect(() => setState({ user: { name: 'Andrei', count: 0, rank: 5, input: '' } }), []);

  // Form Functions
  const inputChange = (e) => { setState((state) => ({ user: { ...state.user, input: e.target.value } })); };
  const buttonClick = () => { console.log('api stuff'); };
  const clear = () => { setState((state) => ({ user: { ...state.user, input: '' } })); }

  return (
    <div className='__next'>
      <Preloader />
      <Navbar logo={logo} setState={setState} />

      <div className='particles circle-bg valign'>
        {/* header if not signed in, body if logged in */}
        {!state.user ? <Header /> : <Body {...state.user} placeholder='Enter an image URL' inputChange={inputChange} buttonClick={buttonClick} clear={clear} />}

        <Background data={data.particles.vie} />
      </div>
    </div>
  );
}