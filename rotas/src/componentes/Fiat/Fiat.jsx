import React from 'react'

import './Fiat.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import FiatHeader from "./FiatHeader.jsx"
import { Route, Switch } from 'react-router'

export default function Fiat() {
    return (
        <div>
            <FiatHeader />

            <Titulo texto="Fiat" />

            <div className="Fiat">
                
            </div>

        </div>

    )
}