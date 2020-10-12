import React, { useContext } from "react";
import "./index.scss";
import Context from '../../store/context'

const Colors = () => {

  const {carDispatch} = useContext(Context);

  return (
    <>
      <label>Color</label>
      <div className="palette">
        <button
          className="yellow"
          onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
          value="yellow"
        ></button>
        <button className="red" onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})} value="red"></button>
        <button
          className="green"
          onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
          value="green"
        ></button>
        <button
          className="blue"
          onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
          value="blue"
        ></button>
      </div>
    </>
  );
};

export default Colors;
