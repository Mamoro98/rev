import React from 'react'
import Home from './Home/Home';
import SignIn from './SignIn/SignIn'
import Light from './OurLight/Light';
import Chain from './NoCoupChain/Chain';
import HomePage from './Home/HomePage';
import { useRoutes } from "react-router-dom";
function App() {
    let element = useRoutes(
        [
            {
                path: "/",
                element: <Home element={<HomePage/> } />
            },
            {
                path: "/signin",
                element: <Home element={<SignIn/>} />
            },
            {
                path: "/light",
                element :<Home element={<Light/>} />
            },
            {
                path: "/chain",
                element :<Home element ={<Chain/>} />
            },

        ]
    )
    return (
      element
    )
}

export default App
