import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  //const color = process.env.REACT_APP_THEME_PRIMARY_COLOR;

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img
            height='60'
            width='60'
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            className='d-inline-block'
            alt='LOGO'
          />{' '}
          {process.env.REACT_APP_WEBSITE_TITLE}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <NavLink path='/' name='Home' />
            <NavLink path='/passoword-generator' name='Password Generator' />
            <DropDown name='Encoder/Decoder' path='/encoder-decoder'>
              <DropDownLink path='/base64' name='Base64 Encode and Decode' />
            </DropDown>
            <NavLink path='/about' name='About' />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ path, name }) {
  const location = useLocation();

  return (
    <li className='nav-item'>
      <Link
        className={'nav-link ' + (location.pathname === path ? 'active' : '')}
        aria-current='page'
        to={path}
      >
        {name}
      </Link>
    </li>
  );
}

function DropDown(props) {
  const { name = 'Drop Down', /*path = '',*/ children = '-NA-' } = props;
  return (
    <li className='nav-item dropdown'>
      <a
        className='nav-link dropdown-toggle'
        href='#EncodersDecoders'
        id='encoderDecoder'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {name}
      </a>
      <ul className='dropdown-menu' aria-labelledby='encoderDecoder'>
        {children}
      </ul>
    </li>
  );
}

function DropDownLink({ path, name }) {
  // To identify which page is active
  /*const location = useLocation();*/

  return (
    <li>
      <Link className='dropdown-item' to={path}>
        {name}
      </Link>
    </li>
  );
}

export default NavBar;
