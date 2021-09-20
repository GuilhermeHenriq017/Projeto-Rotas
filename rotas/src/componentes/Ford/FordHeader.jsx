import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="li0"> <Link to="/"> Voltar </Link> </li>
                    <li class="li1"> <Link to="/Ford"> 2.1  </Link></li>
                    <li class="li2"> <Link to="/Ford"> 2.2  </Link></li>
                    <li class="li3"> <Link to="/Ford"> 2.3  </Link></li>
                    <li class="li4"> <Link to="/Ford"> 2.4  </Link></li>
                    <li class="li5"> <Link to="/Ford"> 2.5  </Link></li>
                </ul>
            </nav>
        </div>
    )
}