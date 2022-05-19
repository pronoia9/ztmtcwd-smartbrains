import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import CircleBg from './CircleBg';
import './Background.scss';

export default function ParticlesBg({ data }) {
  return (
    <div id='background-container'>
      <Particles options={data} init={useCallback((main) => { loadFull(main) }, [])}/>
      <CircleBg />
    </div>
  );
}