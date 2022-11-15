
import React, { useEffect, useState } from 'react';

import Buttons from '../components/Buttons';
import Timer from '../components/Timer';


const Main = () => {

    const [isRaceOn, setIsRaceOn] = useState(false)
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(null)


    const setRaceOn = (value) => {
        if (!isRaceOn) {
            setTime(0)
            setStartTime(Date.now())
        }
        setIsRaceOn(value)
    }

    useEffect(() => {
        if (isRaceOn) {
            setTimeout(() => setTime(() => Date.now() - startTime), 100)
        }
        if (!isRaceOn) {

        }
    }, [isRaceOn, time])



    // while (isRaceOn) {
    //     // increaseTime()
    // }
    return (<>
        <Timer time={time} isRaceOn={isRaceOn}></Timer>
        <Buttons isRaceOn={isRaceOn} setRaceOn={setRaceOn}></Buttons>
    </>)
}

export default Main;