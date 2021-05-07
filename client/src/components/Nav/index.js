import React from 'react';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <a className='navbar-brand' href='/'>
        Search the Library
      </a>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <a className='nav-link' href='/saved'>
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
