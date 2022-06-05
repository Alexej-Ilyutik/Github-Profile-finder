import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from '../../../axios';
import './User.scss';
import Repo from '../../ui/Repo';
import location from '../../../assets/icon-marker.svg';

const User = () => {
  const { login } = useParams();
  //UserInformation
  const [userInfo, setUserInfo] = useState({});
  //User repos
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, [login]);

  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div className='search-res'>
          <aside className='user'>
            <div className='user__img'>
              <img src={userInfo?.avatar_url} alt='avatar' />
            </div>
            <div className='user__content'>
              <h3>{userInfo?.name}</h3>
              <a
                className='user__page'
                href={userInfo?.html_url}
                rel='noreferrer'
                target='_blank'
              >
                <h4>{userInfo?.login}</h4>
              </a>
              <div className='user__location location'>
                {userInfo?.location && (
                  <p className='location__text'>
                    <img src={location} alt='' />
                    {userInfo?.location}
                  </p>
                )}
              </div>
              <div className='user__info info'>
                <div className='info__wrapper'>
                  <div className='info__img followers'></div>
                  <div className='info__value'>{userInfo?.followers}</div>
                  <div className='info__text'>followers</div>
                </div>
                <div className='info__wrapper'>
                  <div className='info__img following'></div>
                  <div className='info__value'>{userInfo?.following}</div>
                  <div className='info__text'>following</div>
                </div>
              </div>
              <Link to='/' className='user__btn'>
                {' '}
                &#9668; Return
              </Link>
            </div>
          </aside>
          <article className='repo'>
            <h2 className='repo__title'>
              Repositories &#40;<span>{userInfo?.public_repos}</span>&#41;:
            </h2>
            {repos ? (
              repos.map((repo) => {
                return <Repo repo={repo} key={repo.id} />;
              })
            ) : (
              <h2>No repos for this user...</h2>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default User;
