import React from 'react';
import './Business.css';

// const sampleBusiness = {
//     imageSrc: 'https://via.placeholder.com/150', // Placeholder image
//     name: 'Delicious Diner',
//     address: '123 Main Street',
//     city: 'Metropolis',
//     state: 'NY',
//     zipCode: '12345',
//     category: 'American',
//     rating: 4.5,
//     reviewCount: 230,
//   };

const Business = ({ business }) => {
  const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = business;

  return (
    <div className="business">
      <div className="business-image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="business-info">
        <h2>{name}</h2>
        <p>{address}</p>
        <p>
          {city}, {state} {zipCode}
        </p>
        <p>{category}</p>
        <p className="business-rating">
          Rating: {rating} ({reviewCount} reviews)
        </p>
      </div>
    </div>
  );
};

// const Business = ({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) => {
//     return (
//       <div className='business'>
//         <div className='business-image'>
//           <img src={imageSrc} alt={name} />
//         </div>
//         <div className="business-info">
//         <h2>{sampleBusiness.name}</h2>
//         <p>{sampleBusiness.address}</p>
//         <p>
//           {sampleBusiness.city}, {sampleBusiness.state} {sampleBusiness.zipCode}
//         </p>
//         <p>{sampleBusiness.category}</p>
//         <p className="business-rating">
//           Rating: {sampleBusiness.rating} ({sampleBusiness.reviewCount} reviews)
//         </p>
//       </div>
//       </div>
//     );
//   };
  
  export default Business;