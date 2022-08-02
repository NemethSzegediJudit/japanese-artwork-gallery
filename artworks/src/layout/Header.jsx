import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";

export default function Header() {
  return (
    <header>
        <h1>thumbRules</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/login">Login<i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
            
        </nav>
    </header>
  )
}
