import React, { useState } from 'react';


function SearchBar(props) {
    const [searchInput, setsearchInput] = useState('')

    const handleChange = (e) =>{
        setsearchInput(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="Search" value={searchInput} onChange={handleChange} />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;