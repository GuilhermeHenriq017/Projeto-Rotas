  
import React from 'react'

import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="li1"> <Link to="/Fiat"> 1-Fiat </Link></li>
                    <li class="li2"> <Link to="/Ford"> 2-Ford </Link></li>
                    <li class="li3"> <Link to="/Chevrolet"> 3-Chevrolet </Link></li>
                    <li class="li4"> <Link to="/VW"> 4-VW </Link></li>
                    <li class="li5"> <Link to="/Hyundai"> 5-Hyundai </Link></li>
                </ul>
            </nav>
        </div>
    )
}