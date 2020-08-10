import React from 'react';


const Results = (props) => {
    const {repos} = props
    //console.log(repos)
    const listrepos = 
    repos.length !== 0 ? (
        //repos.data.slice(0,5).map((item) => <li key={item.id}>{item.name}</li>)
        //repos.map((item) => <li key={item.id}>{item.name}</li>)
        console.log(repos)
    )
    : (<h5>No data found</h5>);
    return (
          <ul>
           { /*{
                repos.length !== 0 ? (
                    
                    repos.data.map((item) => <li key={item.id}>{item.name}</li>)
                )
                : (<h5>No data found</h5>)
            }*/}
            {listrepos}
          </ul> 
         
    );
}

export default Results;