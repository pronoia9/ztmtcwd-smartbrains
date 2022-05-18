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
import Div from './General/Div';
// other / data
const logo = require('../images/logo.png');
const data = require('../data/data.json');
const keys = require('../data/keys.json');
// Clarifai
const app = new Clarifai.App({ apiKey: keys.clarifai });

export default function App() {
  const temp = { user: { name: 'Andrei', count: 0, rank: 0, imageURLs: [], imageURL: '', input: '', box: {} } };
  const [state, setState] = useState(temp);

  // Form Functions
  const inputChange = (e) => setState((state) => ({ user: { ...state.user, input: e.target.value } }));
  const buttonClick = () => {
    setState((state) => ({ user: { ...state.user, imageURL: state.user.input } }));

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, state.user.input)
      .then((response) => calculateBox(response))
      .then(() => (state.user.imageURLs[state.user.imageURLs.length - 1] !== state.user.input) && (setState((state) => ({ user: { ...state.user, count: state.user.count + 1, imageURLs: [...state.user.imageURLs, state.user.imageURL] } }))))
      .catch((e) => console.log(e));
  };
  const clear = () => setState((state) => ({ user: { ...state.user, input: '' } }));

  const calculateBox = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
  };

  return (
    <Div ids={['app-container']} classNames={['__next']}>
      <Preloader />
      <Navbar logo={logo} setState={setState} />

      <Div ids={['body-container']} classNames={['particles circle-bg valign']}>
        {/* header if not signed in, body if logged in */}
        {!state.user ? (
          <Header />
        ) : (
          <Body {...state.user} placeholder='Enter an image URL' inputChange={inputChange} buttonClick={buttonClick} clear={clear} />
        )}

        <Background data={data.particles.vie} />
      </Div>
    </Div>
  );
}
