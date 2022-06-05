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
      </div>
      <div className='search-result__info'>
        <h3>Login: <span>{login}</span></h3>
        <h4>ID: {id}</h4>
        <Link to={`/user/${login}`}>View profile</Link>
      </div>
    </div>
  );
};

export default User;
