import React from 'react'
import AppBar from '../AppBar'
import HomePage from './HomePage'
function Home({element}) {
    return (
        <div>
            <AppBar />
            {element}
        </div>
    )
}

export default Home
