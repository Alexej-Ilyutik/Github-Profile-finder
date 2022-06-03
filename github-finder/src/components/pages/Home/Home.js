import React, { useState, useEffect } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import User from '../../ui/User';
import axios from '../../../axios';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handlePrevPage = () => {
    setPage((page) => {
      if (page === 1) return page;
      else return page - 1;
    });
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/search/users?q=' + query, {
        params: {
          page,
          per_page: limit,
        },
      });
      return data?.items;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // let navigate = useNavigate();

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      // navigate('/result', { replace: true });
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log('You must enter a username!');
    }
  };

  useEffect(() => {
    const displayUsersOnChange = async () => {
      if (query) {
        const items = await fetchUsers();
        setUsers(items);
      }
    };
    displayUsersOnChange();
  }, [page, limit]);

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
          <div className='more-options'>
            <label className='more-options__block'>
              <h3 className='more-options__title'>Per Page</h3>
              <select onChange={handlePageLimit}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </label>
            <div className='pagination'>
              <button onClick={handlePrevPage}>&#171; &#8194;{page}</button>
              <button onClick={handleNextPage}>
                {page + 1} &#8194; &#187;
              </button>
            </div>
          </div>
          {users ? (
            users.map((user) => {
              return <User user={user} key={user.id} />;
            })
          ) : (
            <h2>Nothing found!</h2>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
