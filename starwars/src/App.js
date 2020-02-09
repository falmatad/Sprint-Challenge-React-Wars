import React, {useState}from 'react';
import './App.css';
import CharacterList from "../src/components/CharacterList";
import PageButton from "../src/components/PageButton";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <h1 className="Header">StarWars Character Names</h1>
      <PageButton setPage= {setPage} page={page}/>
      <CharacterList page={page} />
    </div>
  );
}

export default App;
