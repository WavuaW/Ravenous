import React from 'react';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList'

// import BusinessList from './BusinessList';

// function App() {
//   return (
//     <div>
//       <h1>Ravenous Restaurant Finder</h1>
//       <BusinessList />
//     </div>
//   );
  
// };

const App = () => {
  const handleSearch = (term, location, sortBy) => {
    console.log(`Searching for ${term} in ${location} sorted by ${sortBy}`);
    // Later, you will replace this with API call logic
  };

  return (
    <div>
      <h1>Ravenous Restaurant Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <BusinessList />
    </div>
  );
};

export default App;
