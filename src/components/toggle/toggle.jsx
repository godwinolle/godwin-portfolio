import React, { useContext } from 'react'

import {ToggleContext} from '../../ToggleContext'

import { RiSunLine } from 'react-icons/ri'
import { RiMoonFill } from 'react-icons/ri'

import './toggle.css'

const ToggleButton = () => {
    const [checked, setChecked] = useContext(ToggleContext);
    

    const handleCheck = () => {
        setChecked(!checked)
    }

    localStorage.setItem('check', checked);

    if(checked){
        document.body.style.backgroundColor = "#111"
        return(
            <div className={checked ? "toggle dark" : "toggle light"}>
                <p className="togglers"><RiSunLine /></p>
                <label className="switch">
                    <input type="checkbox"  defaultChecked onClick={ handleCheck }/>
                        <span className="slider round"></span>
                </label>
                <p className="togglers"><RiMoonFill /></p>
            </div>
        )
    } else{
        document.body.style.backgroundColor = "#FBFBFB"
        return(
            <div className={checked ? "toggle dark" : "toggle light"}>
                <p className="togglers"><RiSunLine /></p>
                <label className="switch">
                    <input type="checkbox" onClick={ handleCheck }/>
                        <span className="slider round"></span>
                </label>
                <p className="togglers"><RiMoonFill /></p>
            </div>
        )
    }
}

export default ToggleButton;