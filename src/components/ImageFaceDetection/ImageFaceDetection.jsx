import Div from '../General/Div';

export default function ImageFaceDetection({ input }) {
  return (
    <Div classNames={['blog-pg single', 'container', 'row justify-content-center', 'col-lg-6', 'post', 'img']}>
      <img src={input} alt='' />
    </Div>
  );
}