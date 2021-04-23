import React, {useState} from 'react'
import './App.css'

export default function ScoreText({score}){
    const finalScore = score
    return (
        <div >
            <h3 className="score-text">Your score is {finalScore}</h3>
        </div>
    )
}