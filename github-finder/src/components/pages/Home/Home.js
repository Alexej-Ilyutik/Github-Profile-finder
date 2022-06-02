import React from 'react';
import './Home.scss';
import Header from '../Header/Header';
import logo from '../../../assets/GitHub.svg';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <div className='search-wrapper'>
        <div className='search-form'>
          <div className='search-form__logo'>
            <img src={logo} alt='Logo' />
          </div>
          <form>
            <input
              className='search-form__input'
              type='text'
              placeholder='Enter GitHub username'
            />
            <button >Search</button>
          </form>
        </div>
      </div>
      <div className='search-results'>
        <div className='search-results__img'></div>
        <p>Start with searching a GitHub user</p>
      </div>
    </div>
  );
};

export default Home;
