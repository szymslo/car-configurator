import {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_MODEL":
            return { 
                ...state, 
                carId: action.payload, 
                isModelSelected: true               
            };
        case "SET_ENGINE":
            return {
                ...state, 
                engineId: action.payload,
                isEngineSelected: true
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
                isColorSelected: true
            };      
        default:
            return state;
    }
};

const useCarState = () => {
    const [carState, carDispatch] = useReducer(reducer, {
        carId: '',
        engineId: '',
        gearbox: 'Manual',
        color: 'white',
        isSelected: false
    })

    return {carState, carDispatch}
};

export default useCarState;