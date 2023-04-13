import React, { useReducer } from 'react';
import { FaStar } from 'react-icons/fa';

const initialState = { rating: null };

function reducer(state, action) 
{
  switch (action.type) 
  {
    case 'SET_RATING':
      return { 
        rating: action.payload 
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
      {[...Array(5)].map((star, i) => 
      {
        const ratingValue = i + 1;

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
              color={ratingValue <= state.rating ? '#ffc107' : '#e4e5e9'}
              size={15}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
