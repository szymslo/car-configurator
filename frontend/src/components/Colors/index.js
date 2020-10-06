import React from "react"
import './index.css'

const Colors = () => {
    return (
        <>
        <label>Choose color</label>
        <div className="palette">
              <button className="black"></button>
              <button className="red"></button>
              <button className="green"></button>
              <button className="blue"></button>
        </div>
        </>
    )
}

export default Colors;