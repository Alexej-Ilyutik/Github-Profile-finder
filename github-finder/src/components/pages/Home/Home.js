import React, { useState } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from '../../../axios';
import logo from '../../../assets/GitHub.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/search/users?q=' + query);
      return data?.item;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  let navigate = useNavigate();

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      navigate('/result', { replace: true });
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log('You must enter a username!');
    }
  };

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
                value={query}
                onChange={handleQueryInput}
                className='search-form__input'
                type='text'
                placeholder='Enter GitHub username'
              />
              <button onClick={handleSearchUsers} className='search-form__btn'>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className='search-result'>
          {/* {users ? (
              users.map((user) => {
                return <UsersResult user={user} key={user.id} />;
              })
            ) : (
              <h2>Nothing found!</h2>
            )} */}
          <div className='search-result__user'>
            <div className='search-result__aside'>
              <div className='search-result__image'>
                <img src={logo} alt='Avatar' />
              </div>
              <div className='search-result__followers'>
                <div className='followers__img'></div>
                <div className='followers__value'>65.8K</div>
                <div className='followers__text'>followers</div>
              </div>
            </div>
            <div className='search-result__info'>
              <h3>login</h3>
              <h4>id</h4>
              <div className='search-result__repo'>
                <div className='repo__text'>Repositories -</div>
                <div className='repo__value'>65.8K</div>
              </div>
              <a href='#'>View profile</a>
              {/* <Link to={`/user/${login}`}>View profile</Link> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
