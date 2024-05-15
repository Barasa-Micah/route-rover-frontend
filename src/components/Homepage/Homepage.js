import React from "react";
import './Homepage.css';

function HomePage() {
    return (
        <div className="homepage">
            <header>
                <nav>
                    <ul>
                        <li><a href="#home"> Home</a></li>
                        <li><a href="#about"> About Us</a></li>
                        <li><a href="#services"> Services</a></li>
                        <li><a href="#contact"> Contact</a></li>
                        <li><a href="#login"> Login</a></li>
                    </ul>
                </nav>
            </header>
            <section id="hero">
                <div className="hero-content">
                    <h1>Welcome To Transit Rover</h1>
                    <p>Your one-stop solution for multi-modal ticketing and payment</p>
                    < a href="#signup" className="cta-button">Sign Up</a>
                </div>
            </section>
            <section id="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Easy ticket Purchase</li>
                    <li>Real-time trip planning</li>
                    <li>Smart Card Integration</li>
                    <li>Cashless transactions</li>
                </ul>
            </section>
            <section id="how-it-works">
                <h2>How it Works</h2>
                <p>Follow these simples steps to use Transit Rover</p>
                <ol>
                    <li>Create an account</li>
                    <li>Plan your journey</li>
                    <li>Choose your ticket</li>
                    <li>Pay securely</li>
                </ol>
            </section>
            {/* <section id="cta">
                <p>Ready to get started? Sign up now!</p>
                <a href="#signup" className="cta-button">Sign Up</a>
            </section> */}
            <footer>
                <p>&copy; 2024 Transit Rover. The best there ever will be</p>
            </footer>
        </div>
    )
}

export default HomePage;