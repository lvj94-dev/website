/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";
import axios from "axios";

import styles from "./contact.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    to: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/contact/gmail", formData);
    alert("E-mail sent!");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="senderName"
            placeholder="Your name"
            onChange={handleChange}
            required
          />
          <input
            name="to"
            placeholder="Your e-mail address"
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Your subject"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            onChange={handleChange}
            required
          />
          <button type="submit">Send e-mail</button>
        </form>
      </div>
    </>
  );
}
