import React from 'react'
import { Link } from 'react-router-dom';
import './headerStyle.scss'

const Header = () => {
  return (
    <div>
      <header className='header-nav-wrapper'>
        <h1>Durga puja online</h1>
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/about">About</Link> {" "}
          <Link to="/contact">Contact</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/login">Login</Link>
        </nav>
        </header>
    </div>
  )
}

export default Header
