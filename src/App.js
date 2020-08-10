import React from 'react';
import SearchBar from './components/SearchBar';


const appStyle = {
  "padding-top": "20px",
  "padding-left": "38em"
}


function App() {
  return (
    <div className="App" style={appStyle}>
      <SearchBar/>
      
    </div>
  );
}

export default App;
