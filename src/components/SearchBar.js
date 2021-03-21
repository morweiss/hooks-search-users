import React from 'react';

const SearchBar = ({term, onTermChange}) => {
    return (
        <div>
            <label>Type user name or email:</label>
            <input value={term} onChange={(e) => onTermChange(e.target.value)} />
        </div>
    );
};

export default SearchBar;