import Div from '../General/Div';

export default function ImageFaceDetection({ imageURL }) {
  return (
    <Div classNames={['blog-pg single pb-60', 'container', 'row justify-content-center', 'col-lg-6', 'post', 'img']}>
      <img id='input-image' src={imageURL} alt='' />
    </Div>
  );
}