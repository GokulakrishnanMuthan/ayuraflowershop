import React from 'react';
import './About.css';
import { FaClock, FaTruck, FaBoxOpen } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaClock />,
            title: '10+ Years Experience',
            description: 'Trusted supplier with over a decade of expertise in floral logistics and event styling.'
        },
        {
            icon: <FaTruck />,
            title: 'Same Day Delivery',
            description: 'Freshness guaranteed with our reliable and swift same-day delivery network.'
        },
        {
            icon: <FaBoxOpen />,
            title: 'Bulk Orders Accepted',
            description: 'Capacity to handle massive orders for weddings, temples, and corporate events.'
        },
        {
            icon: <FaTruck />,
            title: 'Door Step Delivery',
            description: 'Convenient and reliable door step delivery directly to your venue or business.'
        }
    ];

    return (
        <section id="about" className="about bg-soft">
            <div className="container">
                <div className="about-header text-center fade-in">
                    <h2 className="section-title">About Ayura Floral Exports</h2>
                    <p className="section-subtitle">Premium Wholesale Florist</p>
                    <p className="about-description">
                        Ayura Floral Exports is a leading wholesale supplier dedicated to providing the freshest, highest quality blooms.
                        From sacred temple garlands to elegant wedding decorations, we source directly from premium farms to ensure vibrant colors, lasting fragrance, and unmatched reliability. We are a business-focused partner you can trust.
                    </p>
                </div>

                <div className="features-grid mt-5">
                    {features.map((feature, index) => (
                        <div
                            className="feature-card zoom-in hover-lift"
                            key={index}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-text">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
