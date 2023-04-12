import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  
  
  return (
    <div className='recipe_container'>
      <div className='reciepe_card'>
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
    </div>
  )
}

export default Recipe