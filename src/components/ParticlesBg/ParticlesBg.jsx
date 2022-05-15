import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../data/particles.json';
import './ParticlesBg.css';

export default function ParticlesBg() {
  return (
    <div className='gradient-circles'>
      <Particles options={particlesOptions} init={useCallback((main) => { loadFull(main) }, [])}/>
      <div className='gradient-circle'></div>
      <div className='gradient-circle two'></div>
      <div className='line bottom left'></div>
    </div>
  );
}