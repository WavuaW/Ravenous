import React from 'react';
import './Business.css';


const Business = ({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) => {
    return (
      <div className='business'>
        <div className='business-image'>
          <img src={imageSrc} alt={name} />
        </div>
        <div className='business-info'>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>
            {city}, {state} {zipCode}
          </p>
          <p>{category}</p>
          <p className='business-rating'>
            Rating: {rating} ({reviewCount} reviews)
          </p>
        </div>
      </div>
    );
  };
  
  export default Business;