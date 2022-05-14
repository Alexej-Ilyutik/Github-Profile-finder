import React from 'react';
import './Header.scss';
import logo from '../../../assets/GitHub.svg';

const Header = () => {
  return (
    <div className='search-wrapper'>
      <div className='search-form'>
        <div className='search-form__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <input
          className='search-form__input'
          type='text'
          placeholder='Enter GitHub username'
        />
      </div>
    </div>
  );
};

export default Header;
