import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Admin.css';

const AdminEvents = () => {
  const [eventData, setEventData] = useLocalStorage('codewizen_latest_event', {
    isActive: false,
    title: 'Upcoming Mega Bootcamp!',
    description: 'Join our exclusive 2-day live coding bootcamp and master MERN Stack from scratch.',
    buttonText: 'Register Now',
    link: '/contact-us',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  });

  const [formData, setFormData] = useState(eventData);
  const [showToast, setShowToast] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setEventData(formData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleToggle = () => {
    const updated = { ...formData, isActive: !formData.isActive };
    setFormData(updated);
    setEventData(updated); // Save immediately on toggle
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Latest Events & Bootcamps Popup</h2>
      </div>

      <div className="admin-card" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
          <div>
            <h3 style={{ margin: '0 0 5px 0' }}>Website Popup Status</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Toggle whether the event popup should appear to website visitors on page load.</p>
          </div>
          <button 
            type="button" 
            onClick={handleToggle}
            style={{
              padding: '10px 25px',
              borderRadius: '30px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              background: formData.isActive ? '#10b981' : '#ef4444',
              color: 'white',
              transition: 'background 0.3s ease'
            }}
          >
            {formData.isActive ? '🟢 Active' : '🔴 Inactive'}
          </button>
        </div>

        <form onSubmit={handleSave} className="admin-modal-form" style={{ marginTop: '0' }}>
          <label>Event Title</label>
          <input 
            required 
            type="text" 
            value={formData.title} 
            onChange={e => setFormData({...formData, title: e.target.value})} 
          />
          
          <label>Event Description</label>
          <textarea 
            required 
            rows="4" 
            value={formData.description} 
            onChange={e => setFormData({...formData, description: e.target.value})} 
            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontFamily: 'inherit' }}
          />

          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label>Button Text</label>
              <input 
                required 
                type="text" 
                value={formData.buttonText} 
                onChange={e => setFormData({...formData, buttonText: e.target.value})} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>Button Link Route</label>
              <input 
                required 
                type="text" 
                value={formData.link} 
                onChange={e => setFormData({...formData, link: e.target.value})} 
                placeholder="e.g. /contact-us or /java-full-stack"
              />
            </div>
          </div>

          <label>Image URL (Optional)</label>
          <input 
            type="text" 
            value={formData.imageUrl} 
            onChange={e => setFormData({...formData, imageUrl: e.target.value})} 
            placeholder="https://..."
          />
          
          <div className="admin-modal-actions" style={{ marginTop: '30px' }}>
            <button type="submit" className="admin-btn-primary">Save Changes</button>
          </div>
        </form>

        {showToast && (
          <div style={{ background: '#10b981', color: 'white', padding: '15px', borderRadius: '8px', marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
            Event details saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEvents;
