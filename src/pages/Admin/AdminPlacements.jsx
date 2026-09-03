import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaTrash, FaCheck, FaTimes, FaPlus, FaUpload, FaDownload } from 'react-icons/fa';
import './Admin.css';

const AdminPlacements = () => {
  const [placements, setPlacements] = useFirebaseData('codewizen_placements', [
    {
      id: 1,
      name: "Rahul Verma",
      course: "Java Full Stack Development",
      company: "TCS",
      ctc: "8 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      course: "Data Science & AI",
      company: "Deloitte",
      ctc: "12 LPA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Karthik Kumar",
      course: "Python Full Stack",
      company: "Infosys",
      ctc: "7.5 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', course: '', company: '', ctc: '', image: '' });
  const [editingId, setEditingId] = useState(null);

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
                    {(() => {
                      const savedCourses = JSON.parse(window.localStorage.getItem('codewizen_courses')) || [];
                      return savedCourses.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ));
                    })()}
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
              <input type="file" accept="image/*" onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => setFormData({ ...formData, image: reader.result });
                  reader.readAsDataURL(file);
                }
              }} />
              {formData.image && formData.image.startsWith('data:image') && <p style={{ fontSize: '12px', color: '#16a34a' }}>✓ Photo uploaded</p>}
              
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
