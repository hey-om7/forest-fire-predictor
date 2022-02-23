import React from 'react'
import "./screen1.scss"
import bgImg from "../bg-img.jpg"

export default function Screen1() {
    return (
        <div className="Screen1">
            <img src={bgImg} alt="background image" />
            <div className="titleHead">
                <div className="boldHead">
                    <h1>Forest Fire Predictor</h1>
                </div>
                <h4>with 98.25% accuracy</h4>
            </div>
        </div>
    )
}
