import Div from '../General/Div';
import './Image.scss';

export default function Image({ imageURL, boxes }) {
  return (
    <Div classNames={['container pb-60', 'row justify-content-center', 'col-lg-6', 'img']}>
      <img id='input-image' src={imageURL} alt='' />
      {boxes && boxes.map((box, idx) => (
        <div className='bounding-box' style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }} key={idx}></div>
      ))}
    </Div>
  );
}