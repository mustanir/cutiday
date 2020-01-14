import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <h3>Cutiday.com</h3>
            <ul className="nav-links">
                <li>Login</li>
                <li>Register</li> 
            </ul>
        </nav>
    )
}

export default Nav;