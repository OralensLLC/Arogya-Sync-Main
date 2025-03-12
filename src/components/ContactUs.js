import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    hospitalName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      hospitalName: '',
      email: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="arogya-form-container">
      {/* Hexagon background pattern */}
      
      <div className="form-header">
          <h1>GET STARTED WITH AROGYA SYNC TODAY</h1>
          <p>Trusted By Top Hospitals For Seamless Patient Monitoring.</p>
        </div>

      <div className="form-wrapper">
      
        <div className="form-container">
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='XYZ..'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hospitalName">Hospital Name:</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                 placeholder='XYZ Hospital'
                value={formData.hospitalName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                 placeholder='Abc@gmail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder='Type Here..'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs