import React from 'react';
import './Footer.css';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-soft mt-2">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">AYURA <span>Floral Exports</span></h2>
                        <p className="footer-desc">
                            Your trusted partner for wholesale, bulk, and event floral supplies. Delivering freshness and elegance daily.
                        </p>
                        <div className="social-links mt-5">
                            <a href="https://youtube.com/@ayurafloral?si=NRL9BPzrODGW2Z_W" className="social-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={32} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Services</h4>
                        <ul>
                            <li><a href="#products">Wholesale Supply</a></li>
                            <li><a href="#products">Wedding & Events</a></li>
                            <li><a href="#products">Temple Supply</a></li>
                            <li><a href="#order">Bulk Ordering</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ayura Floral Exports. All rights reserved.</p>
                    <p className="credit">Designed for Wholesale Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
