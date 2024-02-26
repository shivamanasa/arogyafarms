import React, { useState } from 'react';
import './ContactPage.css'; // import your CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <section>
        <h2>Have a Question or Feedback?</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
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
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:shivanandha039@gmail.com"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            shivanandha039@gmail.com
          </a>
        </p>
        <p>
          <strong>Mobile Number:</strong>{' '}
          <a
            href="tel:9063485890"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            9063485890
          </a>{' '}
          &{' '}
          <a
            href="tel:7569948497"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            7569948497
          </a>
        </p>

        <p>
          <strong>Address:</strong> Near Model School, Lachapet, Dubbak,
          Siddipet, Telangana, India
        </p>
        <p>
          <strong>Pincode:</strong> 502108
        </p>
      </section>

      <section className="map-container">
        <h2>Location</h2>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.7729841910186!2d78.63846867446837!3d18.174368779659137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc5f4f23349263%3A0xeac2d4fa9cd9a321!2sTS%20MODEL%20SCHOOL%20DUBBAK%20-%20Lachapet%20Ward!5e0!3m2!1sen!2sin!4v1708792848123!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
