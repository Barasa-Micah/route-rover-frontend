import React from 'react';
import './ServicesPage.css'; 

function Services() {
    return (
        <div className="services-page">
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </header>

            <section id="ticketing">
                <div className="service">
                    <h2>Ticketing Options</h2>
                    <p>TransitEase offers a variety of ticketing options to suit your needs, including single ride tickets, daily passes, and monthly passes. Purchase tickets easily through our website or mobile app.</p>
                </div>
            </section>

            <section id="route-planning">
                <div className="service">
                    <h2>Route Planning</h2>
                    <p>Plan your journey with ease using TransitEase's route planning feature. Simply enter your starting point and destination to view the best transit routes and schedules.</p>
                </div>
            </section>

            <section id="payment-methods">
                <div className="service">
                    <h2>Payment Methods</h2>
                    <p>TransitEase accepts a variety of payment methods for your convenience, including credit/debit cards, mobile wallets, and digital vouchers. Pay securely and conveniently for your transit fares.</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 TransitEase. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Services;
