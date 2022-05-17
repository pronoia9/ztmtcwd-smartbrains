import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.css';

export default function ImageLinkForm({ inputChange, placeholder, onClick }) {
  return (
    <Div id={['image-link-form']} classNames={['image-link']}>
      <input type='text' placeholder={placeholder} onChange={(e) => inputChange(e)} />
      <button className='search fa-brands fa-searchengin' onClick={onClick} />
    </Div>
  );
}
