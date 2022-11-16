import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Categories from './Components/Categories';
import AllReviews from './Components/AllReviews';
import CategoryReviews from './Components/CategoryReviews';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:category" element={<CategoryReviews />} />
          <Route path="allreviews" element={<AllReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
