import React from 'react'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

function StarRating() {

    const [rating, setRating] = useState(null);
  return (
    
    <div>
        
        {[...Array(5)].map((star, i) =>
            {
                const ratingValue = i + 1;
                
                return (

                    <label key={i}>
                        <input 
                            id='star_rad' 
                            type='radio' 
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            id='star' 
                            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                            size={15}
                            
                        />
                    </label>

                )
            })}
        
        
    </div>
  );
};

export default StarRating