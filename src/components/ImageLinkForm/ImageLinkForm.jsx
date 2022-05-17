import React from 'react';
import Div from '../General/Div';
import './ImageLinkForm.scss';

export default function ImageLinkForm({ input, placeholder, inputChange, buttonClick }) {
  return (
    <Div id={['image-link-form']} classNames={['image-link']}>
      <input type='text' value={input} placeholder={placeholder} onChange={(e) => inputChange(e)} />
      <button className={`clear${input.length > 0 && ' fa-solid fa-xmark'}`} onClick={buttonClick} />
      <button className='search fa-brands fa-searchengin' onClick={buttonClick} />
    </Div>
  );
}
