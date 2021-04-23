import React from 'react';
import './App.css';


const Squares = ({numbers, handleScore}) =>{

    return(
        <div className="board">
            {numbers.map(el => (
               <div className="square" key={el} id={el} onClick={handleScore}></div>
            ))}
        </div>
    )
  }   


export default Squares;