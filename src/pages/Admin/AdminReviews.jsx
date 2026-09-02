import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Admin.css';

const AdminReviews = () => {
  const [reviews, setReviews] = useLocalStorage('codewizen_reviews', [
    { id: 1, name: "Arjun Reddy", course: "Java Full Stack", text: "The training here is exceptional.", rating: 5 },
    { id: 2, name: "Sneha Patil", course: "Data Science", text: "Got placed in a top MNC thanks to Codewizen.", rating: 5 }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', course: '', text: '', rating: 5 });
  const [editingId, setEditingId] = useState(null);

  const openModal = (review = null) => {
    if (review) {
      setFormData(review);
      setEditingId(review.id);
    } else {
      setFormData({ name: '', course: '', text: '', rating: 5 });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setReviews(reviews.map(r => r.id === editingId ? { ...formData, id: editingId } : r));
    } else {
      setReviews([...reviews, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deleteReview = (id) => {
    if (window.confirm("Delete this review?")) {
      setReviews(reviews.filter(r => r.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Student Reviews</h2>
        <button className="admin-btn-primary" onClick={() => openModal()}>+ Add New Review</button>
      </div>
      
      <div className="admin-table-container">
        {reviews.length === 0 ? (
          <div className="admin-notice">No reviews added yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Review Text</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map(review => (
                <tr key={review.id}>
                  <td><strong>{review.name}</strong></td>
                  <td><span className="course-badge">{review.course}</span></td>
                  <td>{review.text.substring(0, 40)}...</td>
                  <td>{review.rating} ⭐</td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button className="action-link" onClick={() => openModal(review)}>Edit</button>
                    <button className="action-link" style={{color: '#dc2626'}} onClick={() => deleteReview(review.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>{editingId ? 'Edit Review' : 'Add New Review'}</h3>
            <form onSubmit={handleSave} className="admin-modal-form">
              <label>Student Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              
              <label>Course Taken</label>
              <input required type="text" value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} />
              
              <label>Review Text</label>
              <textarea required rows="4" value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})}></textarea>
              
              <label>Rating (1-5)</label>
              <input required type="number" min="1" max="5" value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} />
              
              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">Save Review</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReviews;
