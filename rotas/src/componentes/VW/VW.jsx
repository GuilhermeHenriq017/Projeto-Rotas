import React from 'react'

import './VW.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import VWHeader from "./VWHeader.jsx"
import { Route, Switch } from 'react-router'

export default function VW() {
    return (
        <div>
            <VWHeader />

            <Titulo texto="VW" />

            <div className="VW">
                
            </div>

        </div>

    )
}