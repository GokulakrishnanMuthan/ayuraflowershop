import React from 'react';
import './Products.css';
import { FaWhatsapp } from 'react-icons/fa';
import Bokeh from './Bokeh';

import jasmineImg from '../assets/products/jasmine.jpg';
import bulkRosesImg from '../assets/products/BulkRoses.jpg';
import marigoldImg from '../assets/products/MarigoldLots.jpg';
import garlandsImg from '../assets/products/CustomGarlands.jpg';
import eventDecorImg from '../assets/products/Event Decorations.avif';
import funeralImg from '../assets/products/FuneralArrangements.jpg';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Fresh Jasmine',
            description: 'Handpicked premium jasmine buds and full blooms for temples and weddings.',
            altText: 'Pile of fresh, fragrant white jasmine flower buds for garlands and temple offerings',
            image: jasmineImg,
        },
        {
            id: 2,
            name: 'Bulk Roses',
            description: 'Vibrant roses available in multiple colors for events and decoration.',
            altText: 'Wholesale bundle of fresh red roses used for event decorations and bouquets',
            image: bulkRosesImg,
        },
        {
            id: 3,
            name: 'Marigold Lots',
            description: 'Bright orange and yellow marigolds, perfect for festive decorations.',
            altText: 'Large sacks of bright orange and yellow marigold flowers for festive occasions',
            image: marigoldImg,
        },
        {
            id: 4,
            name: 'Custom Garlands',
            description: 'Intricately woven traditional garlands for VIP welcomes and weddings.',
            altText: 'Thick, intricately woven traditional Indian wedding garland made of colorful fresh flowers',
            image: garlandsImg,
        },
        {
            id: 5,
            name: 'Event Decorations',
            description: 'Complete floral setups for mandaps, stages, and corporate events.',
            altText: 'Elaborate mandap and stage floral decoration setup for a grand wedding event',
            image: eventDecorImg,
        },
        {
            id: 6,
            name: 'Funeral Arrangements',
            description: 'Respectful and elegant floral tributes for memorial services.',
            altText: 'Elegant white floral wreath and tribute arrangement for a memorial service',
            image: funeralImg,
        }
    ];

    const handleOrder = (productName) => {
        const message = encodeURIComponent(`Hi Ayura Floral Export, I would like to inquire about bulk ordering ${productName}.`);
        window.open(`https://wa.me/919994048950?text=${message}`, '_blank');
    };

    return (
        <section id="products" className="products">
            <Bokeh />
            <div className="container products-container">
                <div className="text-center fade-in">
                    <h2 className="section-title">Our Capabilities</h2>
                    <p className="section-subtitle">Wholesale Offerings</p>
                </div>

                <div className="products-grid mt-5">
                    {products.map((product, index) => (
                        <div
                            className="product-card fade-in"
                            key={product.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.altText} className="product-image" loading="lazy" />
                            </div>
                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-desc">{product.description}</p>
                                <button
                                    className="btn btn-outline product-btn"
                                    onClick={() => handleOrder(product.name)}
                                >
                                    <FaWhatsapp /> Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
