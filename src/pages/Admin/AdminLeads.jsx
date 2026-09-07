import React, { useState } from 'react';
import { FaTrash, FaCheck, FaTimes, FaPhone, FaDownload } from 'react-icons/fa';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import './Admin.css';

const AdminLeads = () => {
  const [leadsData, setLeads] = useFirebaseData('codewizen_leads', []);
  const leads = leadsData || [];
  const [filter, setFilter] = useState('All');

  const handleExport = () => {
    downloadCSV(leads, `codewizen_leads_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const toggleStatus = (id) => {
    const updatedLeads = leads.map(lead => {
      if (lead.id === id) {
        return { ...lead, status: lead.status === 'New' ? 'Contacted' : 'New' };
      }
      return lead;
    });
    setLeads(updatedLeads);
  };

  const deleteLead = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      setLeads(leads.filter(lead => lead.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Lead Management</h2>
        <button 
          onClick={handleExport} 
          className="admin-btn active" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <FaDownload /> Export CSV
        </button>
      </div>

      <div className="admin-filters">
        <button className={`admin-btn ${filter === 'All' ? 'active' : 'outline'}`} onClick={() => setFilter('All')}>All Leads ({leads.length})</button>
      </div>
      
      <div className="admin-table-container">
        {leads.length === 0 ? (
          <div className="admin-notice">
            <p>No leads found yet. When a user submits the Chatbot form, it will appear here instantly.</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Interested Course</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id}>
                  <td><strong>{lead.name}</strong></td>
                  <td>{lead.phone}</td>
                  <td><span className="course-badge">{lead.course}</span></td>
                  <td>{lead.date}</td>
                  <td>
                    <span className={`status-badge ${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button className="action-link" onClick={() => toggleStatus(lead.id)}>
                      {lead.status === 'New' ? 'Mark Contacted' : 'Mark New'}
                    </button>
                    <button className="action-link" style={{color: '#dc2626'}} onClick={() => deleteLead(lead.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminLeads;
