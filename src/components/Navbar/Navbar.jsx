/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({ logo, user, signout }) {
  return (
    <nav id='navigation' className='navbar navbar-expand-lg change'>
      <div className='container'>
        <a className='logo' href='/'>
          <img src={logo.default} alt='logo' />
        </a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/'><span className='nav-link'>Home</span></Link>
            </li>
            {/* <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown</span>
              <div className='dropdown-menu'><a className='dropdown-item' href='/blog/blog-dark/'>Dropdown Item</a></div>
            </li> */}
            {user ? (
              <li className='nav-item'>
                <Link to={`/profile/${user.id}`}><span className='nav-link'>{user.username}</span></Link>
                <Link to='/'><span className='nav-link' onClick={() => signout()}>Sign Out</span></Link>
              </li>
            ) : (
              <li className='nav-item'>
                <Link to='/clarifai'><span className='nav-link'>Try It</span></Link>
                <Link to='/signin'><span className='nav-link'>Sign In</span></Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
