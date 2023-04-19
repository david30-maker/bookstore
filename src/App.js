import { Routes, Route } from 'react-router-dom';
import Books from './routes/book';
import Categories from './routes/categories';
import Navbar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
