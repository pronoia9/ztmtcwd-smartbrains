import React from 'react';
import Div from '../General/Div';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';

export default function Body() {
  return (
    <Div classNames={['container']}>
      <Div classNames={['page-header', 'container', 'row justify-content-center', 'col-lg-10 col-md-8', 'cont text-center']}>
        <h2 className='mb-10'>
          <span className='color-font'>Andrei</span> you are ranked <span className='color-font'>#5</span>
        </h2>
        <ImageLinkForm />
      </Div>
      <Div classNames={['blog-pg single section-padding pt-0', 'container', 'row justify-content-center', 'col-lg-11', 'post', 'img']}>
        <img src='https://www.goodworklabs.com/wp-content/uploads/2020/06/Face-recognition-technology.png' alt='' />
      </Div>
    </Div>
  );
}