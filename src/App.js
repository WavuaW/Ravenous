import React from 'react';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList'
import Banner from './Banner';

const App = () => {
  const handleSearch = (term, location, sortBy) => {
    console.log(`Searching for ${term} in ${location} sorted by ${sortBy}`);
    // Later, you will replace this with API call logic
  };

  return (
    <div>
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <BusinessList />
    </div>
  );
};

export default App;
