import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
   const { avatar_url, login, id } = user;
  return (
    <div className='search-result__user'>
      <div className='search-result__aside'>
        <div className='search-result__image'>
          <img src={avatar_url} alt='Avatar' />
        </div>
        <div className='search-result__followers'>
          <div className='followers__img'></div>
          <div className='followers__value'>65.8K</div>
          <div className='followers__text'>followers</div>
        </div>
      </div>
      <div className='search-result__info'>
        <h3>{login}</h3>
        <h4>{id}</h4>
        <div className='search-result__repo'>
          <div className='repo__text'>Repositories -</div>
          <div className='repo__value'>65.8K</div>
        </div>
        <Link to={`/user/${login}`}>View profile</Link>
      </div>
    </div>
  );
};

export default User;
