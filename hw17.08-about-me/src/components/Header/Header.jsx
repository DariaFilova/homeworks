import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <nav>
          <ul className='header_list'>
            <li>
              <a href='#about'>Home</a>
            </li>
            <li>
              <a href='#about'>About me</a>
            </li>
            <li>
              <a href='#hobbies'>Hobbies</a>
            </li>
            <li>
              <a href='#movies'>Movies</a>
            </li>
            <li>
              <a href='#dream'>Dream</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

