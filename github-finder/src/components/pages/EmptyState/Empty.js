import React from 'react';
import './Empty.scss';
import Header from '../Header/Header';

const Empty = () => {
  return (
    <div className='container'>
      <Header />
      <div className='search-results-empty'>
        <div className='search-results-empty__img'></div>
        <p>User not found</p>
      </div>
    </div>
  );
};

export default Empty;
