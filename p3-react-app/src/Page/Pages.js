import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import PopularRecipes from './PopularRecipes'
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';

// import Home from './Home';

function Pages() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        {/* <Route path="/search-recipes/:search" element={<SearchRecipes />} /> */}
    </Routes>
    <SearchRecipes/>

    </>
  )
}

export default Pages