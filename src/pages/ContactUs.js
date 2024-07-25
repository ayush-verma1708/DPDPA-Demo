import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us through the following channels:</p>
      <h2>Contact Information</h2>
      <p>Address: [Your business address]</p>
      <p>Phone: [Your phone number]</p>
      <p>Email: [Your email address]</p>
      <h2>Contact Form</h2>
      <form>
        {/* Your contact form fields */}
      </form>
      <h2>Social Media</h2>
      <p>Connect with us on:</p>
      <ul>
        <li><a href="[Your social media link]">Facebook</a></li>
        <li><a href="[Your social media link]">Twitter</a></li>
        <li><a href="[Your social media link]">Instagram</a></li>
      </ul>
      {/* Optionally, include a map */}
    </div>
  );
};

export default ContactUs;
