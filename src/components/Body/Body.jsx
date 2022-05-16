import React from 'react';
import Div from '../General/Div';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

export default function Body({ user = 'Andrei', rank = 5 }) {
  return (
    <Div classNames={['container']}>
      <Div classNames={['page-header', 'row justify-content-center', 'col-lg-10 col-md-8', 'cont text-center']}>
        <h2 className='mb-10'>
          <span className='color-font'>{user}</span> you are ranked <span className='color-font'>#{rank}</span>.
        </h2>
        <Div classNames={['pt-40 pb-20']}>
          <ImageLinkForm />
        </Div>
      </Div>
      <Div classNames={['blog-pg single', 'container', 'row justify-content-center', 'col-lg-6', 'post', 'img']}>
        <img src='https://www.goodworklabs.com/wp-content/uploads/2020/06/Face-recognition-technology.png' alt='' />
      </Div>
    </Div>
  );
}