import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="Ccontact-page">
      <h1>Contact Us</h1>
      
      <div className="Ccontact-container">
        <div className="Ccontact-info">
          <div className="Cinfo-item">
            <FaPhone size={20} className="Cicon" />
            <p>+91 9673414080</p>
          </div>
          <div className="Cinfo-item">
            <FaEnvelope size={20} className="Cicon" />
            <p>support@b2bmart.com</p>
          </div>
          <div className="Cinfo-item">
            <FaMapMarkerAlt size={20} className="Cicon" />
            <p>Shivram Plaza, B2B Home, Guhagar</p>
          </div>
        </div>

        <div className="Ccontact-form">
          <form>
            <div className="Cform-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="Cform-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="Cform-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
