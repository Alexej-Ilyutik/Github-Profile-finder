import React from 'react';
import './Header.scss';
// import axios from '../../../axios';
// import ReactDOM from 'react-dom';

const Header = () => {
  // const [user, setQuery] = useState('');

  // const handleQueryInput = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  // };

  // const fetchUsers = async () => {
  //   try {
  //     const { data } = await axios.get('/users/' + user);

  //     window.location.assign('http://localhost:3000/main');
  //     console.log(data);
  //     return data

  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // const handleSearchUsers = async (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     if (user) {
  //       await fetchUsers();
  //     } else {
  //       console.log('Your query is empty!');
  //     }
  //   }
  // };

  return (
    <header className='header'>
      <h1>GitHub Finder APP</h1>
    </header>
  );
};

export default Header;
