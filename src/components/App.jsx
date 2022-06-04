/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// styles
import './App.scss';
// components
import Div from './General/Div';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Routes from '../routes/Routes';
import Footer from './Footer/Footer';
// other / data
const logo = require('../assets/images/logo.png');
const data = require('../data/data.json');
const empty = { input: '', imageURL: '', boxes: [] };

export default function App() {
  const [state, setState] = useState({ ...empty, user: null });
  const user = state.user;

  // User Functions
  const signout = () => setState({ ...empty, user: null });
  const loadUser = (data) => setState({ ...empty, user: data });

  // Image Form / Clarifai / Box Functions
  const inputChange = (e) => setState((state) => ({ ...state, input: e.target.value }));
  const clear = () => setState((state) => ({ ...state, input: '' }));
  const clearImages = () => setState((state) => ({ ...state, ...empty }));
  async function buttonClick() {
    // dont want someone to spam button to increase their rank now do we
    if (state.input !== state.imageURL) {
      try {
        setState((state) => ({ ...state, imageURL: state.input }));
        const api_res = await fetch(`http://localhost:3000/imageUrl`, { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ input: state.input }), })
        const api_data = await api_res.json();
        displayBox(calculateBox(api_data));
        // user is checked cause you dont have to login to be able to use the app
        // user is only necessary to increase entries or (in the future, postgres -> mongodb) save search history
        if (user) {
          try {
            const db_call = fetch(`http://localhost:3000/clarifai/:${user.id}`, { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: user.id }), });
            const db_response = await db_call;
            // should i check whether or not response === 200? cause i do set status to 200 for successful db stuff on backend and 400 on failure
            const user_entries = await db_response.json();
            setState((state) => ({ ...state, user: { ...state.user, entries: user_entries } }));
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
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
  const displayBox = (box) => setState((state) => ({ ...state, boxes: box }));

  return (
    <Div ids={['app-container']} classNames={['__next']}>
      <Navbar logo={logo} user={state.user} signout={signout} />
      <Background data={data.particles.vie} />
      <Routes
        state={state}
        loadUser={loadUser}
        inputChange={inputChange}
        clear={clear}
        clearImages={clearImages}
        buttonClick={buttonClick}
      />
      <Footer />
    </Div>
  );
}