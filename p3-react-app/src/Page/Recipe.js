import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating';
import Comment from '../components/Comment'

function Recipe() 
{
  let params = useParams();
  const [ingredients, setIngredients] = useState({});

  const fetchRecipes = async() =>
  {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    
    const ingredientsData = await data.json();
    setIngredients(ingredientsData);
    console.log(ingredientsData);

  };

  useEffect(() =>
  {
    fetchRecipes();
  }, [params.name]);


  const handleBookmark = () => 
  {
    const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];
    const isAlreadyBookmarked = bookmarkedRecipes.find(recipe => recipe.id === ingredients.id);
    
    if (isAlreadyBookmarked) 
    {
      const filteredRecipes = bookmarkedRecipes.filter(recipe => recipe.id !== ingredients.id);
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(filteredRecipes));
    } 
    else 
    {
      bookmarkedRecipes.push(ingredients);
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(bookmarkedRecipes));
    }
  }
  
  
  return (
    <div className='recipe_container'>
      <div className='recipe_card'>
        <img src={ingredients.image} alt={ingredients.title} />
        <p dangerouslySetInnerHTML={{__html: ingredients.summary}}></p>
        <br></br>
        <p dangerouslySetInnerHTML={{__html: ingredients.instructions}}></p>
      </div>
      <br></br>
        <h3 className='ingredients_title'>{ingredients.title}</h3>

      <ul>
        {
          ingredients.extendedIngredients && ingredients.extendedIngredients.map((items) => ( //define ingredients.extendedIngredients to prevent error
            <li key ={items.id}>{items.original}</li>
          ))
        }
      </ul>
      <button onClick={handleBookmark}>Bookmark</button>
      <StarRating/>
      {/* <Comment/> */}


    </div>
  )
}

export default Recipe