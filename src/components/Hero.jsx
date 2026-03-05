import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png'; // Assuming we have this asset
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="fade-in">
                    <h1 className="hero-title">Fresh Wholesale Flowers Delivered Daily</h1>
                    <p className="hero-subtitle">
                        Tied • Untied • Festooned • Wedding • Temple • Funeral Orders
                    </p>
                    <div className="hero-buttons">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary hero-btn"
                        >
                            <FaWhatsapp /> Order on WhatsApp
                        </a>
                        <a href="tel:+919876543210" className="btn btn-primary hero-btn">
                            <FaPhone /> Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
