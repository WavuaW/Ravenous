import React from "react";
import Business from "./Business";
import './BusinessList.css'

// Sample hardcoded list of businesses
const businesses = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1526614415851-600facaa5823?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpbmVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
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
      imageSrc: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Pasta Palace',
      address: '456 Pasta Lane',
      city: 'Gotham',
      state: 'NY',
      zipCode: '67890',
      category: 'Italian',
      rating: 4.0,
      reviewCount: 150,
    },
    {
        imageSrc: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fHww',
        name: 'Pasta Castle',
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