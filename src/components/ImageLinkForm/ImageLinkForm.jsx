import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.scss';

export default function ImageLinkForm({ input, placeholder, inputChange, buttonClick, clear }) {
  return (
    <Div id={['', 'image-link-form']} classNames={['pt-20', 'image-link']}>
      <input type='text' value={input} placeholder={placeholder} onChange={(e) => inputChange(e)} />
      <button className='search fa-brands fa-searchengin' onClick={buttonClick} />
      <button className={`clear${input.length > 0 ? ' fa-solid fa-xmark' : ''}`} onClick={clear} />
    </Div>
  );
}
