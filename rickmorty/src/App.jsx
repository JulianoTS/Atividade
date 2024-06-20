import React from 'react';
import './style.css';
import CharacterSearch from './components/CharacterSearch';

function App() {
  return (
    <div className="App">
      <h1>Busca de Personagens Rick and Morty</h1>
      <CharacterSearch />
    </div>
  );
}

export default App;