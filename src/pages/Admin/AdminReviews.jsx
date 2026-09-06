import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaDownload, FaPlus } from 'react-icons/fa';
import './Admin.css';

import { defaultReviews } from '../../data/defaultData';

const AdminReviews = () => {
  const [reviewsData, setReviews] = useFirebaseData('codewizen_reviews', defaultReviews);
  const reviews = reviewsData || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', course: '', text: '', rating: 5, avatar: '' });
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const openModal = (review = null) => {
    if (review) {
      setFormData(review);
      setEditingId(review.id);
    } else {
      setFormData({ name: '', course: '', text: '', rating: 5, avatar: '' });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleExport = () => {
    downloadCSV(reviews, `codewizen_reviews_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
      
      if (!cloudName || !uploadPreset || cloudName === 'your_cloud_name') {
        alert("Please set up Cloudinary in your .env file first!");
        setIsUploading(false);
        return;
      }

      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('upload_preset', uploadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: uploadData
      });
      
      const data = await response.json();
      
      if (data.secure_url) {
        setFormData({ ...formData, avatar: data.secure_url });
      } else {
        throw new Error(data.error?.message || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
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
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Student Reviews</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleExport}
            className="admin-btn active"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaDownload /> Export CSV
          </button>
          <button className="admin-btn-primary" onClick={() => openModal()}>
            <FaPlus /> Add  Review
          </button>
        </div>
      </div>

      <div className="admin-table-container">
        {reviews.length === 0 ? (
          <div className="admin-notice">No reviews added yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Review Text</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map(review => (
                <tr key={review.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {review.avatar && <img src={review.avatar} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />}
                      <strong>{review.name}</strong>
                    </div>
                  </td>
                  <td><span className="course-badge">{review.course}</span></td>
                  <td>{review.text.substring(0, 40)}...</td>
                  <td>{review.rating} ⭐</td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button className="action-link" onClick={() => openModal(review)}>Edit</button>
                    <button className="action-link" style={{ color: '#dc2626' }} onClick={() => deleteReview(review.id)}>Delete</button>
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
              <label>Student Photo</label>
              <input type="file" accept="image/*" onChange={handleFileUpload} disabled={isUploading} />
              {isUploading && <span style={{ fontSize: '12px', color: '#ea580c' }}>Uploading photo...</span>}
              {!isUploading && formData.avatar && <p style={{ fontSize: '12px', color: '#16a34a' }}>✓ Photo uploaded successfully</p>}

              <label>Student Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />

              <label>Course Taken</label>
              <select required value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })}>
                <option value="" disabled>Select a course...</option>
                <option value="Java Full Stack">Java Full Stack</option>
                <option value="Python Full Stack">Python Full Stack</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Data Science & ML">Data Science & ML</option>
                <option value="Generative AI">Generative AI</option>
                <option value="React JS & Frontend">React JS & Frontend</option>
                <option value="DevOps & Cloud">DevOps & Cloud</option>
                <option value="Custom Course">Custom Course (Other)</option>
              </select>

              <label>Review Text</label>
              <textarea required rows="4" value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })}></textarea>

              <label>Rating (1-5)</label>
              <input required type="number" min="1" max="5" value={formData.rating} onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })} />

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
