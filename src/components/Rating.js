import React, { useEffect, useState } from 'react';
import './Rating.css';

/**
 *
 * @param{object} props
 * @param {number} props.rating
 * @returns {JSX.Element}
 * @constructor
 */
const Rating = (props) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props.rating) {
      setRating(Math.round(props.rating))
    }
  });

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`starBtn ${index <= rating ? 'on' : 'off'}`}
            onClick={props.rating ? undefined : () => setRating(index)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;