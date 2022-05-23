import React from 'react';
import Div from '../General/Div';
import './ImageForm.scss';

export default function ImageForm({ input, inputChange, buttonClick, clear }) {
  return (
    <Div id={['form-container', 'image-link-form']} classNames={['pt-20', 'image-link']}>
      <input type='text' value={input} placeholder='Enter an image URL' onChange={(e) => inputChange(e)} />
      <button className='search fa-brands fa-searchengin' onClick={buttonClick} />
      <button className={`clear${input.length > 0 ? ' fa-solid fa-xmark' : ''}`} onClick={clear} />
    </Div>
  );
}
