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
        <section id='about'>
            <h2>About RouteRover</h2>
            <p>RouteRover is a web-based platform designed to revolutionize public transportation by providing secure, convenient znd accessible solutions for passengers and transport operators.</p>
        </section>
        <section id='features'>
            <h2>Key Features</h2>
            <ul>
                <li>Multi-Modal Ticketing and Payment</li>
                <li>Real-Time Trip Planning</li>
                <li>Data Analytics Dashboard</li>
                <li>Accessibility Features</li>
            </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 RouteRover</p>
      </footer>
    </div>
  )
}

export default Homepage
