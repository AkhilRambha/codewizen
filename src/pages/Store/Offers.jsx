import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './Offers.css';

const Offers = () => {
  const [offers, , isReady] = useFirebaseData('codewizen_store_offers', []);
  const [orders, setOrders] = useFirebaseData('codewizen_store_orders', []);
  const [contactInfo] = useFirebaseData('codewizen_contact_info', {});
  
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [paymentStep, setPaymentStep] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Only show active offers
  const activeOffers = offers.filter(o => o.active);

  const handleBuyClick = (offer) => {
    setSelectedOffer(offer);
    setPaymentStep(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!selectedOffer) return;

    const newOrder = {
      ...formData,
      id: Date.now(),
      offerId: selectedOffer.id,
      amount: selectedOffer.discountPrice,
      status: 'Pending Payment',
      date: new Date().toISOString()
    };
    
    setOrders([...orders, newOrder]);
    setPaymentStep(true);
  };

  const calculateDiscount = (original, discount) => {
    return Math.round(((original - discount) / original) * 100);
  };

  return (
    <div className="offers-page">
      <section className="offers-hero">
        <div className="offers-hero-container" data-aos="fade-up">
          <h1>Exclusive <span>Bundles & Offers</span></h1>
          <p>Supercharge your career with our carefully curated course bundles at unbeatable prices.</p>
        </div>
      </section>

      <section className="offers-grid-container">
        {!isReady ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#64748b' }}>
            Loading amazing offers...
          </div>
        ) : activeOffers.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#112255' }}>No active offers at the moment.</h2>
            <p style={{ color: '#64748b' }}>Please check back later for exciting new bundles!</p>
          </div>
        ) : (
          activeOffers.map((offer, i) => (
            <div className="offer-card" key={offer.id} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="offer-image-wrapper">
                <div className="offer-badge">SAVE {calculateDiscount(offer.originalPrice, offer.discountPrice)}%</div>
                <img src={offer.imageUrl || 'https://via.placeholder.com/500x300'} alt={offer.title} />
              </div>
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>
                
                <ul className="offer-features">
                  {offer.features && offer.features.map((feat, idx) => (
                    <li key={idx}><FaCheckCircle /> {feat}</li>
                  ))}
                </ul>

                <div className="offer-pricing">
                  <span className="o-discount-price">₹{offer.discountPrice.toLocaleString('en-IN')}</span>
                  <span className="o-original-price">₹{offer.originalPrice.toLocaleString('en-IN')}</span>
                </div>

                <button className="offer-btn" onClick={() => handleBuyClick(offer)}>
                  <FaShoppingCart /> Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Checkout Modal */}
      {selectedOffer && (
        <div className="ws-modal-overlay">
          <div className="ws-modal">
            <button className="ws-modal-close" onClick={() => { setSelectedOffer(null); setPaymentStep(false); }}>×</button>
            
            {!paymentStep ? (
              <>
                <h2 style={{color: '#0f172a', marginBottom: '10px'}}>Checkout</h2>
                <p style={{color: '#64748b', marginBottom: '20px'}}>
                  You are purchasing: <strong>{selectedOffer.title}</strong> for ₹{selectedOffer.discountPrice}
                </p>
                
                <form onSubmit={handleRegister} className="ws-form">
                  <div className="ws-form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="ws-form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="ws-form-group">
                    <label>WhatsApp Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="ws-btn-red" style={{width: '100%', marginTop: '10px'}}>
                    Proceed to Pay ₹{selectedOffer.discountPrice}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Complete Your Payment</h2>
                <p style={{ color: '#64748b', marginBottom: '20px' }}>Pay ₹{selectedOffer.discountPrice} securely via UPI</p>
                
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'inline-block', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                  <QRCodeSVG 
                    value={`upi://pay?pa=${contactInfo?.upiId || 'test@upi'}&pn=Codewizen&am=${selectedOffer.discountPrice}&cu=INR`} 
                    size={200}
                    level={"H"}
                  />
                </div>
                
                <p style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 'bold', marginBottom: '20px' }}>Scan with PhonePe, GPay, or Paytm</p>
                
                <a 
                  href={`upi://pay?pa=${contactInfo?.upiId || 'test@upi'}&pn=Codewizen&am=${selectedOffer.discountPrice}&cu=INR`}
                  className="ws-btn-red"
                  style={{ display: 'block', textDecoration: 'none', background: '#5f259f', marginBottom: '15px', color: 'white' }}
                >
                  Open PhonePe / UPI App
                </a>
                
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>After payment, you will receive a confirmation message shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
