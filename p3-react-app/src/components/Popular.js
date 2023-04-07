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
    const checkLocal = localStorage.getItem('popular'); // prevents data from fetching always if theres is local storage

    if(checkLocal) // if there is local storage, no need to fetch datajust load what's inside local storage
    {
      setPopularRecipes(JSON.parse(checkLocal));
    }
    else
    {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`) // ctrl + c when implementing .env, env. if a way to hide api key.
      const data = await api.json(); 
      console.log(data);
      setPopularRecipes(data.recipes)
      
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  };
  return (
    <div className='popular_recipes_container'>
      {
        popularRecipes.map(recipes =>
          {
            return(
              <div className='popular_recipes'key ={recipes.id}>
                <img src={recipes.image} alt={recipes.title}/>
                <p className='recipes_title'>{recipes.title}</p>
              </div>

            );
          })
      }
    </div>
  )
}

export default Popular;