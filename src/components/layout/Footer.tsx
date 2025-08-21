import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h3>All India Shotokan Karate Academy</h3>
          <p>
            <span className="footer-icon">📧</span> support@allindiashotokankarateacademy@gmail.com
          </p>
          <p>
            <span className="footer-icon">📞</span> +91-1234567890
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Affiliations</li>
            <li>Upcoming Events</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms or Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section social-icons">
          <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.svg" alt="YouTube" /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright 2025, © AISKA. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
