import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";

export default function Header() {
  return (
    <header>
        <div>logo</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    </header>
  )
}
