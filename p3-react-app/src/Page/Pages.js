import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import SearchResults from './SearchResults'
import './Pages.css'
import Bookmarks from './Bookmarks';
import AboutUs from './AboutUs';
import styled from 'styled-components';

const Nav = styled.div`
color:white;
display:flex;
// margin: 10px;
background-color:#d54b1a;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


ul
{
  margin: 10px;
  align-items: center;
  padding: 0;
  list-style: none;
  
}

a
{
  color: #f0ecc9;
  text-decoration: none;
  font-family:'JosefinSans-SemiBold';

  font-weight:bold;

}
`

const CustomText = styled.div`
font-family:'JosefinSans-SemiBold';
font-size:26px;
`


function Pages() {
  return (
    <>
    <Nav>
      <CustomText>
        SIPSIP
      </CustomText>
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