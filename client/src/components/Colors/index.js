import React, { useContext } from "react";
import './index.scss';
import Context from '../../store/context'

const Colors = () => {

  const {carState, carDispatch} = useContext(Context);

  if(carState.isGearboxSelected)
  {
    return (
      <>
        <label>Color</label>
        <div>
          <button
            className="yellow"
            onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
            value="yellow">     
            </button>
          <button 
            className="red" 
            onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})} 
            value="red">
          </button>
          <button
            className="green"
            onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
            value="green"> 
          </button>
          <button
            className="blue"
            onClick={(event) => carDispatch({type: "SET_COLOR", payload: event.target.value})}
            value="blue">
          </button>
        </div>
      </>
    );
  }
  return null;
};

export default Colors;
