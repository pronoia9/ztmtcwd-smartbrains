import React, { useEffect } from 'react';
import Pace from './Pace.js';
import Div from '../General/Div.jsx';
import './Pace.css';
import './Preloader.css';

export default function Preloader() {
  useEffect(() => {
    PacePreload();
    Pace();
    setTimeout(() => {
      PaceDone();
      PaceFoo();
    }, 1000)
  }, []);
  return (
    <Div classNames={[null, 'showX']} ids={['preloader-container', null]}>
      <Div classNames={['loading']} ids={[null]}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </Div>
      <Div classNames={[null]} ids={['preloader']}></Div>
    </Div>
  );
}

const PacePreload = () => {
  document.querySelector('#preloader').classList.remove('isdone');
  document.querySelector('.loading').classList.remove('isdone');
};

const PaceDone = () => {
  document.querySelector('#preloader').classList.add('isdone');
  document.querySelector('.loading').classList.add('isdone');
};
const PaceFoo = () => {
  if (document.querySelector('body').classList.contains('pace-done')) {
    document.querySelector('#preloader').classList.add('isdone');
    document.querySelector('.loading').classList.add('isdone');

    window.addEventListener('load', function() {
      document.querySelector('#preloader').classList.add('isdone');
      document.querySelector('.loading').classList.add('isdone');
      document.querySelector('.pace-running.pace-running') &&
        document.querySelector('.pace-running.pace-running').classList.remove('pace-running');
    });
  }
};

// f = function () {
//   Pace.on('start', function () {
//     document.querySelector('#preloader').classList.remove('isdone'), document.querySelector('.loading').classList.remove('isdone');
//   }),
//     Pace.on('done', function () {
//       document.querySelector('#preloader').classList.add('isdone'), document.querySelector('.loading').classList.add('isdone');
//     }),
//     document.querySelector('body').classList.contains('pace-done') &&
//       (document.querySelector('#preloader').classList.add('isdone'), document.querySelector('.loading').classList.add('isdone')),
//     window.addEventListener('load', function () {
//       document.querySelector('#preloader').classList.add('isdone'),
//         document.querySelector('.loading').classList.add('isdone'),
//         document.querySelector('.pace-running.pace-running') &&
//           document.querySelector('.pace-running.pace-running').classList.remove('pace-running');
//     });
// };