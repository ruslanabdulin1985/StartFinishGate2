import React, { useState } from "react";
import './Timer.css';


const Timer = ({ time, isRaceOn }) => {
    return (<div className="timer">
        {(time / 1000).toPrecision(3)}

    </div>)
}

export default Timer;