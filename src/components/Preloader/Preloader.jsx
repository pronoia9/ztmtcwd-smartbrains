import React, { useEffect } from 'react';
import Pace from './Pace.js';
import './Pace.css';
import './Preloader.css';

export default function Preloader() {
  useEffect(() => {
    console.log('useEffect');
    PacePreload();
    Pace();
    PaceDone();
    PaceFoo();
  }, []);
  return (
    <div id='preload-ing'>
      <div className='showX'>
        <div className='loading'>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div id='preloader' className=''></div>
      </div>
    </div>
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
