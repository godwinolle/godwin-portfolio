import React from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'

const Navigation = () => {
    return(
        <div className="navigation">
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