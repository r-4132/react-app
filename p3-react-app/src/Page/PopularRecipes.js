import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const checkLocal = localStorage.getItem('popular');

    if (checkLocal) {
      setPopularRecipes(JSON.parse(checkLocal));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
      const data = await api.json();
      setPopularRecipes(data.recipes);
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  };

  return (
    <div className="popular_recipes_container">
      {popularRecipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="popular_recipes">
            <img src={recipe.image} alt={recipe.title} />
            <p className="recipes_title">{recipe.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PopularRecipes;
