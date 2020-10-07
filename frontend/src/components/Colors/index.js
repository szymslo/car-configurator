import React from "react"
import './index.scss'

const Colors = () => {

    const onColorSelected = (e) => {
        console.log("Color selected: " + e.target.value);
    };

    return (
        <>
        <label>Choose color</label>
        <div className="palette">
              <button className="yellow" onClick={onColorSelected} value="yellow"></button>
              <button className="red" onClick={onColorSelected} value="red"></button>
              <button className="green" onClick={onColorSelected} value="green"></button>
              <button className="blue" onClick={onColorSelected} value="blue"></button>
        </div>
        </>
    )
}

export default Colors;