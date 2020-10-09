import React, { useState } from 'react'

import { RiSunLine } from 'react-icons/ri'
import { RiMoonFill } from 'react-icons/ri'

import './toggle.css'

const ToggleButton = () => {
    const [checked, setChecked] = useState(
        {
            dark: false
        }
    );

    const handleCheck = () => {
        console.log(checked)
    }
    return(
        <div className="toggle">
            <p className="togglers"><RiSunLine /></p>
            <label className="switch">
                <input type="checkbox" onClick={ handleCheck() }/>
                    <span className="slider round"></span>
            </label>
            <p className="togglers"><RiMoonFill /></p>
        </div>
    )
}

export default ToggleButton;