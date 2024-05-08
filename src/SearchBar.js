import React, { useState } from "react";
import './SearchBar.css';

//The sorting options the page will have.
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = () => {
        onSearch(term, location, sortBy);
    };

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    };

    return (
        <div className='search-bar'>
            <div className='search-bar-sort-options'>
                {Object.keys(sortByOptions).map((key) => (
                    <button 
                     key={key}
                     className={getSortByClass(sortByOptions[key])}
                     onClick={() => handleSortByChange(sortByOptions[key])}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="search-bar-inputs">
                <input
                type="text"
                placeholder="Search businesses..."
                value={term}
                onChange={handleTermChange}
                />
                <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={handleLocationChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;