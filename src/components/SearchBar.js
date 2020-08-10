import React, { useState, useEffect } from 'react';
import axios from 'axios'


const SearchBarStyle = {
    "height": "30px",
    "width": "25em"
}

const repoStyle = {
    "font-size": "25px"
}

function SearchBar(props) {
    const [searchInput, setsearchInput] = useState("")
    const [repos, setRepos] = useState([])

    const handleChange = (e) =>{
        setsearchInput(e.target.value.substr(0,20))
    };

    useEffect(()=>{
        axios
            .get('https://api.github.com/users/dieuveil/repos')
            .then(res =>{
                console.log(res)
                setRepos(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    })

    let filteredRepos = repos.filter(
        (repo) =>{
            return repo.name.indexOf(searchInput) !== -1
        }
    )
   
    return (
        <div>
            <input style={SearchBarStyle} type="text" placeholder="Search" value={searchInput} onChange={handleChange} />
            <ul>
                {
                    filteredRepos.map(
                    (repo)=><li key={repo.id} style={repoStyle}>{repo.name}</li>
                    )
                }
            </ul>
            
        </div>
    );
}

export default SearchBar;