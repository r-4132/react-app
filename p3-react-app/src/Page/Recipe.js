import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../components/StarRating';
import Comment from '../components/Comment'
import styled from 'styled-components';
import './Pages.css'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'JosefinSans-SemiBold', Courier, monospace;
  color: #333333;


  button[type="submit"] 
  {
    background-color: #458788;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
  }

  button[type="submit"]:hover 
  {
    background-color: #ff6b6b;
  }
  
`;
const Image = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;

  img 
  {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  width:80%;
`;
const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 20px;

  
`;

const BookmarkButton = styled.button`
  font-size: 16px;
  background-color: #c1a35f;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 20px;
  cursor: pointer;

  &:hover 
  {
    background-color: #333333;
    color: #c1a35f;
  }
`;

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

  useEffect(() => // fetc recipe data whenever params.name changes
  {
    fetchRecipes();
  }, [params.name]);


  const handleBookmark = () => 
  {
    const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || []; // if nothing is stored in "bookmarkedRecipes", the fallback value || [] will assigns it to an empty array 
     
    if (bookmarkedRecipes.find(recipe => recipe.id === ingredients.id)) 
    {
      const filteredRecipes = bookmarkedRecipes.filter(recipe => recipe.id !== ingredients.id); // filter out the and find the recipe that matches the current ingredients.id
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(filteredRecipes)); // save it to filteredRecipes that is being converted to JSON STRING BY JSON.stringify in order to be stored as a text
    } 
    else 
    {
      bookmarkedRecipes.push(ingredients); // pushed to the bookmarkedRecipes array 
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(bookmarkedRecipes)); //updated array is stored in the local storage, essential removing it from the local storage
    }
  }
  
  
  return (
    <Container>
      <Card>
        <h1 className='ingredients_title'>{ingredients.title}</h1>
        <Image><img src={ingredients.image} alt={ingredients.title} /></Image>
        <h3>Directions</h3>
        {/* dangerouslySetInnerHTML the render out the html code from the api */}
        <br></br>
        <p dangerouslySetInnerHTML={{__html: ingredients.instructions}}></p>
      <br></br>

      <IngredientsContainer>
        {
          ingredients.extendedIngredients && ingredients.extendedIngredients.map((items) => ( //define ingredients.extendedIngredients to prevent error
          <li key ={items.id}>{items.original}</li>
          ))
        }
      </IngredientsContainer>
      <BookmarkButton onClick={handleBookmark}>Bookmark</BookmarkButton>
      <StarRating/>
      <Comment/>
        </Card>


    </Container>
  )
}

export default Recipe