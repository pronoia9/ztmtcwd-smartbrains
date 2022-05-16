import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.css';

export default function ImageLinkForm({ text = 'Placeholder' }) {
  return (
    <Div id={['image-link-form']} classNames={['image-link']}>
      <input type='text' placeholder={text} />
      <button className='search fa-brands fa-searchengin' />
    </Div>
  );
}