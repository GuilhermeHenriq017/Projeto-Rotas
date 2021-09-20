import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="li0"> <Link to="/"> Voltar </Link> </li>
                    <li class="li1"> <Link to="/Brasilia"> 4.1 Brasília </Link></li>
                    <li class="li2"> <Link to="/VW"> 4.2 Fusca </Link></li>
                    <li class="li3"> <Link to="/VW"> 4.3 Kombi </Link></li>
                    <li class="li4"> <Link to="/VW"> 4.4 Polo </Link></li>
                    <li class="li5"> <Link to="/VW"> 4.5 Gol </Link></li>
                </ul>
            </nav>
        </div>
    )
}