import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchBox,Card } from "../components/Style";
import styled from "styled-components";

const ContainerTypes = styled.div`
display: flex;  
flex-direction:row;
width: 80%;
font-family: 'JosefinSans-SemiBold', Courier, monospace;
justify-content: center;



`

const DishTypes = styled.div`
margin: 10px;
`
const DietTypes = styled.div`
margin: 10px;

`



const SearchRecipes = () => 
{
  const [searchInput, setSearchInput] = useState('');
  const [dishTypes, setDishTypes] = useState([]);
  const [dietTypes, setDietTypes] = useState([]);

  const navigate = useNavigate(); // from react-router-dom library

  const handleSearch = async (event) => 
  {
    event.preventDefault();

    try{
      const ingredientsArray = searchInput.split(' '); // will split up ingredients typed by the user into spaces

      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', 
      {
          params: {
              apiKey: process.env.REACT_APP_API_KEY,
              ingredients: ingredientsArray.join(','), // this will join the by comma which is required by the url
              number: 8, // limit number of results to 10
              ranking: 1, // prioritize results with most missing ingredients
              dishTypes: dishTypes, //to select dish types
              dietTypes: dietTypes
            }
          });
          
          navigate(`/search-results/${searchInput}`, { state: { results: response.data } }); //the first arguement will replace the url base on what the user input, the 2nd argument, state has the value of results w/c another object with a property w/c also has a value of response.data
    } 

    catch (error)
    {
      console.log(error)

    }
};
const dishTypesList =  //array of dishes
[
  'Main course',
  'Side dish',
  'Dessert',
  'Appetizer',
  'Salad',
  'Bread',
  'Breakfast',
  'Soup',
  'Beverage',
  'Sauce',
  'Marinade',
  'Fingerfood',
  'Snack',
  'Drink'
];

const dietTypesList =
[
  'Gluten Free',
  'Keto',
  'Vegetarian',
  'No eggs',
  'Dairy Free',
  'Vegan',
  'Pescetarian',
  'Paleo',
  'Primal',
  'Low FODMAP',
  'Whole30'
  
]

const handleDishTypes = (event) => 
{
  const isChecked = event.target.checked;
  const dishType = event.target.value;

  if (isChecked) 
  {
    setDishTypes([...dishTypes, dishType]); //  creates a new array that includes the current dishType value
  } 

  else 
  {
    setDishTypes(dishTypes.filter((type) => type !== dishType)); //function creates a new array that filters out the current dishType value from the dishTypes array using the filter() method
  }
};
const handleDietTypes = (event) => 
{
  const isChecked = event.target.checked;
  const dietType = event.target.value;

  if (isChecked) 
  {
    setDietTypes([...dietTypes, dietType]); //  creates a new array that includes the current dishType value
  } 

  else 
  {
    setDietTypes(dietTypes.filter((type) => type !== dietType)); //function creates a new array that filters out the current dishType value from the dishTypes array using the filter() method
  }
};


return (
  <>
  
      <SearchBox onSubmit={handleSearch}>
        <label>
          Search ingredients:
          <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
          <button type="submit">Search</button>
        </label>

          </SearchBox>
        <ContainerTypes>
          <Card>
            <DishTypes>
          <p>Filter by dish type:</p>
          {dishTypesList.map((type, index) => ( // looping over dishtypes
            <label key={index}>
              <input type="checkbox" value={type} onChange={handleDishTypes} />
              {type}
            </label>
          ))}
            </DishTypes>

            <DietTypes>
          <p>Filter by diet type:</p>
          {dietTypesList.map((type, index) => ( // looping over dishtypes
            <label key={index}>
              <input type="checkbox" value={type} onChange={handleDietTypes} />
              {type}
            </label>
          ))}
            </DietTypes>
          </Card>
        </ContainerTypes>

    </>
);
};

export default SearchRecipes;
