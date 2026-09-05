import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import useFirebaseData from '../../hooks/useFirebaseData';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './Offers.css';

const Offers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged(user => setCurrentUser(user));
  }, []);

  const [offersData, , isReady] = useFirebaseData('codewizen_store_offers', []);
  const offers = Array.isArray(offersData) ? offersData : (offersData ? Object.values(offersData) : []);

  const [ordersData, setOrders] = useFirebaseData('codewizen_store_orders', []);
  const orders = Array.isArray(ordersData) ? ordersData : (ordersData ? Object.values(ordersData) : []);

  const [contactInfo] = useFirebaseData('codewizen_contact_info', {});

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [paymentStep, setPaymentStep] = useState(false);
  const [verifyingPayment, setVerifyingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [currentOrderId, setCurrentOrderId] = useState(null);

  // Track pending courses in localStorage (offerId -> orderId)
  const getPendingCourses = () => {
    try { return JSON.parse(localStorage.getItem('codewizen_pending_courses')) || {}; }
    catch { return {}; }
  };
  const [pendingCourses, setPendingCourses] = useState(getPendingCourses());

  const setPendingCourse = (offerId, orderId) => {
    const updated = { ...pendingCourses, [offerId]: orderId };
    setPendingCourses(updated);
    localStorage.setItem('codewizen_pending_courses', JSON.stringify(updated));
  };

  const clearPendingCourse = (offerId) => {
    const updated = { ...pendingCourses };
    delete updated[offerId];
    setPendingCourses(updated);
    localStorage.setItem('codewizen_pending_courses', JSON.stringify(updated));
  };

  // Only show active offers
  const activeOffers = offers.filter(o => o.active);

  const handleBuyClick = (offer) => {
    if (!currentUser) {
      navigate('/auth', { state: { from: location } });
      return;
    }

    // If it's already pending, restore the waiting modal
    const pendingOrderId = pendingCourses[offer.id];
    if (pendingOrderId && orders.some(o => o && o.id === pendingOrderId && o.status === 'Pending Payment')) {
      setSelectedOffer(offer);
      setCurrentOrderId(pendingOrderId);
      setPaymentStep(true);
      return;
    }

    // Otherwise, start fresh checkout
    setSelectedOffer(offer);
    setPaymentStep(false);
    setPaymentSuccess(false);
    setVerifyingPayment(false);
    setFormData({ name: currentUser.displayName || '', email: currentUser.email || '', phone: '' });
    setCurrentOrderId(null);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!selectedOffer) return;

    const newOrder = {
      ...formData,
      id: Date.now(),
      uid: currentUser.uid,
      offerId: selectedOffer.id,
      offerTitle: selectedOffer.title,
      amount: selectedOffer.discountPrice,
      status: 'Pending Payment',
      date: new Date().toISOString()
    };

    setOrders([...orders, newOrder]);
    setCurrentOrderId(newOrder.id);
    setPendingCourse(selectedOffer.id, newOrder.id);
    setPaymentStep(true);
  };

  // Real-time listener: Watch if the admin marks this specific order as "Paid" in the database
  useEffect(() => {
    if (paymentStep && currentOrderId) {
      const currentOrder = orders.find(o => o && o.id === currentOrderId);
      if (currentOrder && currentOrder.status === 'Paid') {
        // The admin marked it as paid!
        clearPendingCourse(selectedOffer?.id);
        setPaymentStep(false);
        setPaymentSuccess(true);

        setTimeout(() => {
          setSelectedOffer(null);
          setPaymentSuccess(false);
          setCurrentOrderId(null);
        }, 3000);
      }
    }
  }, [orders, paymentStep, currentOrderId, selectedOffer]);

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
          activeOffers.map((offer, i) => {
            // Verify if the logged in user has a valid Paid order in the database for this offer
            const isUnlocked = currentUser && orders.some(o => o && o.offerId === offer.id && o.uid === currentUser.uid && o.status === 'Paid');
            const pendingOrderId = pendingCourses[offer.id];

            return (
              <div className={`offer-card ${isUnlocked ? 'unlocked' : ''}`} key={offer.id} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="offer-image-wrapper">
                  {!isUnlocked && <div className="offer-badge">SAVE {calculateDiscount(offer.originalPrice, offer.discountPrice)}%</div>}
                  {isUnlocked && <div className="offer-badge" style={{ background: '#10b981' }}>UNLOCKED</div>}
                  <img src={offer.imageUrl || 'https://via.placeholder.com/500x300'} alt={offer.title} />
                </div>
                <div className="offer-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-desc">{offer.description}</p>

                  <ul className="offer-features">
                    {offer.features && offer.features.map((feat, idx) => (
                      <li key={idx}><FaCheckCircle color={isUnlocked ? '#10b981' : '#e11d48'} /> {feat}</li>
                    ))}
                  </ul>

                  {!isUnlocked ? (
                    <>
                      <div className="offer-pricing">
                        <span className="o-discount-price">₹{offer.discountPrice.toLocaleString('en-IN')}</span>
                        <span className="o-original-price">₹{offer.originalPrice.toLocaleString('en-IN')}</span>
                      </div>

                      {pendingOrderId && orders.some(o => o && o.id === pendingOrderId && o.status === 'Pending Payment') ? (
                        <button className="offer-btn" style={{ background: '#f59e0b' }} onClick={() => handleBuyClick(offer)}>
                          Pending Approval...
                        </button>
                      ) : (
                        <button className="offer-btn" onClick={() => handleBuyClick(offer)}>
                          <FaShoppingCart /> Buy Now
                        </button>
                      )}
                    </>
                  ) : (
                    <button className="offer-btn" style={{ background: '#10b981' }} onClick={() => window.location.href = `/dashboard/${offer.id}`}>
                      Go to Dashboard
                    </button>
                  )}
                </div>
              </div>
            )
          })
        )}
      </section>

      {/* Checkout Modal */}
      {selectedOffer && (
        <div className="ws-modal-overlay">
          <div className="ws-modal">
            <button className="ws-modal-close" onClick={() => { setSelectedOffer(null); setPaymentStep(false); }}>×</button>

            {!paymentStep ? (
              <>
                <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Checkout</h2>
                <p style={{ color: '#64748b', marginBottom: '20px' }}>
                  You are purchasing: <strong>{selectedOffer.title}</strong> for ₹{selectedOffer.discountPrice}
                </p>

                <form onSubmit={handleRegister} className="ws-form">
                  <div className="ws-form-group">
                    <label>Name as per Bank Account</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AKHIL RAMBHA"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <small style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                      This must match your UPI/bank account name for payment verification.
                    </small>
                  </div>
                  <div className="ws-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="ws-form-group">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="ws-btn-red" style={{ width: '100%', marginTop: '10px' }}>
                    Proceed to Pay ₹{selectedOffer.discountPrice}
                  </button>
                </form>
              </>
            ) : paymentSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <FaCheckCircle style={{ fontSize: '64px', color: '#10b981', marginBottom: '20px' }} />
                <h2 style={{ color: '#0f172a', marginBottom: '10px' }}>Payment Successful!</h2>
                <p style={{ color: '#64748b', marginBottom: '20px' }}>Your bundle has been unlocked successfully.</p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Redirecting you to the course dashboard...</p>
              </div>
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

                <div style={{ padding: '15px', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', marginTop: '20px' }}>
                  <p style={{ fontSize: '0.9rem', color: '#b45309', margin: 0, fontWeight: 'bold' }}>
                    <span className="spinner" style={{ display: 'inline-block', marginRight: '8px', animation: 'spin 2s linear infinite' }}>⏳</span>
                    Waiting for payment confirmation...
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#d97706', margin: '5px 0 0 0' }}>
                    Please do not close this window. Your course will unlock automatically once payment is verified by our team.
                  </p>
                </div>

                {/* Payment Support Section */}
                <div style={{ padding: '15px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', marginTop: '15px', textAlign: 'left' }}>
                  <p style={{ fontSize: '0.85rem', color: '#0369a1', margin: 0, fontWeight: 'bold' }}>
                    ⚠️ Payment stuck or deducted but not confirmed?
                  </p>
                  <ul style={{ fontSize: '0.8rem', color: '#0c4a6e', margin: '8px 0 0 0', paddingLeft: '18px', lineHeight: '1.8' }}>
                    <li>Don't worry — your money is safe. If debited, it will be verified within <strong>30 minutes</strong>.</li>
                    <li>Do <strong>NOT</strong> make a duplicate payment.</li>
                    <li>Take a <strong>screenshot</strong> of your payment confirmation.</li>
                    <li>
                      Contact us on WhatsApp: <a href={`https://wa.me/${(contactInfo?.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', fontWeight: 'bold' }}>{contactInfo?.whatsapp || 'Support'}</a>
                    </li>
                    <li>
                      Or call us: <a href={`tel:${(contactInfo?.phone || '').replace(/[^0-9+]/g, '')}`} style={{ color: '#0369a1', fontWeight: 'bold' }}>{contactInfo?.phone || 'Support'}</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
