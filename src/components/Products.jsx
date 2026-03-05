import React from 'react';
import './Products.css';
import { FaWhatsapp } from 'react-icons/fa';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Fresh Jasmine',
            description: 'Handpicked premium jasmine buds and full blooms for temples and weddings.',
            image: 'https://images.unsplash.com/photo-1629858509015-fe70ef5633bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 2,
            name: 'Bulk Roses',
            description: 'Vibrant roses available in multiple colors for events and decoration.',
            image: 'https://images.unsplash.com/photo-1549444747-d5d83660afdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 3,
            name: 'Marigold Lots',
            description: 'Bright orange and yellow marigolds, perfect for festive decorations.',
            image: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 4,
            name: 'Custom Garlands',
            description: 'Intricately woven traditional garlands for VIP welcomes and weddings.',
            image: 'https://images.unsplash.com/photo-1634502597793-1b942baebd57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 5,
            name: 'Event Decorations',
            description: 'Complete floral setups for mandaps, stages, and corporate events.',
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
            id: 6,
            name: 'Funeral Arrangements',
            description: 'Respectful and elegant floral tributes for memorial services.',
            image: 'https://images.unsplash.com/photo-1546255146-59b40c6c7ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        }
    ];

    const handleOrder = (productName) => {
        const message = encodeURIComponent(`Hi Ayura Flower Shop, I would like to inquire about bulk ordering ${productName}.`);
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <section id="products" className="products">
            <div className="container">
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
                                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
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
