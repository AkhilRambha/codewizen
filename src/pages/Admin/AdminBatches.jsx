import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaTrash, FaCheck, FaTimes, FaPlus, FaDownload } from 'react-icons/fa';
import './Admin.css';

const AdminBatches = () => {
  const [batches, setBatches] = useFirebaseData('codewizen_batches', [
    { id: 1, course: "Java Full Stack", date: "Oct 10, 2026", time: "10:00 AM - 12:00 PM", duration: "4 months", status: "Upcoming" },
    { id: 2, course: "Data Science & ML", date: "Oct 15, 2026", time: "06:00 PM - 08:00 PM", duration: "6 months", status: "Upcoming" }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ course: '', date: '', duration: '', status: 'Upcoming' });
  const [startTime, setStartTime] = useState('');
  const [filter, setFilter] = useState('All');

  const handleExport = () => {
    downloadCSV(batches, `codewizen_batches_${new Date().toISOString().split('T')[0]}.csv`);
  };
  const [endTime, setEndTime] = useState('');
  const [editingId, setEditingId] = useState(null);

  const formatTime12h = (time24) => {
    if (!time24) return '';
    let [hours, minutes] = time24.split(':');
    hours = parseInt(hours, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return `${hours < 10 ? '0'+hours : hours}:${minutes} ${ampm}`;
  };

  const parseTime24h = (time12) => {
    if (!time12) return '';
    let [time, modifier] = time12.split(' ');
    if (!time || !modifier) return '';
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM' || modifier === 'pm') hours = parseInt(hours, 10) + 12;
    // ensure two digits
    if (hours.toString().length === 1) hours = '0' + hours;
    return `${hours}:${minutes}`;
  };

  const formatDateToDisplay = (dateString) => {
    if (!dateString || !dateString.includes('-')) return dateString;
    const dateObj = new Date(dateString);
    if (isNaN(dateObj)) return dateString;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options); // e.g. "Oct 10, 2026"
  };

  const parseDateForInput = (dateString) => {
    if (!dateString) return '';
    // If it's already YYYY-MM-DD, return it
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) return dateString;
    const dateObj = new Date(dateString);
    if (isNaN(dateObj)) return '';
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const openModal = (batch = null) => {
    if (batch) {
      setFormData({
        ...batch,
        date: parseDateForInput(batch.date)
      });
      setEditingId(batch.id);
      if (batch.time && batch.time.includes(' - ')) {
        const parts = batch.time.split(' - ');
        setStartTime(parseTime24h(parts[0]));
        setEndTime(parseTime24h(parts[1]));
      } else {
        setStartTime('');
        setEndTime('');
      }
    } else {
      setFormData({ course: '', date: '', duration: '', status: 'Upcoming' });
      setEditingId(null);
      setStartTime('');
      setEndTime('');
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const finalTime = `${formatTime12h(startTime)} - ${formatTime12h(endTime)}`;
    const newBatch = { ...formData, time: finalTime, date: formatDateToDisplay(formData.date) };
    
    if (editingId) {
      setBatches(batches.map(b => b.id === editingId ? { ...newBatch, id: editingId } : b));
    } else {
      setBatches([...batches, { ...newBatch, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deleteBatch = (id) => {
    if (window.confirm("Delete this batch schedule?")) {
      setBatches(batches.filter(b => b.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Manage Batches</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleExport} 
            className="admin-btn active" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FaDownload /> Export CSV
          </button>
          <button className="admin-btn-primary" onClick={() => openModal()}>
            <FaPlus /> Add New Batch
          </button>
        </div>
      </div>
      
      <div className="admin-table-container">
        {batches.length === 0 ? (
          <div className="admin-notice">No batches scheduled. Add one!</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>Timings</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches.map(batch => (
                <tr key={batch.id}>
                  <td><strong>{batch.course}</strong></td>
                  <td>{batch.date}</td>
                  <td>{batch.time}</td>
                  <td>{batch.duration}</td>
                  <td><span className="course-badge">{batch.status}</span></td>
                  <td style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button className="action-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => openModal(batch)}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4 90.2 90.2 35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg> 
                      Edit
                    </button>
                    <button className="action-link" style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => deleteBatch(batch.id)}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                      Delete
                    </button>
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
            <h3>{editingId ? 'Edit Batch' : 'Add New Batch'}</h3>
            <form onSubmit={handleSave} className="admin-modal-form">
              <label>Course Name</label>
              <select required value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}>
                <option value="" disabled>Select a course...</option>
                {(() => {
                  const savedCourses = JSON.parse(window.localStorage.getItem('codewizen_courses')) || [];
                  return savedCourses.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ));
                })()}
                <option value="Custom Course">Custom Course (Other)</option>
              </select>
              
              <label>Start Date</label>
              <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label>From Time</label>
                  <input required type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
                  <div style={{ fontSize: '12px', color: '#ea580c', marginTop: '4px', fontWeight: 'bold' }}>
                    {formatTime12h(startTime) ? `Selected: ${formatTime12h(startTime)}` : ''}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label>To Time</label>
                  <input required type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
                  <div style={{ fontSize: '12px', color: '#ea580c', marginTop: '4px', fontWeight: 'bold' }}>
                    {formatTime12h(endTime) ? `Selected: ${formatTime12h(endTime)}` : ''}
                  </div>
                </div>
              </div>

              <label>Duration</label>
              <input required type="text" placeholder="e.g. 3 months" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
              
              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">Save Batch</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBatches;
