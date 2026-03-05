import React from 'react';
import './Gallery.css';

const galleryImages = [
    { id: 1, type: 'wedding', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, type: 'temple', src: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, type: 'bulk', src: 'https://images.unsplash.com/photo-1549444747-d5d83660afdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, type: 'festoon', src: 'https://images.unsplash.com/photo-1634502597793-1b942baebd57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 5, type: 'wedding', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 6, type: 'bulk', src: 'https://images.unsplash.com/photo-1546255146-59b40c6c7ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery bg-soft">
            <div className="container">
                <div className="text-center fade-in">
                    <h2 className="section-title">Our Work</h2>
                    <p className="section-subtitle">Gallery</p>
                </div>

                <div className="masonry-grid mt-5">
                    {galleryImages.map((img, index) => (
                        <div
                            className="masonry-item fade-in"
                            key={img.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="gallery-placeholder">
                                <img src={img.src} alt={img.type} loading="lazy" />
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
