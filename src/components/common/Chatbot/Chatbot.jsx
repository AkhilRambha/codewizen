import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaComments, FaPaperPlane, FaRobot } from 'react-icons/fa';
import useLocalStorage from '../../../hooks/useLocalStorage';
import './Chatbot.css';

const coursesList = [
  "Java Full Stack",
  "Python Full Stack",
  "Data Science & ML",
  "Data Analytics",
  "Software Testing",
  "Generative AI"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('name'); // 'name', 'course', 'phone', 'done'
  
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi there! 👋 I'm your Codewizen Guide. What is your name?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    phone: ''
  });

  const [leads, setLeads] = useLocalStorage('codewizen_leads', []);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleNameSubmit = (nameVal) => {
    setMessages(prev => [...prev, { type: 'user', text: nameVal }]);
    setFormData(prev => ({ ...prev, name: nameVal }));
    setStep('course');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: `Nice to meet you, ${nameVal}! Which course are you interested in?` 
      }]);
    }, 600);
  };

  const handleCourseSubmit = (courseVal) => {
    setMessages(prev => [...prev, { type: 'user', text: courseVal }]);
    setFormData(prev => ({ ...prev, course: courseVal }));
    setStep('phone');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: `Great choice! Lastly, what is your phone number so our counselors can reach you?` 
      }]);
    }, 600);
  };

  const handlePhoneSubmit = (phoneVal) => {
    setMessages(prev => [...prev, { type: 'user', text: phoneVal }]);
    const finalData = { ...formData, phone: phoneVal };
    setFormData(finalData);
    setStep('done');

    // Save lead to real-time storage
    const newLead = {
      id: Date.now(),
      name: finalData.name,
      phone: finalData.phone,
      course: finalData.course,
      date: new Date().toISOString().split('T')[0],
      status: "New"
    };
    setLeads([...leads, newLead]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: `Thank you, ${finalData.name}! We've received your request for the ${finalData.course} course. Our team will call you shortly at ${phoneVal}.` 
      }]);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const val = inputValue.trim();
    setInputValue('');

    if (step === 'name') {
      handleNameSubmit(val);
    } else if (step === 'phone') {
      handlePhoneSubmit(val);
    } else if (step === 'done') {
      // Just a generic response if they keep typing
      setMessages(prev => [...prev, { type: 'user', text: val }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: "Thanks for the message! We will get back to you soon." }]);
      }, 600);
    }
  };

  return (
    <div className="assistant-wrapper">
      
      {/* Floating Button */}
      <button 
        className={`assistant-toggle-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle Assistant"
      >
        {isOpen ? <FaTimes /> : <div className="pulse-icon"><FaComments /></div>}
      </button>

      {/* Assistant Window */}
      <div className={`assistant-window ${isOpen ? 'active' : ''}`}>
        
        <div className="assistant-header">
          <div className="assistant-header-info">
            <FaRobot className="assistant-icon" />
            <div>
              <h4>Codewizen Assistant</h4>
              <span>Let's get you started</span>
            </div>
          </div>
          <button className="assistant-close-btn" onClick={toggleChat}><FaTimes /></button>
        </div>

        {/* CHAT BODY (VERTICAL SCROLL) */}
        <div className="chat-body">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-wrapper ${msg.type}`}>
                {msg.type === 'bot' && <div className="chat-avatar"><FaRobot /></div>}
                <div className={`chat-bubble ${msg.type}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* If waiting for course, show radio buttons as part of chat */}
            {step === 'course' && (
              <div className="chat-course-options">
                {coursesList.map((course, idx) => (
                  <button 
                    key={idx} 
                    className="chat-course-btn"
                    onClick={() => handleCourseSubmit(course)}
                  >
                    {course}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* CHAT FOOTER (INPUT) */}
        <div className="chat-footer">
          {step !== 'course' ? (
            <form onSubmit={handleSubmit} className="chat-input-form">
              <input 
                type={step === 'phone' ? 'tel' : 'text'}
                placeholder={
                  step === 'name' ? "Type your name..." : 
                  step === 'phone' ? "Type your phone number..." : 
                  "Type a message..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={step === 'course'} // disable input if they must click a course
              />
              <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                <FaPaperPlane />
              </button>
            </form>
          ) : (
            <div className="chat-input-disabled-text">
              Please select a course from the options above.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Chatbot;
