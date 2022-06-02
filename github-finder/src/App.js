import './App.scss';
import Home from './components/pages/Home/Home';
// import Main from './components/pages/Main/Main';
// import Empty from './components/pages/EmptyState/Empty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/main' element={<Main />} />
        <Route path='/empty' element={<Empty />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
