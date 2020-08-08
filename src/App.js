import React from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

const appStyle = {
  "padding-top": "20px",
  "padding-left": "40em"
}


function App() {
  return (
    <div className="App" style={appStyle}>
      <SearchBar/>
      <Results/>
    </div>
  );
}

export default App;
