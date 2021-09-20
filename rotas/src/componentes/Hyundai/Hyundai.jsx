import React from 'react'

import './Hyundai.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import HyundaiHeader from "./HyundaiHeader.jsx"
import { Route, Switch } from 'react-router'

export default function Hyundai() {
    return (
        <div>
            <HyundaiHeader />

            <Titulo texto="Hyundai" />

            <div className="Hyundai">
                
            </div>

        </div>

    )
}