import React from 'react';
// import './AboutPage.css'; // Assuming you use a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in online shopping</p>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At V Mart, our mission is to provide the best online shopping experience for our customers. We
            offer high-quality products at competitive prices, backed by exceptional customer service.
          </p>
        </section>
        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide selection of products across various categories</li>
            <li>Seamless and secure shopping experience</li>
            <li>Fast and reliable delivery</li>
            <li>Dedicated customer support team</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, V Mart began as a small startup with a vision to redefine the e-commerce
            landscape. Today, we are proud to serve thousands of satisfied customers worldwide.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need help? Reach out to our support team at{' '}
            <a href="chavansvivek@gmail.com">support@VMart.com</a>or <br/>
            call us at +91 9767634431.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
