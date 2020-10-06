import React from 'react'

const Gearboxes = () => {
    return (
        <>
        <label>Choose gearbox</label>
        <div id="gearbox">
            <input id="man" type="radio" name="gearbox" value="Manual"/>
            <label for="man">Manual</label>
            <input id="aut" type="radio" name="gearbox" value="Auromatic"/>
            <label for="aut">Automatic</label>
        </div>
        </>
    );
}

export default Gearboxes;