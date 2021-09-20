import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="li0"> <Link to="/"> Home </Link> </li>
                    <li class="li1"> <Link to="/VW"> Voltar </Link> </li>
                    <li class="li2"> <Link to="/Mecanica"> 4.1.1 Mecânica </Link></li>
                    <li class="li3"> <Link to="/Brasilia"> 4.1.2 Elétrica </Link></li>
                    <li class="li4"> <Link to="/Brasilia"> 4.1.3 Eletrônica </Link></li>
                    <li class="li5"> <Link to="/Brasilia"> 4.1.4 Suspensão </Link></li>
                </ul>
            </nav>
        </div>
    )
}