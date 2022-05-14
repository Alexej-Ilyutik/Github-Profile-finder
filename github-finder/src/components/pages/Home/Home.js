import React from 'react';
import './Home.scss';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <div className='search-results'>
        <div className='search-results__img'></div>
        <div>Start with searching a GitHub user</div>
      </div>
    </div>
  );
};

export default Home;
