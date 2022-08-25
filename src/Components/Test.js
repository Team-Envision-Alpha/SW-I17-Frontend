import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = () => {
    const [rating,setRating] = useState(null);
    console.log(rating);
    const [hover,setHover] = useState(null);
    return (
    <div className="flex">
    {[...Array(4)].map((star, i) => {
        const ratingValue = i+1;
        return(
          <FaStar className="star"
           color= "#ffc107"
            size={50}
            />
        );
    })}
    </div>
    );
};
export default StarRating;