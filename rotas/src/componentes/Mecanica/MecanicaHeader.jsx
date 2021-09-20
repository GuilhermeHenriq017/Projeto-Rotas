import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="liX"> <Link to="/"> Home </Link> </li>
                    <li class="li0"> <Link to="/Brasilia"> Voltar </Link> </li>
                    <li class="li1"> <Link to="/Mecanica"> 4.1.1.1 Motor </Link></li>
                    <li class="li2"> <Link to="/Mecanica"> 4.1.1.2 Pedais </Link></li>
                    <li class="li3"> <Link to="/Mecanica"> 4.1.1.3 Câmbio </Link></li>
                    <li class="li4"> <Link to="/Mecanica"> 4.1.1.4 Volante </Link></li>
                    <li class="li5"> <Link to="/Mecanica"> 4.1.1.5 Sensores </Link></li>
                </ul>
            </nav>
        </div>
    )
}