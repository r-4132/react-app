import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import SearchResults from './SearchResults'
import './Pages.css'
import Bookmarks from './Bookmarks';
import AboutUs from './AboutUs';

// import Home from './Home';

function Pages() {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="about-us" >AboutUs</Link>
          </li>
        </ul>
      </nav>

    <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/search-results/:search" element={<SearchResults />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <SearchRecipes/>

    

    </>
  )
}

export default Pages