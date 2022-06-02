import React from 'react';
import './Result.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import avatar from '../../../assets/image.jpg';
import {Link} from "react-router-dom"

const Result = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div className='search-result'>
          <div className='search-result__image'>
            <img src={avatar} alt='Avatar' />
          </div>
          <div className='search-result__info info'>
            <h3>Name of the User</h3>
            <h4>Nickname</h4>
            <div className='info__wrapper repo'>
              <div className='info__text'>Repositories -</div>
              <div className='repo__value'>65.8K</div>
            </div>
            <div className='info__wrapper followers'>
              <div className='followers__img'></div>
              <div className='followers__value'>65.8K</div>
              <div className='info__text'>followers</div>
            </div>
            <a href='https://github.com/Nitesh-yadav-code'>View profile</a>
          </div>
        </div>
        <Link to="/" className='btn-return'>Return</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Result;
