import React, { useContext } from 'react'

import {ToggleContext} from '../../ToggleContext'

import AboutSection from '../../components/about/about'

const About = () => {
    const [checked] = useContext(ToggleContext);
    return(
        <div className={checked ? "dark" : "light"}>
            <AboutSection />
        </div>
    )
}

export default About;