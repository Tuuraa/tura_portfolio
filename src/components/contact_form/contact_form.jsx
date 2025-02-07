import { useState } from "react";
import './contact_form.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", formData);
  };

  return (
    <div className="contact-form-main">
      <h2 className="contact-form-title">Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-input">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form-input-text"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
           className="contact-form-input-text"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="contact-form-textarea"
        />
        <button
          type="submit"
          className="contact-form-button"
          onClick={() => alert("Message sent successfully!")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
