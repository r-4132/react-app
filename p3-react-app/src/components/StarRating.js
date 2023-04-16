import React, { useReducer } from 'react';
import { FaStar } from 'react-icons/fa';

const initialState = { rating: null }; //initialization. Set the value of rating to null

function reducer(state, action) 
{
  switch (action.type) 
  {
    case 'SET_RATING':
      return { //this is basically where the new rating value is being updated
        rating: action.payload //payload is used to pass the new rating value
    };
    default:
      return state;
  }
}

function StarRating() 
{
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {[...Array(5)].map((star, i) => // this will basically print out 5 stars
      {
        const ratingValue = i + 1; // this will represent the value of the star. 2 = two stars

        return (
          <label key={i}>
            <input
              id="star_rad"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() =>
                dispatch({ type: 'SET_RATING', payload: ratingValue })}
            />
            <FaStar
              id="star"
              color={ratingValue <= state.rating ? '#ffc107' : '#555555'}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
