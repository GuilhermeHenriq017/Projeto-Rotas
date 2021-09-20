import React from 'react'
import './Brasilia.css'
import Home from '../Home/Home.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import BrasiliaHeader from './BrasiliaHeader'
import { Route, Switch } from 'react-router'

export default function Brasilia() {
    return (
        <div>
            <BrasiliaHeader />

            <Titulo texto="Brasilia" />

            <div className="Brasilia">

            </div>

        </div>

    )
}