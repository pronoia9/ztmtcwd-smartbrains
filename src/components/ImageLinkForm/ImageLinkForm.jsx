import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.css';

export default function ImageLinkForm({text}) {
  return (
    <Div classNames={['image-link']}>
      <input type='text' placeholder='Placeholder' />
      <button className='search fa-brands fa-searchengin' />
    </Div>
  );
}
