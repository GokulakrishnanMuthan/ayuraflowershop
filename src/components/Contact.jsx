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
                                    <p>123 Flower Market Road, Wholesale District,<br />City Name, State, 123456</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                                    <p><a href="tel:+919876543211">+91 98765 43211</a></p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaClock /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Daily: 4:00 AM - 8:00 PM</p>
                                    <p className="highlight-text">Early morning pickups available for fresh arrivals.</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:orders@ayuraflowershop.com">orders@ayuraflowershop.com</a></p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/919876543210"
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173111422!2d76.88483256087596!3d11.014261474271887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709626578036!5m2!1sen!2sin"
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
