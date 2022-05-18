import Div from '../General/Div';
import './ImageFaceDetection.scss';

export default function ImageFaceDetection({ imageURL, box }) {
  return (
    <Div classNames={['blog-pg single pb-60', 'container', 'row justify-content-center', 'col-lg-6', 'post', 'img']}>
      <img id='input-image' src={imageURL} alt='' />
      {box && <div id='bounding-box' style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}></div>}
    </Div>
  );
}