import React from 'react';
import './FloatingWhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="floating-whatsapp-icon" />
        </a>
    );
};

export default FloatingWhatsApp;
