import Div from '../General/Div';

export default function ImageFaceDetection({ imageURL }) {
  return (
    <Div classNames={['blog-pg single', 'container', 'row justify-content-center', 'col-lg-6', 'post', 'img']}>
      <img src={imageURL} alt='' />
    </Div>
  );
}