import Div from '../General/Div';
import FooterColumn from './FooterColumn';
import './Footer.scss';

export default function Footer({ logo }) {
  return (
    <Div ids={['footer']} classNames={['sub-bg', 'container', 'row']}>
      <FooterColumn classNames={['col-lg-6', 'item']}>
        <ul>
          <li>
            <span className='icon pe-7s-mail'></span>
            <Div classNames={['cont']}>
              <h6>Contact Us</h6>
              <p>support@smartbrains.com</p>
            </Div>
          </li>
          <li>
            <Div classNames={['subscribe']}>
              <input type='text' placeholder='Type Your Email' />
              <span className='subs pe-7s-paper-plane'></span>
            </Div>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn classNames={['col-lg-6', 'item']}>
        <Div classNames={['logo']}>
          <img src={logo.default} alt='' />
        </Div>

        <Div classNames={['copy-right']}>
          <p>
            © {new Date().getFullYear()}, Vie Template. Made with passion by{' '}
            <a target='_blank' rel='noreferrer' href='https://vie-react.vercel.app/homepage/home5-dark/'>
              ThemesCamp
            </a>
            .
          </p>
        </Div>
      </FooterColumn>
    </Div>
  );
}