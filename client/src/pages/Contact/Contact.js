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
      <div className={styles.contact}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            className={styles.inputSenderName}
            name="senderName"
            placeholder="Your name"
            onChange={handleChange}
            required
          />
          <input
            className={styles.inputTo}
            name="to"
            placeholder="Your e-mail address"
            onChange={handleChange}
            required
          />
          <input
            className={styles.inputSubject}
            name="subject"
            placeholder="Your subject"
            onChange={handleChange}
            required
          />
          <textarea
            className={styles.textareaMessage}
            name="message"
            placeholder="Your message"
            onChange={handleChange}
            required
          />
          <button className={styles.buttonSubmit} type="submit">
            Send e-mail
          </button>
        </form>
      </div>
    </>
  );
}
