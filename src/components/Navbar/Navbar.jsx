/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.scss';

export default function Navbar({ logo, user, signout }) {
  return (
    <nav id='navigation' className='navbar navbar-expand-lg change'>
      <div className='container'>
        <a className='logo' href='/'><img src={logo.default} alt='logo' /></a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Home</a>
            </li>
            {/* <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown</span>
              <div className='dropdown-menu'><a className='dropdown-item' href='/blog/blog-dark/'>Dropdown Item</a></div>
            </li> */}
            <li className='nav-item'>
              { user ?
                <a className='nav-link' href='' onClick={() => signout()}>Sign Out</a> :
                <a className='nav-link' href=''>Sign In</a> }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
