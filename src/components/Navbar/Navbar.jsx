import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg change'>
      <div className='container'>
        <a className='logo' href='/'><img src={require('../../images/logo.png')} alt='logo' /></a>
        {/* <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='icon-bar'><i className='fas fa-bars'></i></span>
        </button> */}
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