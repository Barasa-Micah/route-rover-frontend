import React from 'react';
import './AboutUsPage.css'; // Import your CSS file for styling

function AboutUsPage() {
    return (
        <div className="about-us-page">
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

            <section id="mission">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>To provide convenient and efficient multi-modal ticketing and payment solutions for public transportation.</p>
                </div>
            </section>

            <section id="team">
                <h2>Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="path/to/your/image.jpg" alt="Team Member" />
                        <h3>Micah Barasa</h3>
                        <p>CEO</p>
                    </div>
                    {/* <div className="team-member">
                        <img src="path/to/your/image.jpg" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div> */}
                </div>
            </section>

            <footer>
                <p>&copy; 2024 TransitEase. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUsPage;
