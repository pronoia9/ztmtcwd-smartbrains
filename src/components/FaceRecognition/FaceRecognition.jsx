import React from 'react';
import Div from '../General/Div';
import ImageForm from './ImageForm';
import Image from './Image';

export default function ImageDetection({ state, setState, input, imageURL, boxes, inputChange, buttonClick, clear }) {
  const user = state.user;

  return (
    <Div classNames={['face-recognition section-padding position-re mh-100vh']}>
      <Div classNames={['container']}>
        <Div classNames={['page-header', 'row justify-content-center', 'col-lg-10 col-md-8', 'cont text-center']}>
          <h2 className='mb-10'>
            <span className='color-font'>{user.name ? user.name : user.username}</span> you have successfully detected <span className='color-font'>{user.entries}</span> images.
          </h2>
          <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
          {/* <ImageForm input={input} inputChange={inputChange} buttonClick={buttonClick} clear={clear} /> */}
        </Div>
        {/* <Image imageURL={imageURL} boxes={boxes} /> */}
      </Div>
      <div className='line bottom right'></div>
    </Div>
  );
}