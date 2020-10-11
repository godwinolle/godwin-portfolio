import React, {useContext} from 'react'

import {ToggleContext} from '../../ToggleContext'

import HomeHead from '../../components/home/homeHead'

const Home = () => {
    const [checked] = useContext(ToggleContext); 
    return(
        <div className={checked ? "dark" : "light"}>
            <HomeHead />
        </div>
    )
}

export default Home;