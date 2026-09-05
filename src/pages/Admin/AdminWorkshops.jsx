import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import { downloadCSV } from '../../utils/exportCsv';
import { FaUserGraduate, FaMoneyCheckAlt, FaCheckCircle, FaClock, FaWhatsapp, FaSave, FaPlus, FaTrash, FaUpload, FaDownload } from 'react-icons/fa';
import './Admin.css';

const AdminWorkshops = () => {
  const [activeTab, setActiveTab] = useState('registrations'); // registrations, manage
  
  const [registrationsData, setRegistrations, isReady] = useFirebaseData('codewizen_workshop_registrations', []);
  const registrations = Array.isArray(registrationsData) ? registrationsData : (registrationsData ? Object.values(registrationsData) : []);
  const [workshopsData, setWorkshops, isWorkshopsReady] = useFirebaseData('codewizen_workshops_data', []);
  const workshops = Array.isArray(workshopsData) ? workshopsData : (workshopsData ? Object.values(workshopsData) : []);

  const [editingWorkshop, setEditingWorkshop] = useState(null);
  const [uploadingFiles, setUploadingFiles] = useState({});

  const handleExport = () => {
    downloadCSV(registrations, `workshop_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  if (!isReady || !isWorkshopsReady) {
    return <div className="admin-loading">Loading...</div>;
  }

  const handleImageUpload = async (e, fieldPath) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingFiles(prev => ({ ...prev, [fieldPath]: true }));
    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
      
      if (!cloudName || !uploadPreset || cloudName === 'your_cloud_name') {
        alert("Please set up Cloudinary in your .env file first!");
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!data.secure_url) {
        throw new Error(data.error?.message || "Upload failed");
      }
      
      const downloadURL = data.secure_url;

      if (fieldPath === 'heroImage') {
        setEditingWorkshop(prev => ({ ...prev, heroImage: downloadURL }));
      } else if (fieldPath === 'certificateImage') {
        setEditingWorkshop(prev => ({ ...prev, certificate: { ...(prev?.certificate || {}), image: downloadURL } }));
      } else if (fieldPath === 'audienceImage') {
        setEditingWorkshop(prev => ({ ...prev, audience: { ...(prev?.audience || {}), image: downloadURL } }));
      } else if (fieldPath === 'whatYouWillGetImage') {
        setEditingWorkshop(prev => ({ ...prev, whatYouWillGet: { ...(prev?.whatYouWillGet || {}), image: downloadURL } }));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploadingFiles(prev => ({ ...prev, [fieldPath]: false }));
    }
  };

  // --- REGISTRATIONS LOGIC ---
  const totalRegistrations = registrations.length;
  const paidRegistrations = registrations.filter(r => r.status === 'Paid').length;
  const revenue = paidRegistrations * 299;

  const deleteRegistration = (id) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      setRegistrations(registrations.filter(r => r.id !== id));
    }
  };

  const markAsPaid = (id) => {
    if (window.confirm("Mark this user as manually paid?")) {
      setRegistrations(registrations.map(r => 
        r.id === id ? { ...r, status: 'Paid', paymentId: 'MANUAL_' + Date.now().toString().slice(-6) } : r
      ));
    }
  };

  const handleEditClick = (ws) => {
    // Deep clone the workshop and merge with defaults to ensure all keys (like new faqs) exist
    const defaultStructure = {
      feedbackImages: [],
      faqs: [],
      curriculum: [],
      audience: { points: [], image: '' },
      certificate: { points: [], image: '' },
      whatYouWillGet: { points: [], image: '' },
      whyAttend: []
    };
    const clonedWs = JSON.parse(JSON.stringify(ws));
    setEditingWorkshop({ ...defaultStructure, ...clonedWs });
  };

  const handleSaveWorkshop = (e) => {
    e.preventDefault();
    const updatedWorkshops = [...workshops];
    const index = updatedWorkshops.findIndex(w => w.id === editingWorkshop.id);
    
    if (index >= 0) {
      updatedWorkshops[index] = editingWorkshop;
    } else {
      updatedWorkshops.push(editingWorkshop);
    }
    
    setWorkshops(updatedWorkshops);
    setEditingWorkshop(null);
    alert('Workshop saved successfully!');
  };

  const createNewWorkshop = () => {
    const newWs = {
      id: "new-workshop-" + Date.now(),
      seoTitle: "New Workshop SEO Title",
      mainTitle: "Main Workshop Title",
      subTitle: "(Subtitle here)",
      description: "Description of the workshop...",
      heroButtonText: "Enroll Now",
      heroImage: "https://via.placeholder.com/600x400/0f172a/ffffff?text=Hero+Image",
      schedule: { dates: "TBD", time: "TBD", mode: "Online", fee: "₹299" },
      certificate: { points: ["Point 1"], image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Certificate" },
      curriculum: [ { day: "Day 1", title: "Introduction" } ],
      whatYouWillGet: { image: "https://via.placeholder.com/400x200/ffffff/000000?text=Logo", points: ["Point 1"] },
      audience: { points: ["Point 1"], image: "https://via.placeholder.com/400x400/0f172a/ffffff?text=Audience" },
      whyAttend: [ { title: "Reason 1", desc: "Description 1" } ],
      price: 299, originalPrice: 2999, countdownDaysToAdd: 5
    };
    handleEditClick(newWs);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '20px'}}>
        <h2>Workshops Administration</h2>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            className={`admin-btn ${activeTab === 'registrations' ? 'active' : 'outline'}`}
            onClick={() => setActiveTab('registrations')}
          >
            Registrations
          </button>
          <button 
            className={`admin-btn ${activeTab === 'manage' ? 'active' : 'outline'}`}
            onClick={() => setActiveTab('manage')}
          >
            Manage Workshops
          </button>
        </div>
      </div>

      {activeTab === 'registrations' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>Recent Registrations</h3>
            <button 
              onClick={handleExport} 
              className="admin-btn active" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <FaDownload /> Export CSV
            </button>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <div className="stat-card" style={{ padding: '10px 20px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7', border: '1px solid #bae6fd' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Total Seats</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{totalRegistrations}</div>
            </div>
            <div className="stat-card" style={{ padding: '10px 20px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', border: '1px solid #a7f3d0' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Revenue</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>₹{revenue}</div>
            </div>
          </div>

          <div className="admin-table-container">
            {registrations.length === 0 ? (
              <div className="admin-notice">No workshop registrations yet.</div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Participant Details</th>
                    <th>Workshop ID</th>
                    <th>Contact</th>
                    <th>Payment Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...registrations].sort((a,b) => b.id - a.id).map(reg => (
                    <tr key={reg.id}>
                      <td style={{ color: '#64748b' }}>
                        {new Date(reg.date).toLocaleDateString()}<br/>
                        <small>{new Date(reg.date).toLocaleTimeString()}</small>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '50%', color: '#3b82f6' }}>
                            <FaUserGraduate />
                          </div>
                          <div>
                            <strong>{reg.name}</strong><br/>
                            <span style={{ fontSize: '0.9em', color: '#64748b' }}>{reg.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{reg.workshopId || 'spring-security'}</td>
                      <td>
                        <a href={`https://wa.me/${reg.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', textDecoration: 'none', fontWeight: '600' }}>
                          <FaWhatsapp /> {reg.phone}
                        </a>
                      </td>
                      <td>
                        {reg.status === 'Paid' ? (
                          <div>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                              <FaCheckCircle /> Paid
                            </span><br/>
                            <small style={{ color: '#94a3b8' }}>ID: {reg.paymentId}</small>
                          </div>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#fef3c7', color: '#92400e', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                            <FaClock /> Pending
                          </span>
                        )}
                      </td>
                      <td style={{ display: 'flex', gap: '10px' }}>
                        {reg.status !== 'Paid' && (
                          <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#10b981', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', transition: 'background 0.2s' }} onClick={() => markAsPaid(reg.id)} onMouseOver={(e) => e.currentTarget.style.background = '#059669'} onMouseOut={(e) => e.currentTarget.style.background = '#10b981'}>
                            <FaMoneyCheckAlt /> Mark Paid
                          </button>
                        )}
                        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', transition: 'background 0.2s' }} onClick={() => deleteRegistration(reg.id)} onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'} onMouseOut={(e) => e.currentTarget.style.background = '#ef4444'}>
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}

      {activeTab === 'manage' && !editingWorkshop && (
        <div>
          <button className="admin-btn active" onClick={createNewWorkshop} style={{marginBottom: '20px'}}>
            <FaPlus /> Create New Workshop
          </button>

          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>URL Slug (ID)</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map(ws => (
                  <tr key={ws.id}>
                    <td><strong>{ws.id}</strong><br/><small>/workshop/{ws.id}</small></td>
                    <td>{ws.mainTitle}</td>
                    <td>₹{ws.price}</td>
                    <td>
                      <button className="action-link" onClick={() => handleEditClick(ws)}>Edit</button>
                      <button className="action-link" style={{color: 'red'}} onClick={() => {
                        if(window.confirm('Delete workshop?')) setWorkshops(workshops.filter(w => w.id !== ws.id))
                      }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'manage' && editingWorkshop && (
        <div className="admin-form-container">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
            <h3>Editing Workshop: {editingWorkshop.id}</h3>
            <button className="admin-btn outline" onClick={() => setEditingWorkshop(null)}>Cancel</button>
          </div>

          <form onSubmit={handleSaveWorkshop} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            
            <div className="form-row" style={{display: 'flex', gap: '20px'}}>
              <div className="form-group" style={{flex: 1}}>
                <label>URL Slug (ID)</label>
                <input 
                  type="text" 
                  value={editingWorkshop.id} 
                  onChange={e => setEditingWorkshop({...editingWorkshop, id: e.target.value})} 
                  required 
                  style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
                />
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Price (₹)</label>
                <input 
                  type="number" 
                  value={editingWorkshop.price} 
                  onChange={e => setEditingWorkshop({...editingWorkshop, price: Number(e.target.value)})} 
                  style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
                />
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Original Price (₹)</label>
                <input 
                  type="number" 
                  value={editingWorkshop.originalPrice} 
                  onChange={e => setEditingWorkshop({...editingWorkshop, originalPrice: Number(e.target.value)})} 
                  style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Main Title</label>
              <input 
                type="text" 
                value={editingWorkshop.mainTitle} 
                onChange={e => setEditingWorkshop({...editingWorkshop, mainTitle: e.target.value})} 
                style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
              />
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea 
                rows="3"
                value={editingWorkshop.description} 
                onChange={e => setEditingWorkshop({...editingWorkshop, description: e.target.value})} 
                style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
              />
            </div>

            <div className="form-row" style={{display: 'flex', gap: '20px'}}>
               <div className="form-group" style={{flex: 1}}>
                <label>Schedule Dates</label>
                <input type="text" value={editingWorkshop.schedule.dates} onChange={e => setEditingWorkshop({...editingWorkshop, schedule: {...editingWorkshop.schedule, dates: e.target.value}})} style={{width: '100%', padding: '10px'}}/>
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Schedule Time</label>
                <input type="text" value={editingWorkshop.schedule.time} onChange={e => setEditingWorkshop({...editingWorkshop, schedule: {...editingWorkshop.schedule, time: e.target.value}})} style={{width: '100%', padding: '10px'}}/>
              </div>
            </div>

            {/* Media & Images Section */}
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
              <h4 style={{marginBottom: '15px'}}>Images & Media (Upload from Device)</h4>
              
              <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Hero Image</label>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  {editingWorkshop.heroImage && <img src={editingWorkshop.heroImage} alt="Hero" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px'}}/>}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'heroImage')} style={{flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '5px'}} />
                  {uploadingFiles.heroImage && <span style={{color: '#3b82f6'}}><FaUpload /> Uploading...</span>}
                </div>
              </div>

              <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Certificate Image</label>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  {editingWorkshop.certificate?.image && <img src={editingWorkshop.certificate.image} alt="Certificate" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px'}}/>}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'certificateImage')} style={{flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '5px'}} />
                  {uploadingFiles.certificateImage && <span style={{color: '#3b82f6'}}><FaUpload /> Uploading...</span>}
                </div>
              </div>

              <div className="form-group" style={{marginBottom: '20px'}}>
                <label>Audience Image</label>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  {editingWorkshop.audience?.image && <img src={editingWorkshop.audience.image} alt="Audience" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px'}}/>}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'audienceImage')} style={{flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '5px'}} />
                  {uploadingFiles.audienceImage && <span style={{color: '#3b82f6'}}><FaUpload /> Uploading...</span>}
                </div>
              </div>

              <div className="form-group" style={{marginBottom: '20px'}}>
                <label>What You Will Get Image</label>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  {editingWorkshop.whatYouWillGet?.image && <img src={editingWorkshop.whatYouWillGet.image} alt="What You Will Get" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px'}}/>}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'whatYouWillGetImage')} style={{flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '5px'}} />
                  {uploadingFiles.whatYouWillGetImage && <span style={{color: '#3b82f6'}}><FaUpload /> Uploading...</span>}
                </div>
              </div>
            </div>

            {/* Curriculum Section */}
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
              <h4 style={{marginBottom: '15px'}}>Curriculum (Days)</h4>
              {editingWorkshop.curriculum?.map((item, index) => (
                <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <input type="text" placeholder="Day (e.g. Day 1)" value={item.day} onChange={e => {
                    const newArr = [...editingWorkshop.curriculum];
                    newArr[index] = {...newArr[index], day: e.target.value};
                    setEditingWorkshop({...editingWorkshop, curriculum: newArr});
                  }} style={{width: '120px', padding: '8px'}} />
                  <input type="text" placeholder="Title/Description" value={item.title} onChange={e => {
                    const newArr = [...editingWorkshop.curriculum];
                    newArr[index] = {...newArr[index], title: e.target.value};
                    setEditingWorkshop({...editingWorkshop, curriculum: newArr});
                  }} style={{flex: 1, padding: '8px'}} />
                  <button type="button" onClick={() => {
                    const newArr = [...editingWorkshop.curriculum];
                    newArr.splice(index, 1);
                    setEditingWorkshop({...editingWorkshop, curriculum: newArr});
                  }} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}><FaTrash /></button>
                </div>
              ))}
              <button type="button" className="admin-btn outline" onClick={() => setEditingWorkshop({...editingWorkshop, curriculum: [...(editingWorkshop.curriculum || []), {day: '', title: ''}]})}><FaPlus /> Add Day</button>
            </div>

            {/* Audience Points */}
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
              <h4 style={{marginBottom: '15px'}}>Who is this for? (Audience Points)</h4>
              {editingWorkshop.audience?.points?.map((item, index) => (
                <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                  <input type="text" value={item} onChange={e => {
                    const newArr = [...editingWorkshop.audience.points];
                    newArr[index] = e.target.value;
                    setEditingWorkshop({...editingWorkshop, audience: {...editingWorkshop.audience, points: newArr}});
                  }} style={{flex: 1, padding: '8px'}} />
                  <button type="button" onClick={() => {
                    const newArr = [...editingWorkshop.audience.points];
                    newArr.splice(index, 1);
                    setEditingWorkshop({...editingWorkshop, audience: {...editingWorkshop.audience, points: newArr}});
                  }} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}><FaTrash /></button>
                </div>
              ))}
              <button type="button" className="admin-btn outline" onClick={() => setEditingWorkshop({...editingWorkshop, audience: {...editingWorkshop.audience, points: [...(editingWorkshop.audience?.points || []), '']}})}><FaPlus /> Add Point</button>
            </div>

            {/* Why Attend Section */}
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
              <h4 style={{marginBottom: '15px'}}>Why Attend Points</h4>
              {editingWorkshop.whyAttend?.map((item, index) => (
                <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px', flexDirection: 'column', background: 'white', padding: '10px', borderRadius: '5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <strong>Point #{index + 1}</strong>
                    <button type="button" onClick={() => {
                      const newArr = [...editingWorkshop.whyAttend];
                      newArr.splice(index, 1);
                      setEditingWorkshop({...editingWorkshop, whyAttend: newArr});
                    }} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}><FaTrash /></button>
                  </div>
                  <input type="text" placeholder="Title" value={item.title} onChange={e => {
                    const newArr = [...editingWorkshop.whyAttend];
                    newArr[index] = {...newArr[index], title: e.target.value};
                    setEditingWorkshop({...editingWorkshop, whyAttend: newArr});
                  }} style={{width: '100%', padding: '8px'}} />
                  <textarea placeholder="Description" rows="2" value={item.desc} onChange={e => {
                    const newArr = [...editingWorkshop.whyAttend];
                    newArr[index] = {...newArr[index], desc: e.target.value};
                    setEditingWorkshop({...editingWorkshop, whyAttend: newArr});
                  }} style={{width: '100%', padding: '8px'}} />
                </div>
              ))}
              <button type="button" className="admin-btn outline" onClick={() => setEditingWorkshop({...editingWorkshop, whyAttend: [...(editingWorkshop.whyAttend || []), {title: '', desc: ''}]})}><FaPlus /> Add Point</button>
            </div>

            {/* FAQs */}
            <div style={{background: '#f8fafc', padding: '20px', borderRadius: '10px', marginTop: '20px', marginBottom: '20px'}}>
              <h4 style={{marginBottom: '15px'}}>FAQs</h4>
              {editingWorkshop.faqs?.map((item, index) => (
                <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px', flexDirection: 'column', background: 'white', padding: '10px', borderRadius: '5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <strong>FAQ #{index + 1}</strong>
                    <button type="button" onClick={() => {
                      const newArr = [...editingWorkshop.faqs];
                      newArr.splice(index, 1);
                      setEditingWorkshop({...editingWorkshop, faqs: newArr});
                    }} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}><FaTrash /></button>
                  </div>
                  <input type="text" placeholder="Question" value={item.question} onChange={e => {
                    const newArr = [...editingWorkshop.faqs];
                    newArr[index] = {...newArr[index], question: e.target.value};
                    setEditingWorkshop({...editingWorkshop, faqs: newArr});
                  }} style={{width: '100%', padding: '8px'}} />
                  <textarea placeholder="Answer" rows="2" value={item.answer} onChange={e => {
                    const newArr = [...editingWorkshop.faqs];
                    newArr[index] = {...newArr[index], answer: e.target.value};
                    setEditingWorkshop({...editingWorkshop, faqs: newArr});
                  }} style={{width: '100%', padding: '8px'}} />
                </div>
              ))}
              <button type="button" className="admin-btn outline" onClick={() => setEditingWorkshop({...editingWorkshop, faqs: [...(editingWorkshop.faqs || []), {question: '', answer: ''}]})}><FaPlus /> Add FAQ</button>
            </div>

            <button type="submit" className="admin-btn active" style={{alignSelf: 'flex-start'}}>
              <FaSave /> Save Workshop
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

export default AdminWorkshops;
