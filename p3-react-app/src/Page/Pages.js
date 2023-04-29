import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import SearchResults from './SearchResults'
import '../assets/Pages.css'
import Bookmarks from './Bookmarks';
import AboutUs from './AboutUs';
import { Nav, LogoImage } from '../assets/Style';
import logoImage from '../assets/Logo.png'



function Pages() {
  return (
    <>
    <Nav>
    <LogoImage src={logoImage} alt="Logo" />
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
            <Link to="about-us" >About</Link>
          </li>
        </ul>
      </Nav>

    <SearchRecipes/>
    <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/search-results/:search" element={<SearchResults />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/about-us" element={<AboutUs />} />
    </Routes>

    

    </>
  )
}




export default Pages