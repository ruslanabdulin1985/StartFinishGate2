import './Buttons.css';

const Buttons = ({ isRaceOn, setRaceOn }) => {


    const startRace = () => {
        setRaceOn(true)

    }

    const finishRace = () => {
        setRaceOn(false)

    }

    return <div className='buttons'>
        {isRaceOn ? <button className="button finishbutton" onClick={finishRace}>FINISH</button> : <button className="button startbutton" onClick={startRace}>START</button>}
    </div>
}

export default Buttons;