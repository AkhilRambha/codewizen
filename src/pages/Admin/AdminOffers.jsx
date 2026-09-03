import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaPlus, FaTrash, FaEdit, FaImage, FaTag, FaDownload } from 'react-icons/fa';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Admin.css';

const defaultOffersData = [
  {
    id: "java-python-bundle",
    title: "Mega Backend Bundle: Java + Python Full Stack",
    description: "Master both Java and Python ecosystems. Dual certification and guaranteed placement assistance.",
    originalPrice: 46998,
    discountPrice: 29999,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    features: ["Core & Adv Java", "Python & Django", "React JS Frontend", "Dual Certification"],
    active: true
  },
  {
    id: "gen-ai-data-science",
    title: "AI Engineer Special: Data Science + Gen AI",
    description: "The ultimate track to become an AI engineer. From Pandas and Machine Learning to RAG and LLMs.",
    originalPrice: 54998,
    discountPrice: 34999,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
    features: ["Machine Learning", "Deep Learning", "Prompt Engineering", "LlamaIndex & LangChain"],
    active: true
  },
  {
    id: "software-testing-pro",
    title: "QA Pro Bundle: Manual + Automation + API",
    description: "The complete toolkit to become a highly paid QA Engineer. Learn Selenium, Postman, and CI/CD pipelines.",
    originalPrice: 35998,
    discountPrice: 19999,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    features: ["Manual Testing", "Selenium Automation", "Postman API", "100% Placement Support"],
    active: true
  }
];

const AdminOffers = () => {
  const [offers, setOffers] = useFirebaseData('codewizen_store_offers', defaultOffersData);
  const [orders, setOrders] = useFirebaseData('codewizen_store_orders', []);
  
  const [activeTab, setActiveTab] = useState('manage'); // 'manage', 'orders'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const openCreateModal = () => {
    setEditingOffer({
      id: `offer-${Date.now()}`,
      title: "",
      description: "",
      originalPrice: 0,
      discountPrice: 0,
      imageUrl: "",
      features: [""],
      active: true
    });
    setIsModalOpen(true);
  };

  const handleExportOrders = () => {
    downloadCSV(orders, `store_orders_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const storage = getStorage();
      const fileRef = storageRef(storage, `offer-images/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setEditingOffer({ ...editingOffer, imageUrl: url });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Filter empty features
    const cleanOffer = {
      ...editingOffer,
      features: editingOffer.features.filter(f => f.trim() !== "")
    };

    const existingIndex = offers.findIndex(o => o.id === cleanOffer.id);
    if (existingIndex >= 0) {
      const updated = [...offers];
      updated[existingIndex] = cleanOffer;
      setOffers(updated);
    } else {
      setOffers([...offers, cleanOffer]);
    }
    
    setIsModalOpen(false);
    setEditingOffer(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      setOffers(offers.filter(o => o.id !== id));
    }
  };

  const toggleActive = (id) => {
    setOffers(offers.map(o => o.id === id ? { ...o, active: !o.active } : o));
  };

  const markOrderPaid = (id) => {
    if (window.confirm("Mark this order as Paid?")) {
      setOrders(orders.map(o => o.id === id ? { ...o, status: 'Paid' } : o));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Store & Offers Management</h2>
        <div>
          <button 
            className={`admin-btn ${activeTab === 'manage' ? 'active' : 'outline'}`}
            onClick={() => setActiveTab('manage')}
            style={{ marginRight: '10px' }}
          >
            Manage Offers
          </button>
          <button 
            className={`admin-btn ${activeTab === 'orders' ? 'active' : 'outline'}`}
            onClick={() => setActiveTab('orders')}
          >
            Store Orders
          </button>
        </div>
      </div>

      {activeTab === 'manage' && (
        <>
          <button className="admin-btn active" onClick={openCreateModal} style={{ marginBottom: '20px' }}>
            <FaPlus /> Create New Offer
          </button>

          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Offer Title</th>
                  <th>Pricing</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.length === 0 ? (
                  <tr><td colSpan="5" style={{ textAlign: 'center' }}>No offers found. Create one above.</td></tr>
                ) : (
                  offers.map(offer => (
                    <tr key={offer.id}>
                      <td>
                        <img src={offer.imageUrl || 'https://via.placeholder.com/100x60'} alt={offer.title} style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                      </td>
                      <td>
                        <strong>{offer.title}</strong>
                      </td>
                      <td>
                        <div style={{ color: '#ea580c', fontWeight: 'bold' }}>₹{offer.discountPrice}</div>
                        <div style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '12px' }}>₹{offer.originalPrice}</div>
                      </td>
                      <td>
                        <button 
                          onClick={() => toggleActive(offer.id)}
                          style={{
                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer',
                            background: offer.active ? '#dcfce3' : '#1e293b',
                            color: offer.active ? '#16a34a' : 'white'
                          }}
                        >
                          {offer.active ? 'Active' : 'Hidden'}
                        </button>
                      </td>
                      <td style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#3b82f6', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }} onClick={() => { setEditingOffer(offer); setIsModalOpen(true); }}>
                          <FaEdit /> Edit
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }} onClick={() => handleDelete(offer.id)}>
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeTab === 'orders' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <button 
              onClick={handleExportOrders} 
              className="admin-btn active" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <FaDownload /> Export Orders CSV
            </button>
          </div>
          <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Offer Purchased</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr><td colSpan="7" style={{ textAlign: 'center' }}>No orders yet.</td></tr>
              ) : (
                [...orders].reverse().map(order => (
                  <tr key={order.id}>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td><strong>{order.name}</strong></td>
                    <td>{order.email}<br/>{order.phone}</td>
                    <td>{offers.find(o => o.id === order.offerId)?.title || 'Unknown Offer'}</td>
                    <td style={{ fontWeight: 'bold', color: '#112255' }}>₹{order.amount}</td>
                    <td>
                      <span className={`status-badge ${order.status === 'Paid' ? 'contacted' : 'new'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      {order.status !== 'Paid' && (
                        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#10b981', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }} onClick={() => markOrderPaid(order.id)}>
                          Mark Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        </>
      )}

      {/* Editor Modal */}
      {isModalOpen && editingOffer && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3>{editingOffer.title ? 'Edit Offer' : 'Create New Offer'}</h3>
            
            <form onSubmit={handleSave} className="admin-modal-form">
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label>Offer Title</label>
                  <input type="text" required value={editingOffer.title} onChange={e => setEditingOffer({...editingOffer, title: e.target.value})} placeholder="e.g. Master Backend Bundle" />
                </div>
                <div>
                  <label>URL ID (No spaces)</label>
                  <input type="text" required value={editingOffer.id} onChange={e => setEditingOffer({...editingOffer, id: e.target.value.replace(/\s+/g, '-').toLowerCase()})} />
                </div>
              </div>

              <div>
                <label>Description (Short summary)</label>
                <textarea required rows="2" value={editingOffer.description} onChange={e => setEditingOffer({...editingOffer, description: e.target.value})} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label>Original Price (₹)</label>
                  <input type="number" required value={editingOffer.originalPrice} onChange={e => setEditingOffer({...editingOffer, originalPrice: parseInt(e.target.value)})} />
                </div>
                <div>
                  <label>Discount Price (₹)</label>
                  <input type="number" required value={editingOffer.discountPrice} onChange={e => setEditingOffer({...editingOffer, discountPrice: parseInt(e.target.value)})} />
                </div>
              </div>

              <div>
                <label>Thumbnail Image</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {editingOffer.imageUrl && (
                    <img src={editingOffer.imageUrl} alt="preview" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  )}
                  <div style={{ flex: 1 }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload} 
                      disabled={isUploading}
                      style={{ padding: '8px' }}
                    />
                    {isUploading && <span style={{ fontSize: '12px', color: '#ea580c', marginLeft: '10px' }}>Uploading...</span>}
                  </div>
                </div>
              </div>

              <div>
                <label>Features included (Bullet points)</label>
                {editingOffer.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <input 
                      type="text" 
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...editingOffer.features];
                        newFeatures[i] = e.target.value;
                        setEditingOffer({...editingOffer, features: newFeatures});
                      }}
                      placeholder={`Feature ${i+1}`}
                    />
                    <button type="button" onClick={() => {
                      const newFeatures = [...editingOffer.features];
                      newFeatures.splice(i, 1);
                      setEditingOffer({...editingOffer, features: newFeatures});
                    }} style={{ background: '#fef2f2', color: '#dc2626', border: 'none', padding: '0 15px', borderRadius: '8px', cursor: 'pointer' }}>X</button>
                  </div>
                ))}
                <button type="button" onClick={() => setEditingOffer({...editingOffer, features: [...editingOffer.features, ""]})} style={{ background: '#f1f5f9', color: '#475569', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  + Add Feature
                </button>
              </div>

              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">Save Offer</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminOffers;
