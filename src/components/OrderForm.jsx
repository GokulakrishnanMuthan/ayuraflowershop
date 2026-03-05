import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        flowerType: '',
        quantity: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp message
        const waMessage = `*New Bulk Order Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Flower Type:* ${formData.flowerType}%0A*Quantity:* ${formData.quantity}%0A*Delivery Date:* ${formData.date}%0A*Message:* ${formData.message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/919876543210?text=${waMessage}`, '_blank');
    };

    return (
        <section id="order" className="order bg-soft">
            <div className="container">
                <div className="order-wrapper fade-in">
                    <div className="order-info">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Place a Bulk Order</h2>
                        <p className="order-desc">
                            Need fresh flowers in large quantities? Whether it's for a daily temple supply, a grand wedding, or a special event, Ayura ensures top quality and timely delivery.
                            Fill out the form to instantly send your requirements to our wholesale team via WhatsApp.
                        </p>
                        <ul className="order-benefits">
                            <li>✔ Guaranteed Freshness</li>
                            <li>✔ Competitive Wholesale Rates</li>
                            <li>✔ Priority Delivery Routing</li>
                        </ul>
                    </div>

                    <div className="order-form-container">
                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-group row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name / Business Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group row">
                                <select
                                    name="flowerType"
                                    required
                                    value={formData.flowerType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Flower Type</option>
                                    <option value="Jasmine">Jasmine (Full / Buds)</option>
                                    <option value="Roses">Roses (Bulk Colors)</option>
                                    <option value="Marigolds">Marigolds</option>
                                    <option value="Garlands">Custom Garlands</option>
                                    <option value="Mixed Assortment">Mixed Assortment</option>
                                    <option value="Other">Other (Specify in message)</option>
                                </select>
                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Estimate Quantity (e.g., 50 kgs)"
                                    required
                                    value={formData.quantity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date" className="form-label">Expected Delivery Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Any specific requirements? (Colors, packaging, delivery time)"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-secondary order-submit-btn">
                                Send Order via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;
