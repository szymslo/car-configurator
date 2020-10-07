import React from 'react'
import './index.css'

const Gearboxes = (props) => {

    return (
        <>
        <label>Choose gearbox</label>
        <div id="gearbox">
            <input id="man" type="radio" name="gearbox" value="Manual" onClick={props.onGearboxSelected} defaultChecked/>
            <label htmlFor="man">Manual</label>
            <input id="aut" type="radio" name="gearbox" value="Automatic" onClick={props.onGearboxSelected}/>
            <label htmlFor="aut">Automatic</label>
        </div>
        </>
    );
}

export default Gearboxes;