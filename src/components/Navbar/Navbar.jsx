import React from 'react';
import './Navbar.scss';

export default function Navbar({ logo }) {
  return (
    <nav className='navbar navbar-expand-lg change'>
      <div className='container'>
          <a className='logo' href='/'><img src={logo} alt='logo' /></a>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'><a className='nav-link' href='/'>Home</a></li>
            <li className='nav-item'><a className='nav-link' href='/about'>About</a></li>
            <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown</span>
              <div className='dropdown-menu'><a className='dropdown-item' href='/blog/blog-dark/'>Dropdown Item</a></div>
            </li>
            <li className='nav-item'><a className='nav-link' href='/sign'>Sign In/Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}