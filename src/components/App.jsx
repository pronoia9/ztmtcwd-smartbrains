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
// TEMPORARY
const Andrei = { name: 'Andrei', count: 0, rank: 0, history: [], imageURL: '', input: '', box: {} };

export default function App() {
  const [user, setUser] = useState(Andrei);

  // Form Functions
  const inputChange = (e) => setUser((user) => ({ ...user, input: e.target.value }));
  const buttonClick = () => {
    setUser((user) => ({ ...user, imageURL: user.input }));

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, user.input)
      .then((response) => calculateBox(response))
      .then(() => user.history[user.history.length - 1] !== user.input && setUser((user) => ({ ...user, count: user.count + 1, history: [...user.history, user.imageURL] }))
      )
      .catch((e) => console.log(e));
  };
  const clear = () => setUser((user) => ({ ...user, input: '' }));

  const calculateBox = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  };

  return (
    <Div ids={['app-container']} classNames={['__next']}>
      <Preloader />
      <Navbar logo={logo} setState={setUser} />

      <Div ids={['body-container']} classNames={['particles circle-bg valign']}>
        {/* header if not signed in, body if logged in */}
        { !user ?
          <Header /> :
          <Body {...user} placeholder='Enter an image URL' inputChange={inputChange} buttonClick={buttonClick} clear={clear} /> }

        <Background data={data.particles.vie} />
      </Div>
    </Div>
  );
}