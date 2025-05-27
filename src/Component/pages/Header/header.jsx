import React from 'react'
import './headerStyle.scss'

const Header = () => {
  return (
    <div>
      <header className='header-nav-wrapper'>
        <h1>Durga puja online</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
        </header>
    </div>
  )
}

export default Header
