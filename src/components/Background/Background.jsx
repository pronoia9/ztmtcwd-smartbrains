import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Background.scss';

export default function ParticlesBg({ data }) {
  return (
    <div className='gradient-circles'>
      <Particles options={data} init={useCallback((main) => { loadFull(main) }, [])}/>
      <div className='gradient-circle'></div>
      <div className='gradient-circle two'></div>
      <div className='line bottom left'></div>
    </div>
  );
}