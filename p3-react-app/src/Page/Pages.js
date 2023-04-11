import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PopularRecipes from './PopularRecipes'
import Popular from '../components/Popular';
// import Home from './Home';

function Pages() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/popular-recipes/:id" element={<PopularRecipes />} />
    </Routes>

    </>
  )
}

export default Pages