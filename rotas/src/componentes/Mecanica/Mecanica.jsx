import React from 'react'

import './Mecanica.css'
import Titulo from '../Titulo/Titulo'
import MecanicaHeader from './MecanicaHeader'
import { Route, Switch } from 'react-router'

export default function Mecanica() {
    return (
        <div>
            <MecanicaHeader />

            <Titulo texto="Mecanica" />

            <div className="Mecanica">
                
            </div>

        </div>

    )
}