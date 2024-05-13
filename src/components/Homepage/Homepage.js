import React from 'react';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <header>
        <nav>
            <div className='logo'>RouteRover</div>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#features'>Contact</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <section id='hero'>
            <h1>Welcome to RouteRover</h1>
            <p>Your one-stop solution for convenient and accessible public transportation</p>
            <a href='#features' className='cta-button'>Explore Features</a>
        </section>
      </main>
    </div>
  )
}

export default Homepage
