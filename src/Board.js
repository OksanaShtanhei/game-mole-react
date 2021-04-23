import React, { useState } from 'react';
import './App.css';
import Squares from './Squares';
import ScoreText from './ScoreText';

const Board = ({numbers, handleScore}) => {
    const [time, setTime] = useState(10)
    const [score, setScore] = useState(0)
    
    const [isGameOver, setIsGameOver] = useState(false)
    let squareClass = document.querySelectorAll('.square')

    function handleScore(e){
        if(e.target.classList.contains('mole')){
            setScore(() => {
              return score+1})
      }
    }
    
    function handleClick(){
        setIsGameOver(false)
        setScore(0)
        let interval = setInterval(() => {
            let randomSquare = squareClass[Math.floor(Math.random() * 9)] 
            squareClass.forEach(el => {
                el.classList.remove('mole')
                randomSquare.classList.add('mole')
            })

            setTime((time) => {
                if(time===0){
                    clearInterval(interval)
                    setIsGameOver(true)
                    time=11 
                } else {
                    setIsGameOver(false)
                }
                return (time-1)
            })
        }, 1000)  
    }
    
   
    return (
        <>
            {isGameOver && <ScoreText score={score} />}
            <h3>Score:</h3>
            <h3 id="score">{score}</h3>
            <h3>Seconds left : </h3>
            <h3 id="time-left">{time}</h3>
            <button className="start" onClick={handleClick}>start</button>
                <Squares numbers={numbers} handleScore={handleScore} />
        </>
      );
  }

export default Board