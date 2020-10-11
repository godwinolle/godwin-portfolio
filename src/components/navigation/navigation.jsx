import React, {useContext} from 'react'

import {ToggleContext} from '../../ToggleContext'

import { Link } from 'react-router-dom'

import './navigation.css'

const Navigation = () => {
    const [checked] = useContext(ToggleContext);
    return(
        <div className={checked ? "navigation dark" : "navigation light"}>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="links">home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="links">about</Link>
                    </li>
                </ul>    
            </nav> 
        </div>
    )
}

export default Navigation;