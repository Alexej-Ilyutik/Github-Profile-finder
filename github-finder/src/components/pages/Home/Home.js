import React from 'react';
import './Home.scss';
import logo from '../../../assets/GitHub.svg';

const Home = () => {
  return (
    <div className='container'>
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
      <div className='search-results'>
        <div className='search-results__img'></div>
        <div>Start with searching a GitHub user</div>
      </div>
    </div>
  );
};

export default Home;
