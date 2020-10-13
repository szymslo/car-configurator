import React, { useContext } from "react";
import { useApolloClient, gql } from "@apollo/client";
import './index.css';
import Context from '../../store/context';

const Gearboxes = (props) => {

    const { carState, carDispatch } = useContext(Context);
    const client = useApolloClient();

    if (carState.isEngineSelected) {
        
        const engine = client.readFragment({
          id: `Engine:${carState.engineId}`,
          fragment: gql`
            fragment enginep on Engine {
              horsepower
            }
          `,
          fragmentName: "enginep",
        });
    
        if(engine.horsepower < 80) {
            return (
                <>
                <label>Gearbox</label>
                <div id="gearbox">
                    <input id="man" type="radio" name="gearbox" value="Manual" checked={true}
                        onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})}/>
                    <label htmlFor="man">Manual</label>
                    <input disabled id="aut" type="radio" name="gearbox" value="Automatic" checked={false}/>
                    <label htmlFor="aut">Automatic</label>
                </div>
                </>
            );
        }
        if(engine.horsepower > 140) {
            return (
                <>
                <label>Gearbox</label>
                <div id="gearbox">
                    <input id="man" type="radio" name="gearbox" value="Manual" disabled checked={false}/>
                    <label htmlFor="man">Manual</label>
                    <input id="aut" type="radio" name="gearbox" value="Automatic" checked={true}
                        onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})}/>
                    <label htmlFor="aut">Automatic</label>
                </div>
                </>
            );
        }
        else {
            return (
                <>
                <label>Gearbox</label>
                <div id="gearbox">
                    <input id="man" type="radio" name="gearbox" value="Manual" 
                        onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})}/>
                    <label htmlFor="man">Manual</label>
                    <input id="aut" type="radio" name="gearbox" value="Automatic" 
                        onClick={(event) => carDispatch({type: "SET_GEARBOX", payload: event.target.value})}/>
                    <label htmlFor="aut">Automatic</label>
                </div>
                </>
            );
        }
    }

    return null;

}

export default Gearboxes;