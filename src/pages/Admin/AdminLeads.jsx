import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Admin.css';

const AdminLeads = () => {
  const [leads, setLeads] = useLocalStorage('codewizen_leads', []);

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

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export!");
      return;
    }
    
    // Create CSV header
    const headers = ["ID,Name,Phone,Interested Course,Date,Status\n"];
    
    // Create CSV rows
    const rows = leads.map(lead => {
      // Escape commas in fields just in case
      const name = `"${lead.name || ''}"`;
      const course = `"${lead.course || ''}"`;
      return `${lead.id},${name},${lead.phone},${course},${lead.date},${lead.status}`;
    });
    
    const csvContent = headers.concat(rows).join("\n");
    
    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `codewizen_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Lead Management</h2>
        <button className="admin-btn-primary" onClick={exportToCSV}>Export to CSV</button>
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
