import {useReducer} from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_MODEL":
            return {
                carId: action.payload,
                engineId: '', 
                gearbox: '',
                color: 'white',
                isModelSelected: true,
                isEngineSelected: false,
                isGearboxSelected: false     
            };
        case "SET_ENGINE":
            return {
                ...state, 
                engineId: action.payload,
                gearbox: '',
                isEngineSelected: true,
            };
        case "SET_GEARBOX":
            return {
                ...state, 
                gearbox: action.payload,
                isGearboxSelected: true
            };
        case "SET_COLOR":
            return {
                ...state, 
                color: action.payload,
            };      
        default:
            return state;
    }
};

const useCarState = () => {
    const [carState, carDispatch] = useReducer(reducer, {
        carId: '',
        engineId: '',
        gearbox: '',
        color: '',
        isModelSelected: false,
        isEngineSelected: false,
        isGearboxSelected: false,
    })

    return {carState, carDispatch}
};

export default useCarState;