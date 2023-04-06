import React, { useEffect, useState } from 'react';

function Popular() 
{
  const [popularRecipes, setPopularRecipes] = useState([]);
  

  useEffect(() =>
  {
    getPopularRecipes();
    
  },[]);
  const getPopularRecipes  = async () =>
  {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`) // ctrl + c when implementing .env
    const data = await api.json(); 
    console.log(data);
    setPopularRecipes(data.recipes)
  };
  return (
    <div className='popular_recipes_container'>
      {
        popularRecipes.map(recipes =>
          {
            return(
              <div className='popular_recipes'key ={recipes.id}>
                <p className='recipes_title'>{recipes.title}</p>
                <img src={recipes.image} alt={recipes.title}/>
              </div>

            );
          })
      }
    </div>
  )
}

export default Popular;