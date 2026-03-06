import React from 'react';
import './WhyChooseUs.css';
import { FaLeaf, FaTags, FaPalette, FaHistory, FaTruck } from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <FaLeaf />,
            title: 'Fresh Daily',
            desc: 'Sourced directly from markets every morning.'
        },
        {
            icon: <FaTags />,
            title: 'Wholesale Pricing',
            desc: 'Highly competitive rates for bulk quantities.'
        },
        {
            icon: <FaPalette />,
            title: 'Custom Arrangements',
            desc: 'Tailored designs to fit any specific event theme.'
        },
        {
            icon: <FaHistory />,
            title: 'On-Time Guaranteed',
            desc: 'Punctual delivery for time-sensitive occasions.'
        },
        {
            icon: <FaTruck />,
            title: 'Door Step Delivery',
            desc: 'Direct delivery to your doorstep for maximum convenience.'
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="wcu-container fade-in">
                    <div className="wcu-text">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose Us</h2>
                        <p className="section-subtitle" style={{ textAlign: 'left' }}>The Ayura Advantage</p>
                        <p className="wcu-description">
                            As a dedicated wholesale supplier, we understand the critical importance of quality, volume, and timing.
                            Our streamlined operations ensure that whether you need regular temple supplies or a massive wedding order,
                            you receive the absolute best blooms exactly when you need them.
                        </p>
                    </div>
                    <div className="wcu-grid">
                        {reasons.map((reason, index) => (
                            <div
                                className="wcu-item fade-in"
                                key={index}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="wcu-icon">{reason.icon}</div>
                                <div className="wcu-content">
                                    <h4 className="wcu-title">{reason.title}</h4>
                                    <p className="wcu-desc">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
