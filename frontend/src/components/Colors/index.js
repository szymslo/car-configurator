import React from "react";
import "./index.scss";

const Colors = (props) => {
  return (
    <>
      <label>Choose color</label>
      <div className="palette">
        <button
          className="yellow"
          onClick={props.onColorSelected}
          value="yellow"
        ></button>
        <button className="red" onClick={props.onColorSelected} value="red"></button>
        <button
          className="green"
          onClick={props.onColorSelected}
          value="green"
        ></button>
        <button
          className="blue"
          onClick={props.onColorSelected}
          value="blue"
        ></button>
      </div>
    </>
  );
};

export default Colors;
