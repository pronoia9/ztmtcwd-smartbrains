import React, { useEffect } from 'react';
import Pace from './Pace.js';
import Div from '../General/Div.jsx';
import './Preloader.scss';

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

// import React, { Component, useState, useEffect } from 'react';
// import Pace from './Pace.js';
// import Div from '../General/Div.jsx';
// import './Preloader.scss';

// const notdone = { preloader: '', loading: '' };
// const isdone = { preloader: 'isdone', loading: 'isdone' };

// export default class Preloader extends Component {
//   constructor(props) {
//     super(props);
//     this.state = notdone;
//   }

//   componentDidMount() {
//     console.log('component did mount');
//     this.setState(notdone);
//     setTimeout(() => {
//       Pace();
//       setTimeout(() => {
//         this.setState(isdone);
//       }, 500);
//     }, 1);
//   }

//   componentDidUpdate() {
//     console.log('component did update');
//     PaceOnStart();
//     Pace();
//     PaceOnDone();
//     PaceFoo();
//   }

//   componentWillUnmount() {
//     console.log('component will unmount');
//     PaceFoo()
//   }

//   render() {
//     return (
//       <Div ids={['preloader-container']} classNames={['showX']}>
//         <Div classNames={[`loading ${this.state.loading}`]}>
//           <span>L</span>
//           <span>o</span>
//           <span>a</span>
//           <span>d</span>
//           <span>i</span>
//           <span>n</span>
//           <span>g</span>
//         </Div>
//         <Div ids={['preloader']} classNames={[this.state.preloader]}></Div>
//       </Div>
//     );
//   }
// }

// const PaceOnStart = () => {
//   document.querySelector('#preloader').classList.remove('isdone');
//   document.querySelector('.loading').classList.remove('isdone');
// };

// const PaceOnDone = () => {
//   document.querySelector('#preloader').classList.add('isdone');
//   document.querySelector('.loading').classList.add('isdone');
// };
// const PaceFoo = () => {
//   if (document.querySelector('body').classList.contains('pace-done')) {
//     document.querySelector('#preloader').classList.add('isdone');
//     document.querySelector('.loading').classList.add('isdone');
//   }
//   window.addEventListener('load', () => {
//     document.querySelector('#preloader').classList.add('isdone');
//     document.querySelector('.loading').classList.add('isdone');
//     document.querySelector('.pace-running.pace-running') &&
//       document.querySelector('.pace-running.pace-running').classList.remove('pace-running');
//   });
// };

// const v = () => {
//   return (
//     o.useEffect(function () {
//       var e = document.querySelector('body');
//       p.QP ? (f(), e.classList.contains('hideX') && e.classList.remove('hideX')) : e.classList.add('hideX');
//     }, []),
//     (0, c.jsxs)(c.Fragment, {
//       children: [
//         (0, c.jsxs)('div', {
//           className: ''.concat(!0 === p.QP ? 'showX' : 'hideX'),
//           children: [
//             (0, c.jsxs)('div', {
//               className: 'loading',
//               children: [
//                 (0, c.jsx)('span', { children: 'L' }),
//                 (0, c.jsx)('span', { children: 'o' }),
//                 (0, c.jsx)('span', { children: 'a' }),
//                 (0, c.jsx)('span', { children: 'd' }),
//                 (0, c.jsx)('span', { children: 'i' }),
//                 (0, c.jsx)('span', { children: 'n' }),
//                 (0, c.jsx)('span', { children: 'g' }),
//               ],
//             }),
//             (0, c.jsx)('div', { id: 'preloader' }),
//           ],
//         }),
//         p.QP && (0, c.jsx)(i.default, { id: 'pace', strategy: 'beforeInteractive', src: '/js/pace.min.js' }),
//       ],
//     })
//   );
// };