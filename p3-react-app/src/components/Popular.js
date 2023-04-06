import React, { useEffect, useState } from 'react';

function Popular() 
{
  const [popular, setPopular] = useState([]);

  useEffect(() =>
  {
    getPopularRecipes();
    
  },[]);
  const getPopularRecipes  = async () =>
  {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`) // ctrl + c when implementing .env
    const data = await api.json(); 
    console.log(data);
  }
  return (
    <div>Popular</div>
  )
}

export default Popular;