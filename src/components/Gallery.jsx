import React from 'react';
import './Gallery.css';

import weddingImg from '../assets/gallery/wedding.jpg';
import templeImg from '../assets/gallery/temple.jpg';
import bulkImg from '../assets/gallery/bulk.jpg';
import festoonImg from '../assets/gallery/festoon.jpg';
import flowerBouquetImg from '../assets/gallery/FlowerBouquet.jpg';
import eventImg from '../assets/gallery/event.jpg';

const galleryImages = [
    { id: 1, type: 'wedding', altText: 'Beautiful floral decorations for a traditional wedding ceremony', src: weddingImg },
    { id: 2, type: 'temple', altText: 'Vibrant marigold and jasmine garlands adorning a temple deity', src: templeImg },
    { id: 3, type: 'bulk', altText: 'Large wholesale quantities of fresh colorful roses', src: bulkImg },
    { id: 4, type: 'festoon', altText: 'Decorative floral festoon hanging arrangements for festive events', src: festoonImg },
    { id: 5, type: 'FlowerBouquet', altText: 'Elegant hand-tied flower bouquet with mixed fresh blooms', src: flowerBouquetImg },
    { id: 6, type: 'event', altText: 'Luxurious floral stage decoration setup for a corporate event', src: eventImg },
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery bg-soft">
            <div className="container">
                <div className="text-center fade-in">
                    <h2 className="section-title">Our Work</h2>
                    <p className="section-subtitle">Gallery</p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div
                            className="gallery-item fade-in"
                            key={img.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="gallery-placeholder">
                                <img src={img.src} alt={img.altText} loading="lazy" />
                                <div className="overlay">
                                    <span className="gallery-text capitalize">{img.type} Work</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
