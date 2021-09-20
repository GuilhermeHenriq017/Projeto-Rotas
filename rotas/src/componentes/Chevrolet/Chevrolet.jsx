import React from 'react'

import './Chevrolet.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import ChevroletHeader from "./ChevroletHeader.jsx"
import { Route, Switch } from 'react-router'

export default function Chevrolet() {
    return (
        <div>
            <ChevroletHeader />

            <Titulo texto="Chevrolet" />

            <div className="Chevrolet">
                
            </div>

        </div>

    )
}