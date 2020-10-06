import React from 'react'

import './footer.css'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear();
    return(
        <div className="footer">
            <footer>
                <p>&copy; {year}</p>
            </footer>
        </div>
    )
}

export default Footer;