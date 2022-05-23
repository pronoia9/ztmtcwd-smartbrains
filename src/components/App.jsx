/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Clarifai from 'clarifai';
// styles
import './App.scss';
// components
import Div from './General/Div';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Routes from '../routes/Routes';
// other / data
const logo = require('../assets/images/logo.png');
const data = require('../data/data.json');
const keys = require('../data/keys.json');
// Clarifai
const app = new Clarifai.App({ apiKey: keys.clarifai });
// TEMPORARY
const users = [],
  Andrei = {
    username: 'aneagoi',
    name: 'Andrei',
    email: 'andrei@gmail.com',
    password: 'ztm',
    count: 0,
    rank: 0,
    history: [],
    imageURL: '',
    input: '',
    boxes: [],
  };
users.push(Andrei);

export default function App() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/').then(res => res.json()).then(console.log).catch(console.error);
  }, [])

  // Image Form Functions
  const inputChange = (e) => setUser((user) => ({ ...user, input: e.target.value }));
  const clear = () => setUser((user) => ({ ...user, input: '' }));
  const buttonClick = () => {
    if (user.history[user.history.length - 1] !== user.input) {
      setUser((user) => ({ ...user, imageURL: user.input, boxes: [] }));
      app.models
        .predict(Clarifai.FACE_DETECT_MODEL, user.input)
        .then((response) => displayBox(calculateBox(response)))
        .then(() => setUser((user) => ({ ...user, count: user.count + 1, history: [...user.history, user.imageURL] })))
        .catch((err) => console.error(err));
    }
  };

  // Clarifai / Box Functions
  const calculateBox = (data) => {
    const boxes = data.outputs[0].data.regions.map((elem) => elem.region_info.bounding_box);
    const image = document.getElementById('input-image'),
      width = Number(image.width),
      height = Number(image.height);
    return boxes.map((box) => ({
      left: box.left_col * width,
      top: box.top_row * height,
      right: width - box.right_col * width,
      bottom: height - box.bottom_row * height,
    }));
  };
  const displayBox = (box) => setUser((user) => ({ ...user, boxes: box }));

  // Sign-in Functions
  const signout = () => setUser(null);

  return (
    <Div ids={['app-container']} classNames={['__next']}>
      <Navbar logo={logo} user={user} signout={signout} />
      <Background data={data.particles.vie} />
      <Routes user={user} inputChange={inputChange} buttonClick={buttonClick} clear={clear} />
    </Div>
  );
}