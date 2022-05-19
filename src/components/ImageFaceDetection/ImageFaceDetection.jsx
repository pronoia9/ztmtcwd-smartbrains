import Div from '../General/Div';
import './ImageFaceDetection.scss';

export default function ImageFaceDetection({ imageURL, boxes }) {
  return (
    <Div ids={['image-face-detection ']} classNames={['container pb-60', 'row justify-content-center', 'col-lg-6', 'img']}>
      <img id='input-image' src={imageURL} alt='' />
      {boxes.map((box, idx) => (
        <div className='bounding-box' style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }} key={idx}></div>
      ))}
    </Div>
  );
}