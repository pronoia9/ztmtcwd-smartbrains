import React, { useState, useEffect } from 'react';
import Clarifai from 'clarifai';
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
const clarifai = require('../data/clarifai.json');
// Clarifai
const app = new Clarifai.App({ apiKey: keys.clarifai });

export default function App() {
  const [state, setState] = useState({ user: null });
  // SET TEMPORARY USER INFO
  useEffect(() => setState({ user: { name: 'Andrei', count: 0, rank: 5, input: '' } }), []);

  // Form Functions
  const inputChange = (e) => {
    setState((state) => ({ user: { ...state.user, input: e.target.value } }));
  };
  const buttonClick = () => {
    app.models.predict(clarifai.FACE_DETECT_MODEL, 'https://samples.clarifai.com/face-det.jpg').then(
      (response) => {
        // do something with response
        console.log(response);
      },
      (err) => {
        // there was an error
        console.err(err);
      }
    );
  };
  const clear = () => {
    setState((state) => ({ user: { ...state.user, input: '' } }));
  };

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