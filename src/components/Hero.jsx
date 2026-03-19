import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FaWhatsapp, FaPhone, FaShoppingCart } from 'react-icons/fa';
import Petals from './Petals';

const Hero = () => {
    const [added, setAdded] = useState(false);
    const [parallax, setParallax] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            setParallax({ x: dx, y: dy });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleAddClick = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1300);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>

            {/* Animated Blobs with Parallax */}
            <div
                className="blob blob-1"
                style={{ transform: `translate(${parallax.x * 18}px, ${parallax.y * 12}px)` }}
            ></div>
            <div
                className="blob blob-2"
                style={{ transform: `translate(${-parallax.x * 14}px, ${-parallax.y * 10}px)` }}
            ></div>
            <div
                className="blob blob-3"
                style={{ transform: `translate(${parallax.x * 10}px, ${-parallax.y * 15}px)` }}
            ></div>

            <Petals />

            {/* LEFT SIDE CONTENT */}
            <div className="hero-left">
                <div className="badge">
                    <div className="badge-dot"></div>
                    Wholesale · Fresh · Daily Delivery
                </div>

                <h1 className="hero-title">
                    Fresh Wholesale<br />
                    <span className="highlight">Flowers</span><br />
                    Delivered Daily
                </h1>

                <div className="tag-row">
                    <span className="tag">Tied</span>
                    <span className="tag">Untied</span>
                    <span className="tag">Festooned</span>
                    <span className="tag">Wedding</span>
                    <span className="tag">Bouquets</span>
                    <span className="tag">Funeral Orders</span>
                </div>
                {/* 
                <p className="hero-desc">
                    Premium freshly-cut blooms sourced daily, delivered to florists,
                    event planners &amp; businesses across the region. Quality you can see,
                    freshness you can feel.
                </p> */}

                <div className="hero-actions">
                    <a href="https://wa.me/919994048950" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                        <FaWhatsapp size={18} />
                        Order on WhatsApp
                    </a>
                    <a href="tel:09994048950" className="btn-call">
                        <FaPhone size={17} />
                        Call Now
                    </a>
                </div>

                {/* <div className="stats">
                    <div>
                        <div className="stat-num">500+</div>
                        <div className="stat-label">Daily orders</div>
                    </div>
                    <div>
                        <div className="stat-num">50+</div>
                        <div className="stat-label">Flower varieties</div>
                    </div>
                    <div>
                        <div className="stat-num">10+</div>
                        <div className="stat-label">Years experience</div>
                    </div>
                </div> */}
            </div>

            {/* RIGHT SIDE: GARDEN */}
            <div className="hero-right">
                <div className="garden" id="garden">

                    {/* ROSE (top-left) */}
                    <div className="fdeco" style={{ top: '-12px', left: '-20px', animation: 'sway1 4s ease-in-out infinite' }}>
                        <svg width="130" height="155" viewBox="0 0 130 155" fill="none">
                            <path d="M65 152 Q58 112 61 80" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                            <path d="M61 108 Q40 96 36 74" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="44" cy="84" rx="15" ry="8" fill="#388E3C" transform="rotate(-30 44 84)" />
                            <ellipse cx="65" cy="56" rx="17" ry="24" fill="#F48FB1" opacity=".92" />
                            <ellipse cx="65" cy="56" rx="12" ry="17" fill="#F8BBD0" opacity=".88" />
                            <ellipse cx="51" cy="60" rx="15" ry="11" fill="#F06292" opacity=".86" transform="rotate(-40 51 60)" />
                            <ellipse cx="79" cy="60" rx="15" ry="11" fill="#EC407A" opacity=".86" transform="rotate(40 79 60)" />
                            <ellipse cx="65" cy="72" rx="16" ry="11" fill="#F48FB1" opacity=".82" />
                            <ellipse cx="54" cy="44" rx="13" ry="9" fill="#FCE4EC" opacity=".9" transform="rotate(-20 54 44)" />
                            <ellipse cx="76" cy="44" rx="13" ry="9" fill="#FCE4EC" opacity=".9" transform="rotate(20 76 44)" />
                            <circle cx="65" cy="55" r="9" fill="#E91E63" />
                            <circle cx="65" cy="55" r="5" fill="#C2185B" />
                        </svg>
                    </div>

                    {/* SUNFLOWER (top-right) */}
                    <div className="fdeco" style={{ top: '-5px', right: '5px', animation: 'sway2 5s ease-in-out infinite' }}>
                        <svg width="125" height="160" viewBox="0 0 125 160" fill="none">
                            <path d="M62 158 Q57 118 59 86" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                            <path d="M59 115 Q78 103 82 83" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="75" cy="92" rx="14" ry="7" fill="#388E3C" transform="rotate(30 75 92)" />
                            <g transform="translate(62,62)">
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F9A825" transform="rotate(0)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F57F17" transform="rotate(45)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F9A825" transform="rotate(90)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F57F17" transform="rotate(135)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F9A825" transform="rotate(180)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F57F17" transform="rotate(225)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F9A825" transform="rotate(270)" />
                                <ellipse cx="0" cy="-30" rx="8" ry="14" fill="#F57F17" transform="rotate(315)" />
                                <circle cx="0" cy="0" r="19" fill="#4E342E" />
                                <circle cx="0" cy="0" r="13" fill="#3E2723" />
                                <circle cx="-1" cy="-6" r="2" fill="#5D4037" opacity=".8" />
                                <circle cx="5" cy="-3" r="2" fill="#5D4037" opacity=".8" />
                                <circle cx="4" cy="5" r="2" fill="#5D4037" opacity=".8" />
                                <circle cx="-5" cy="3" r="2" fill="#5D4037" opacity=".8" />
                                <circle cx="-4" cy="-5" r="2" fill="#5D4037" opacity=".8" />
                            </g>
                        </svg>
                    </div>

                    {/* MARIGOLD (bottom-left) */}
                    <div className="fdeco" style={{ bottom: '5px', left: '-5px', animation: 'sway3 4.5s ease-in-out infinite' }}>
                        <svg width="115" height="148" viewBox="0 0 115 148" fill="none">
                            <path d="M57 146 Q53 106 55 76" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                            <path d="M55 110 Q35 99 28 78" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="37" cy="87" rx="15" ry="7" fill="#388E3C" transform="rotate(-25 37 87)" />
                            <g transform="translate(57,58)">
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(0)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(30)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(60)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(90)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(120)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(150)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(180)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(210)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(240)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(270)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#FF8F00" opacity=".9" transform="rotate(300)" />
                                <ellipse cx="0" cy="-26" rx="9" ry="16" fill="#F57C00" opacity=".88" transform="rotate(330)" />
                                <circle cx="0" cy="0" r="14" fill="#E65100" />
                                <circle cx="0" cy="0" r="8" fill="#BF360C" />
                            </g>
                        </svg>
                    </div>

                    {/* WHITE FLOWER (bottom-right) */}
                    <div className="fdeco" style={{ bottom: '0px', right: '0px', animation: 'sway4 3.8s ease-in-out infinite' }}>
                        <svg width="115" height="148" viewBox="0 0 115 148" fill="none">
                            <path d="M57 146 Q52 106 54 76" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                            <path d="M54 112 Q74 99 79 79" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="70" cy="88" rx="13" ry="7" fill="#388E3C" transform="rotate(30 70 88)" />
                            <g transform="translate(57,57)">
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(0)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(36)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(72)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(108)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(144)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(180)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(216)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(252)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(288)" />
                                <ellipse cx="0" cy="-24" rx="7" ry="14" fill="white" stroke="#C8E6C9" strokeWidth="1" transform="rotate(324)" />
                                <circle cx="0" cy="0" r="14" fill="#F9A825" />
                                <circle cx="0" cy="0" r="9" fill="#F57F17" />
                                <circle cx="-2" cy="-3" r="3" fill="rgba(255,255,255,.4)" />
                            </g>
                        </svg>
                    </div>

                    {/* PINK ROSE right-edge */}
                    <div className="fdeco" style={{ top: '22%', right: '-12px', animation: 'sway4 4.2s 1.5s ease-in-out infinite' }}>
                        <svg width="95" height="128" viewBox="0 0 95 128" fill="none">
                            <path d="M47 126 Q42 88 44 62" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                            <path d="M44 88 Q24 76 20 57" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="28" cy="66" rx="13" ry="6" fill="#388E3C" transform="rotate(-20 28 66)" />
                            <ellipse cx="47" cy="44" rx="21" ry="26" fill="#F8BBD0" opacity=".92" />
                            <ellipse cx="33" cy="47" rx="17" ry="22" fill="#F48FB1" opacity=".86" transform="rotate(-25 33 47)" />
                            <ellipse cx="61" cy="47" rx="17" ry="22" fill="#F8BBD0" opacity=".86" transform="rotate(25 61 47)" />
                            <ellipse cx="47" cy="44" rx="14" ry="18" fill="#F48FB1" opacity=".88" />
                            <ellipse cx="47" cy="44" rx="9" ry="12" fill="#F06292" opacity=".9" />
                            <circle cx="47" cy="44" r="7" fill="#E91E63" />
                            <circle cx="47" cy="44" r="4" fill="#C2185B" />
                            <circle cx="45" cy="42" r="2" fill="rgba(255,255,255,.3)" />
                        </svg>
                    </div>

                    {/* PRODUCT CARD */}
                    <div className="prod-card">
                        <div className="prod-img">
                            <svg width="115" height="125" viewBox="0 0 130 130" fill="none">
                                <path d="M65 128 Q58 95 61 68" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                                <path d="M61 95 Q44 84 40 65" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                                <path d="M61 95 Q80 84 84 65" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
                                <ellipse cx="48" cy="73" rx="13" ry="6" fill="#388E3C" transform="rotate(-28 48 73)" />
                                <ellipse cx="82" cy="73" rx="13" ry="6" fill="#2E7D32" transform="rotate(28 82 73)" />
                                <ellipse cx="65" cy="44" rx="15" ry="20" fill="#F48FB1" opacity=".95" />
                                <ellipse cx="65" cy="44" rx="10" ry="14" fill="#F8BBD0" opacity=".9" />
                                <ellipse cx="54" cy="48" rx="13" ry="9" fill="#F06292" opacity=".86" transform="rotate(-40 54 48)" />
                                <ellipse cx="76" cy="48" rx="13" ry="9" fill="#EC407A" opacity=".86" transform="rotate(40 76 48)" />
                                <circle cx="65" cy="43" r="7" fill="#E91E63" />
                                <circle cx="65" cy="43" r="4" fill="#C2185B" />
                                <g transform="translate(42,52)">
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#FF8F00" opacity=".9" transform="rotate(0)" />
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#F57C00" opacity=".85" transform="rotate(60)" />
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#FF8F00" opacity=".9" transform="rotate(120)" />
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#F57C00" opacity=".85" transform="rotate(180)" />
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#FF8F00" opacity=".9" transform="rotate(240)" />
                                    <ellipse cx="0" cy="-14" rx="6" ry="10" fill="#F57C00" opacity=".85" transform="rotate(300)" />
                                    <circle cx="0" cy="0" r="8" fill="#E65100" />
                                </g>
                                <g transform="translate(88,52)">
                                    <ellipse cx="0" cy="-13" rx="6" ry="10" fill="white" stroke="#C8E6C9" strokeWidth=".8" transform="rotate(0)" />
                                    <ellipse cx="0" cy="-13" rx="6" ry="10" fill="white" stroke="#C8E6C9" strokeWidth=".8" transform="rotate(72)" />
                                    <ellipse cx="0" cy="-13" rx="6" ry="10" fill="white" stroke="#C8E6C9" strokeWidth=".8" transform="rotate(144)" />
                                    <ellipse cx="0" cy="-13" rx="6" ry="10" fill="white" stroke="#C8E6C9" strokeWidth=".8" transform="rotate(216)" />
                                    <ellipse cx="0" cy="-13" rx="6" ry="10" fill="white" stroke="#C8E6C9" strokeWidth=".8" transform="rotate(288)" />
                                    <circle cx="0" cy="0" r="7" fill="#F9A825" />
                                </g>
                            </svg>
                        </div>
                        <div className="prod-body">
                            <span className="prod-tag">Bestseller</span>
                            <div className="prod-name">Mixed Bouquet</div>
                            <div className="prod-sub">Roses · Marigolds · White blooms</div>
                            {/* <div className="prod-foot">
                                <span className="price">&#8377; 499/bunch</span>
                                <button
                                    className="add-btn"
                                    onClick={handleAddClick}
                                    style={added ? { background: 'linear-gradient(135deg,#27A849,#1E8C3A)' } : {}}
                                >
                                    {added ? '✓' : '+'}
                                </button>
                            </div> */}
                        </div>
                    </div>

                    {/* CHIPS */}
                    <div className="chip chip-a">
                        <div className="chip-icon" style={{ background: 'rgba(30,140,58,.12)' }}>
                            <FaShoppingCart color="#1E8C3A" size={16} />
                        </div>
                        <div>
                            <div className="chip-lbl">Delivery</div>
                            <div className="chip-val">Daily Fresh</div>
                        </div>
                    </div>
                    <div className="chip chip-b">
                        <div className="chip-icon" style={{ background: 'rgba(232,24,90,.1)' }}>
                            <FaWhatsapp color="#E8185A" size={16} />
                        </div>
                        <div>
                            <div className="chip-lbl">Order via</div>
                            <div className="chip-val">WhatsApp</div>
                        </div>
                    </div>
                    <div className="chip chip-c">
                        <div className="chip-icon" style={{ background: 'rgba(30,140,58,.12)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#1E8C3A" opacity=".85" />
                            </svg>
                        </div>
                        <div>
                            <div className="chip-lbl">Freshness</div>
                            <div className="chip-val">Guaranteed</div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Hero;

