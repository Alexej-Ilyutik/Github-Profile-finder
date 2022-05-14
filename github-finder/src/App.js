import './App.scss';
import Home from './components/pages/Home/Home';
import User from './components/pages/User/User';
import Empty from './components/pages/EmptyState/Empty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/empty' element={<Empty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
