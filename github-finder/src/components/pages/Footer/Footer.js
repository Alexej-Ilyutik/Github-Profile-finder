import React from 'react';
import './Footer.scss';
import logo from '../../../assets/GitHub.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__link'>
        <img src={logo} alt='GitHub' />
        <a
          href='https://github.com/Alexej-Ilyutik'
          target='_blank'
          rel='noreferrer'
        >
          Alexej Ilyutik
        </a>
      </div>
      <p className='footer__year'>2022</p>
    </footer>
  );
};

export default Footer;
