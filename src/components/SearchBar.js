import React, { useState } from 'react';


function SearchBar(props) {
    const [searchInput, setsearchInput] = useState('')

    const handleChange = (e) =>{
        setsearchInput(e.target.value)
    }

    const handleClick = () =>{
        console.log(searchInput)
    }
    return (
        <div>
            <input type="text" placeholder="Search" value={searchInput} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;