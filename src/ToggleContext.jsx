import React , { useState, createContext } from 'react'

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
    const [checked, setChecked] = useState(false);
    //const [checked, setChecked] = useState(false);

    return(
        <ToggleContext.Provider value={[checked, setChecked]}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider