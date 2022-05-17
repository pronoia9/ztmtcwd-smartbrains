import React from 'react';
import Div from '../General/Div';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import ImageFaceDetection from '../ImageFaceDetection/ImageFaceDetection';

export default function Body({ name, rank, input, placeholder, inputChange, buttonClick, clear }) {
  return (
    <Div classNames={['container']}>
      <Div classNames={['page-header', 'row justify-content-center', 'col-lg-10 col-md-8', 'cont text-center']}>
        <h2 className='mb-10'>
          <span className='color-font'>{name}</span> you are ranked <span className='color-font'>#{rank}</span>.
        </h2>
        <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
        <ImageLinkForm input={input} placeholder={placeholder} inputChange={inputChange} buttonClick={buttonClick} clear={clear} />
      </Div>
      <ImageFaceDetection input={input} />
    </Div>
  );
}
