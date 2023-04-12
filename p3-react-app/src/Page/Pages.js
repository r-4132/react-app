import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import PopularRecipes from './PopularRecipes'
import Popular from '../components/Popular';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import SearchResults from './SearchResults'

// import Home from './Home';

function Pages() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search-results/:search" element={<SearchResults />} />
    </Routes>
    <SearchRecipes/>

    </>
  )
}

export default Pages