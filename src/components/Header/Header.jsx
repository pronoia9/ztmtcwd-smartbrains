import react from 'react';
import Div from '../General/Div';
import './Header.css';

export default function Header() {
  return (
    <Div classNames={['container', 'row justify-content-center', 'col-lg-10', 'cont text-center']}>
      <h1>
        <span className='color-font'>SmartBrains</span> will detect faces in your <span className='color-font'>pictures</span>.
      </h1>
    </Div>
  );
}