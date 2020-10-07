import React from 'react'
import './index.css'

const Gearboxes = () => {

    const onGearboxSelected = (e) => {
        console.log("Gearbox selected: " + e.target.value);
    };

    return (
        <>
        <label>Choose gearbox</label>
        <div id="gearbox">
            <input id="man" type="radio" name="gearbox" value="Manual" onClick={onGearboxSelected}/>
            <label htmlFor="man">Manual</label>
            <input id="aut" type="radio" name="gearbox" value="Automatic" onClick={onGearboxSelected}/>
            <label htmlFor="aut">Automatic</label>
        </div>
        </>
    );
}

export default Gearboxes;