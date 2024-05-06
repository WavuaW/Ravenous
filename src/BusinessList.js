import React from "react";
import Business from "./Business";
import './BusinessList.css'

// Sample hardcoded list of businesses
const businesses = [
    {
      imageSrc: 'https://via.placeholder.com/150',
      name: 'Delicious Diner',
      address: '123 Main Street',
      city: 'Metropolis',
      state: 'NY',
      zipCode: '12345',
      category: 'American',
      rating: 4.5,
      reviewCount: 230,
    },
    {
      imageSrc: 'https://via.placeholder.com/150',
      name: 'Pasta Palace',
      address: '456 Pasta Lane',
      city: 'Gotham',
      state: 'NY',
      zipCode: '67890',
      category: 'Italian',
      rating: 4.0,
      reviewCount: 150,
    },
];

const BusinessList = () => {
    return (
        <div className="business-list">
            {businesses.map((business, index) => (
                <Business key={index} business={business}/>
            ))}
        </div>

    );
};

export default BusinessList;