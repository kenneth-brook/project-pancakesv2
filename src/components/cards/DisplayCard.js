import React from "react";
import Tilt from 'react-vanilla-tilt';


import pcc from "../../assets/pcc.jpg"

function DisplayCard() {
    return (
        <Tilt style={{backgroundColor: "#fff0"}} options={{ max: 35 }}>
        <div className="card rgb">
            <div className="cardImg" style={{ backgroundImage: `url(${pcc})` }}></div>
            <div className="cardTxt">
                <span className="date">08/01/2021</span>
                <h2>Pancake Cat</h2>
                <p>The original Pancake Cat. This is where it all started.</p>
            </div>
            <div className="cardStats">
                <div className="stat">
                    <div className="value">5348</div>
                    <div className="type">Pancakes</div>
                </div>
                <div className="stat divide">
                    <div className="value">15K</div>
                    <div className="type">views</div>
                </div>
                <div className="stat">
                    <div className="value">124</div>
                    <div className="type">Comments</div>
                </div>
            </div>
        </div>
        </Tilt>
    );
}

export default DisplayCard;