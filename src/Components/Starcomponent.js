import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = () => {
    const [rating,setRating] = useState(null);
    console.log(rating);
    const [hover,setHover] = useState(null);
    return (
    <div className="flex">
    {[...Array(5)].map((star, i) => {
        const ratingValue = i+1;
        return(
        <label>
        
         <input type="radio"
          name="rating"
          className="opacity-0"
           value={ratingValue}
            onClick={()=>setRating(ratingValue)}
        
         />
          <FaStar className="star"
           color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"}
            size={50}
            onMouseOver = {() => setRating(ratingValue)}
            onMouseOut= {()=>setHover(null)}/>
         </label>
        );
    })}
    
    </div>
    );
};
export default StarRating;