import React, { useState, useEffect } from 'react';
import Results from './Results'
import axios from 'axios'


function SearchBar(props) {
    const [searchInput, setsearchInput] = useState("")
    const [repos, setRepos] = useState([])

    const handleChange = (e) =>{
        //setsearchInput(e.target.value)
        setsearchInput(e.target.value.substr(0,20))
    };

   /*const handleClick = async () => { 
          try{
            //const result = await axios(`https://api.github.com/repos/dieuveil/data-fetching-test`)
            const result = await axios(`https://api.github.com/users/dieuveil/repos`)
            setRepos(result.data)
          }catch(err){
            console.log(err)
          }
    };*/

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
            <input type="text" placeholder="Search" value={searchInput} onChange={handleChange} />
            {/*<button onClick={handleClick}>Search</button>
            <Results repos={repos}/>*/}
            <ul>
                {
                    filteredRepos.map(
                    (repo)=><li key={repo.id}>{repo.name}</li>
                    )
                }
            </ul>
            
        </div>
    );
}

export default SearchBar;