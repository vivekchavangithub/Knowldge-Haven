import React from 'react';
// import './ContactPage.css'; // Assuming you use a CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      </div>
      <div className="contact-content">
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
        <section className="contact-info-section">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 V Mart Avenue, Pune, 456782</p>
          <p><strong>Email:</strong> <a href="chvansvivek@gmail.com">contact@vmart.com</a></p>
          <p><strong>Phone:</strong> +91 97676 34431</p>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaSquareXTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><CiLinkedin /></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
