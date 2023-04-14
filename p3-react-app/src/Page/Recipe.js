import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating';
import Comment from '../components/Comment'

function Recipe() 
{
  let params = useParams(); // will extract name from url
  const [ingredients, setIngredients] = useState({}); // 

  const fetchRecipes = async() => // I wanted to try different ways to fetch data from api.
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
    const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || []; // if nothing is stored in "bookmarkedRecipes", the fallback value || [] will assigns it to an empty array 
     
    if (bookmarkedRecipes.find(recipe => recipe.id === ingredients.id)) 
    {
      const filteredRecipes = bookmarkedRecipes.filter(recipe => recipe.id !== ingredients.id); // filter out the 
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
      <Comment/>


    </div>
  )
}

export default Recipe