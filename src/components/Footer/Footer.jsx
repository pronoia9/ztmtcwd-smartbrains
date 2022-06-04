import Div from '../General/Div';
import './Footer.scss';

export default function Footer() {
  return (
    <Div class='sub-bg'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-4'>
            <div class='item md-mb50'>
              <div class='title'>
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span class='icon pe-7s-map-marker'></span>
                  <div class='cont'>
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span class='icon pe-7s-mail'></span>
                  <div class='cont'>
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span class='icon pe-7s-call'></span>
                  <div class='cont'>
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-lg-4'>
            <div class='item md-mb50'>
              <div class='title'>
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div class='img'>
                    <a href='/blog-details/blog-details-dark/'>
                      <img src='/img/blog/1.jpg' alt='' />
                    </a>
                  </div>
                  <div class='sm-post'>
                    <a href='/blog-details/blog-details-dark/'>
                      <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                    </a>
                    <a href='/blog/blog-dark/'>
                      <span class='date'>14 sep 2022</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div class='img'>
                    <a href='/blog-details/blog-details-dark/'>
                      <img src='/img/blog/2.jpg' alt='' />
                    </a>
                  </div>
                  <div class='sm-post'>
                    <a href='/blog-details/blog-details-dark/'>
                      <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                    </a>
                    <a href='/blog/blog-dark/'>
                      <span class='date'>14 sep 2022</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div class='subscribe'>
                    <input type='text' placeholder='Type Your Email' />
                    <span class='subs pe-7s-paper-plane'></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-lg-4'>
            <div class='item'>
              <div class='logo'>
                <img src='/img/logo-light.png' alt='' />
              </div>
              <div class='social'>
                <a href='#0'>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a href='#0'>
                  <i class='fab fa-twitter'></i>
                </a>
                <a href='#0'>
                  <i class='fab fa-instagram'></i>
                </a>
                <a href='#0'>
                  <i class='fab fa-youtube'></i>
                </a>
              </div>
              <div class='copy-right'>
                <p>
                  © 2022, Vie Template. Made with passion by
                  <a target='_blank' href='https://themeforest.net/user/themescamp/portfolio'>
                    ThemesCamp
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}