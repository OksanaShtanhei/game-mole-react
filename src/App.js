import React, {useEffect, useState} from 'react';
import './App.css';
import Board from './Board';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  
  return (
      <div className="App">
        <h1>Game-mole</h1>
        
        <Board numbers={numbers}  
                />
        
      </div>
    );
  }

export default App;
