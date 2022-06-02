import './App.scss';
import Home from './components/pages/Home/Home';
import Result from './components/pages/Result/Result';
import Empty from './components/pages/EmptyState/Empty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/empty' element={<Empty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
