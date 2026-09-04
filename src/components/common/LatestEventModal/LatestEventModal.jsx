import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import useFirebaseData from '../../../hooks/useFirebaseData';

const getCachedEvent = () => {
  try {
    const cached = localStorage.getItem('codewizen_event_cache');
    return cached ? JSON.parse(cached) : null;
  } catch(e) {
    return null;
  }
};

const LatestEventModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [eventData] = useFirebaseData('codewizen_latest_event', getCachedEvent());
  const navigate = useNavigate();

  useEffect(() => {
    if (eventData) {
      localStorage.setItem('codewizen_event_cache', JSON.stringify(eventData));
    }
  }, [eventData]);

  useEffect(() => {
    // Only show if we have data, it's marked active in Firebase, and user hasn't dismissed it this session
    const isActive = eventData && (eventData.isActive === true || eventData.isActive === 'true');
    if (isActive && !hasDismissed) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [eventData, hasDismissed]);

  if (!isVisible || !eventData) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(17, 34, 85, 0.7)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div 
        data-aos="zoom-in"
        style={{
          background: 'white',
          width: '100%',
          maxWidth: '500px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          position: 'relative'
        }}
      >
        <button 
          onClick={() => {
            setIsVisible(false);
            setHasDismissed(true);
          }}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            color: '#112255'
          }}
        >
          <FaTimes />
        </button>

        {eventData.imageUrl && (
          <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
            <img 
              src={eventData.imageUrl} 
              alt={eventData.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ padding: '30px' }}>
          <span style={{ 
            background: 'linear-gradient(135deg, #ea580c, #f97316)',
            color: 'white',
            padding: '5px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            New Event
          </span>
          <h2 style={{ color: '#112255', marginTop: '15px', marginBottom: '10px', fontSize: '24px' }}>
            {eventData.title}
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '25px', fontSize: '15px' }}>
            {eventData.description}
          </p>
          <button 
            onClick={() => {
              setIsVisible(false);
              setHasDismissed(true);
              if (eventData.link.startsWith('http://') || eventData.link.startsWith('https://')) {
                window.open(eventData.link, '_blank');
              } else {
                navigate(eventData.link);
              }
            }}
            style={{
              width: '100%',
              padding: '14px',
              background: '#112255',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#0f172a'}
            onMouseOut={(e) => e.target.style.background = '#112255'}
          >
            {eventData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestEventModal;
