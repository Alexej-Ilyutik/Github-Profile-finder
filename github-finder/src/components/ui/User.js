import React from 'react';

const User = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className='search-res'>
      <aside className='user'>
        <div className='user__img'>
          <img src={avatar_url} alt='avatar' />
        </div>
        <div className='user__content'>
          <h3>name</h3>
          <a href='#'>
            <h4>{login}</h4>
          </a>
          <div className='user__info info'>
            <div className='info__wrapper'>
              <div className='info__img followers'></div>
              <div className='info__value'>65.8K</div>
              <div className='info__text'>followers</div>
            </div>
            <div className='info__wrapper'>
              <div className='info__img following'></div>
              <div className='info__value'>171</div>
              <div className='info__text'>following</div>
            </div>
          </div>
        </div>
      </aside>
      <article className='repo'>
        <h2 className='repo__title'>
          Repositories &#40;<span>249</span>&#41;
        </h2>
        <section className='repo__container'>
          <a href='#' className='repo__name'>
            <h4>react-hot-loader</h4>
          </a>
          <p className='repo__description'>
            Tweak React components in real time. Deprecated: use Fast Refresh
            instead.
          </p>
        </section>
        <section className='repo__container'>
          <a href='#' className='repo__name'>
            <h4>overreacted.io</h4>
          </a>
          <p className='repo__description'>Personal blog by Dan Abramov.</p>
        </section>
        <section className='repo__container'>
          <a href='#' className='repo__name'>
            <h4>whatthefuck.is</h4>
          </a>
          <p className='repo__description'>
            An opinionated glossary of computer science terms for front-end
            developers. Written by Dan Abramov.
          </p>
        </section>
        <section className='repo__container'>
          <a href='#' className='repo__name'>
            <h4>react-deep-force-update</h4>
          </a>
          <p className='repo__description'>react-deep-force-update</p>
        </section>
        <div className='repo__pagination'>
          5-8 of 249 items &#60; 1 2 3 .... 10 &#62;
        </div>
      </article>
    </div>
  );
};

export default User;
