import Image from 'next/image';
import React from 'react'


const ContactInformation = () => {
  return (
  <div className="contact-information-card-container">
      {/* Address */}
      <div className="contact-information-card-item">
        <span className="contact-icon">📍</span>
        <div>
          <h4 className="contact-information-card-title">Head Office Address</h4>
          <p className='contact-information-card-details'>1234 Karate Street,</p>
          <p className='contact-information-card-details'>Shyamnagar, West Bengal, India</p>
        </div>
      </div>

      {/* Phone / WhatsApp */}
      <div className="contact-information-card-item">
        <span className="contact-icon">📞</span>
        <div>
          <h4 className="contact-information-card-title">Phone / WhatsApp</h4>
          <p className='contact-information-card-details'>+91-XXXXXXXXXX</p>
        </div>
      </div>

      {/* Email */}
      <div className="contact-information-card-item">
        <span className="contact-icon">✉️</span>
        <div>
          <h4 className="contact-information-card-title">Email</h4>
          <p className='contact-information-card-details'>info@organization.com</p>
        </div>
      </div>

      {/* Office Hours */}
      <div className="contact-information-card-item">
        <span className="contact-icon">⏰</span>
        <div>
          <h4 className="contact-information-card-title">Office Hours</h4>
          <p className='contact-information-card-details'>Mon - Sat. 10:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <Image
          src="/map-placeholder.png"
          alt="map"
          className="map-image"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default ContactInformation;
