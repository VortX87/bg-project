import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Categories from './Components/Categories';
import AllReviews from './Components/AllReviews';
import ReviewPage from './Components/ReviewPage';
import SingleReview from './Components/SingleReview';
import { useState } from 'react'


function App() {

  const [pickedCat, setPickedCat] = useState('')
  const [pickedArt, setPickedArt] = useState('')

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories setPickedCat={setPickedCat} />} />
          <Route path="categories/:category" element={<ReviewPage pickedCat={pickedCat} />} />
          <Route path="allreviews" element={<AllReviews setPickedArt={setPickedArt} />} />
          <Route path="allreviews/:review_id" element={<SingleReview pickedArt={pickedArt} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
