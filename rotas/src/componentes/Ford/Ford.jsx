import React from 'react'

import './Ford.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import FordHeader from "./FordHeader.jsx"
import { Route, Switch } from 'react-router'

export default function Chevrolet() {
    return (
        <div>
            <FordHeader />

            <Titulo texto="Ford" />

            <div className="Ford">
                
            </div>

        </div>

    )
}