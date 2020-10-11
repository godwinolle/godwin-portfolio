import React , { useState, createContext } from 'react'

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
    const [checked, setChecked] = useState(localStorage.getItem('check'));
    //const [checked, setChecked] = useState(false);

    return(
        <ToggleContext.Provider value={[checked, setChecked]}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider