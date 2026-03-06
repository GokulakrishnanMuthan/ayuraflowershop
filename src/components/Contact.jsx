import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="text-center fade-in">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">Contact & Location</p>
                </div>

                <div className="contact-container mt-5 fade-in">
                    <div className="contact-details">
                        <h3 className="contact-heading">Visit Our Wholesale Hub</h3>
                        <p className="contact-text">
                            We welcome event managers, temple authorities, and retailers to visit our facility and inspect the quality of our daily harvest.
                        </p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div>
                                    <h4>Address</h4>
                                    <p>328 Sakthi Main Road, 2nd St, opposite Prozone mall,<br />Siranandha Puram, Coimbatore, Tamil Nadu 641035</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919994048950">+91 99940 48950</a></p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaClock /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>24hr</p>
                                    <p className="highlight-text">Early morning pickups available for fresh arrivals.</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:Ayurafloralexports@gmail.com">Ayurafloralexports@gmail.com</a></p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/919994048950"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary contact-wa-btn mt-5"
                        >
                            <FaWhatsapp /> Chat on WhatsApp
                        </a>
                    </div>

                    <div className="contact-map">
                        {/* Embedded Google Map (Placeholder iframe) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.121173425699!2d76.9955171!3d11.055741200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a13a03d0d5%3A0xd59f027193616f7b!2sAyura%20Floral%20Exports!5e1!3m2!1sen!2sin!4v1772771199024!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
