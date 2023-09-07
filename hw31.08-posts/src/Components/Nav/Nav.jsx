import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/posts', text: 'Posts' },
];

const Nav = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <div className='nav_links'>
          {navLinks.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;

