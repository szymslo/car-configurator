import React from "react";
import useGlobalState from './useCarState'
import CarContext from './context'

const CarStateProvider = ({children}) => {
    return (
        <CarContext.Provider value={useGlobalState()}>{children}</CarContext.Provider>
    )
};

export default CarStateProvider;