import Div from '../General/Div';
import ItemBox from './ItemBox';
import FormGroup from '../Forms/FormGroup';
import './Profile.scss';

export default function Profile() {
  return (
    <Div classNames={['freelancre valign']}>
      <Div classNames={['container']}>
        <Div classNames={['row']}>
          <Div classNames={['col-lg-4 valign', 'img']}>
            <img
              src='https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1654081377~hmac=1170aad42c9c3c1f134887b100af0485'
              alt=''
            />
          </Div>
          <Div classNames={['col-lg-8 valign', 'services box lficon position-re', 'container', 'row']}>
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
          </Div>
        </Div>
        <Div classNames={['states', 'container']}>
          <ul className='flex'>
            <li className='flex'>
              <Div classNames={['numb valign']}>
                <h3>12</h3>
              </Div>
              <Div classNames={['text valign']}>
                <p>
                  Images <br /> Searched
                </p>
              </Div>
            </li>
            <li className='flex'>
              <Div classNames={['numb valign']}>
                <h3>5</h3>
              </Div>
              <Div classNames={['text valign']}>
                <p>
                  Days Of <br /> Membership
                </p>
              </Div>
            </li>
            <li className='mail-us'>
              <a href='mailto:your@email.com?subject=Subject'>
                <Div classNames={['flex']}>
                  <Div classNames={['text valign', 'full-width']}>
                    <p>Get In Touch</p>
                    <h6>Vie_Support@Gmail.Com</h6>
                  </Div>
                  <Div classNames={['mail-icon', 'icon-box']}>
                    <span className='icon color-font pe-7s-mail'></span>
                  </Div>
                </Div>
              </a>
            </li>
          </ul>
        </Div>
      </Div>

      <div className='line bottom left'></div>
    </Div>
  );
}
