import React from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div className='search-wrapper'>
          <div className='search-form'>
            <h3>
              Check out the repos, followers and more, just by entering a
              username:
            </h3>
            <form className='search-form__container'>
              <input
                className='search-form__input'
                type='text'
                placeholder='Enter GitHub username'
              />
              <button className='search-form__btn'>Search</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
