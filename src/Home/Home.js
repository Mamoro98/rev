import React from 'react'
import AppBar from '../AppBar'
import HomePage from './HomePage'
import HomeButton from './Appbar/HomeButton'
import SignInButton from './Appbar/SignInButton'
import LightButton from './Appbar/LightButton'
import CoupChain from './Appbar/CoupChain'
function Home({element}) {
    return (
        <div style={{paddingLeft:"140px"}}>
            
            {element}
            <HomeButton />
            <SignInButton />
            <LightButton />
            <CoupChain />
        </div>
    )
}

export default Home
