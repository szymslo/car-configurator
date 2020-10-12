import React, { useContext } from "react";
import './index.css'
import Context from '../../store/context'

const Gearboxes = (props) => {

    const {carDispatch} = useContext(Context);

    return (
        <>
        <label>Gearbox</label>
        <div id="gearbox">
            <input id="man" type="radio" name="gearbox" value="Manual" 
                onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})} defaultChecked/>
            <label htmlFor="man">Manual</label>
            <input id="aut" type="radio" name="gearbox" value="Automatic" 
                onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})}/>
            <label htmlFor="aut">Automatic</label>
        </div>
        </>
    );
}

export default Gearboxes;