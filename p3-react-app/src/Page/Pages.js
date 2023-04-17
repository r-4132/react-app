import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import SearchResults from './SearchResults'
import './Pages.css'
import Bookmarks from './Bookmarks';
import AboutUs from './AboutUs';
import { Nav} from '../components/Style';
import styled from 'styled-components';
import logoImage from '../components/Logo.png'

const LogoImage = styled.img`
  width: 2rem;
  transform: scale(3);
  margin: 20px 20px 0px;
  // padding: 10px;
`;

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
            <Link to="about-us" >AboutUs</Link>
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