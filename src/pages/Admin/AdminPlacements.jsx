import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaPlus, FaDownload } from 'react-icons/fa';
import './Admin.css';
import { defaultPlacements } from '../../data/defaultData';

const AdminPlacements = () => {
  const [placementsData, setPlacements] = useFirebaseData('codewizen_placements', defaultPlacements);
  const placements = placementsData || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', course: '', company: '', ctc: '', image: '' });
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

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
        setFormData({ ...formData, image: data.secure_url });
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

  const handleExport = () => {
    downloadCSV(placements, `codewizen_placements_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const openModal = (placement = null) => {
    if (placement) {
      setFormData(placement);
      setEditingId(placement.id);
    } else {
      setFormData({ name: '', course: '', company: '', ctc: '', image: '' });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setPlacements(placements.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
    } else {
      setPlacements([...placements, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deletePlacement = (id) => {
    if (window.confirm("Delete this placement record permanently?")) {
      setPlacements(placements.filter(p => p.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Alumni & Placements</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleExport} 
            className="admin-btn active" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaDownload /> Export CSV
          </button>
          <button className="admin-btn-primary" onClick={() => openModal()}>
            <FaPlus /> Add New Alumni
          </button>
        </div>
      </div>

      <div className="admin-table-container">
        {placements.length === 0 ? (
          <div className="admin-notice">No placements added. Add some!</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Company</th>
                <th>CTC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {placements.map(placement => (
                <tr key={placement.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={placement.image} alt={placement.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                      <strong>{placement.name}</strong>
                    </div>
                  </td>
                  <td><span className="course-badge">{placement.course}</span></td>
                  <td>{placement.company}</td>
                  <td><strong>{placement.ctc}</strong></td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button className="action-link" onClick={() => openModal(placement)}>Edit</button>
                    <button className="action-link" style={{color: '#dc2626'}} onClick={() => deletePlacement(placement.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '600px' }}>
            <h3>{editingId ? 'Edit Placement' : 'Add New Placement'}</h3>
            <form onSubmit={handleSave} className="admin-modal-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label>Student Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label>Course Taken</label>
                  <select required value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
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
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label>Company Placed</label>
                  <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
                <div>
                  <label>CTC Offered</label>
                  <input required type="text" placeholder="e.g. 10 LPA" value={formData.ctc} onChange={e => setFormData({...formData, ctc: e.target.value})} />
                </div>
              </div>

              <label>Student Photo</label>
              <input type="file" accept="image/*" onChange={handleFileUpload} disabled={isUploading} />
              {isUploading && <span style={{ fontSize: '12px', color: '#ea580c' }}>Uploading photo...</span>}
              {!isUploading && formData.image && <p style={{ fontSize: '12px', color: '#16a34a' }}>✓ Photo uploaded successfully</p>}
              
              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">Save Placement</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlacements;
