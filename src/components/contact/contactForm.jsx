import { useState } from "react";
import "./styles/contactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    reason: "chat",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("https://formspree.io/f/xpwpjrjk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", contact: "", message: "", reason: "freelance" });
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="contact"
            placeholder="Email or Phone Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="form-select"
        >
          <option value="freelance">Freelance Inquiry</option>
          <option value="chat">Just to have a chat</option>
          <option value="project">Discuss a Project</option>
          <option value="feedback">Provide Feedback</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Description or note (optional)"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-submit-button">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}