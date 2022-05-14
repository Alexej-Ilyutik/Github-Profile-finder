import React from 'react';
import './Empty.scss';
import Header from '../Header/Header';

const Empty = () => {
  return (
    <div className='container'>
      <Header />
      <div className='search-results-empty'>
        <div className='search-results-empty__img'></div>
        <div>User not found</div>
      </div>
    </div>
  );
};

export default Empty;
