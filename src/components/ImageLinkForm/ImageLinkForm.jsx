import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.css';

export default function ImageLinkForm({ placeholder }) {
  return (
    <Div id={['image-link-form']} classNames={['image-link']}>
      <input type='text' placeholder={placeholder} />
      <button className='search fa-brands fa-searchengin' />
    </Div>
  );
}