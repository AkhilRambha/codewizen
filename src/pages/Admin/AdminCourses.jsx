import React, { useState } from 'react';
import useFirebaseData from '../../hooks/useFirebaseData';
import './Admin.css';

const AdminCourses = () => {
  const [courses, setCourses] = useFirebaseData('codewizen_courses', [
    {
      id: 1,
      name: "Generative AI",
      category: "Artificial Intelligence",
      description: "Master LLMs, prompt engineering, and building AI applications with modern frameworks.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
      link: "/courses"
    },
    {
      id: 2,
      name: "Data Science",
      category: "Data & Analytics",
      description: "Learn Python, statistics, and machine learning to become a professional Data Scientist.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/data-analytics"
    },
    {
      id: 3,
      name: "Java Full Stack",
      category: "Web Development",
      description: "Build scalable enterprise web applications using core Java, Spring Boot, and React.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "/java-full-stack"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', description: '', image: '', link: '', curriculumPdf: '' });
  const [editingId, setEditingId] = useState(null);

  const openModal = (course = null) => {
    if (course) {
      setFormData(course);
      setEditingId(course.id);
    } else {
      setFormData({ name: '', category: '', description: '', image: '', link: '', curriculumPdf: '' });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setCourses(courses.map(c => c.id === editingId ? { ...formData, id: editingId } : c));
    } else {
      setCourses([...courses, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deleteCourse = (id) => {
    if (window.confirm("Delete this course permanently?")) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Course Catalog</h2>
        <button className="admin-btn-primary" onClick={() => openModal()}>+ Add New Course</button>
      </div>

      <div className="admin-table-container">
        {courses.length === 0 ? (
          <div className="admin-notice">No courses added. Add some!</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={course.image} alt={course.name} style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                      <strong>{course.name}</strong>
                    </div>
                  </td>
                  <td><span className="course-badge">{course.category}</span></td>
                  <td>{course.description.substring(0, 50)}...</td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button className="action-link" onClick={() => openModal(course)}>Edit</button>
                    <button className="action-link" style={{color: '#dc2626'}} onClick={() => deleteCourse(course.id)}>Delete</button>
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
            <h3>{editingId ? 'Edit Course' : 'Add New Course'}</h3>
            <form onSubmit={handleSave} className="admin-modal-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label>Course Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label>Category</label>
                  <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
                </div>
              </div>
              
              <label>Description</label>
              <textarea required rows="3" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
              
              <label>Course Image URL</label>
              <input required type="text" placeholder="https://..." value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />

              <label>Curriculum PDF (Upload)</label>
              <input 
                type="file" 
                accept="application/pdf" 
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFormData({ ...formData, curriculumPdf: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }} 
              />
              {formData.curriculumPdf && <small style={{ color: 'green', display: 'block', marginTop: '5px' }}>PDF attached successfully.</small>}
              
              <label style={{ marginTop: '15px' }}>Course Page Link</label>
              <select required value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})}>
                <option value="" disabled>Select a course path...</option>
                <option value="/java-full-stack">/java-full-stack</option>
                <option value="/python-full-stack">/python-full-stack</option>
                <option value="/data-analytics">/data-analytics</option>
                <option value="/software-testing">/software-testing</option>
                <option value="/data-science">/data-science</option>
                <option value="/generative-ai">/generative-ai</option>
                <option value="/course-enquiry?course=React JS">/course-enquiry?course=React JS</option>
                <option value="/course-enquiry?course=DevOps">/course-enquiry?course=DevOps</option>
                <option value="/courses">/courses (General Course Page)</option>
              </select>
              
              <div className="admin-modal-actions" style={{ marginTop: '20px' }}>
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">Save Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
