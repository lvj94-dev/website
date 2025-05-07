/* Author: Lucas Vincent Johanningmeier */

import styles from "./contact.module.scss";

export default function Contact() {
  console.log("Contact()");

  return (
    <>
      <div className={styles.contact}>
        <h1>Contact form</h1>
        <form>
          {/* Name */}
          <form className={styles["form-group"]}>
            <label for="name">Name *</label>
            <input type="text" id="contact-form-name" required></input>
          </form>

          {/* E-Mail* */}
          <form className={styles["form-group"]}>
            <label for="email">E-Mail *</label>
            <input type="email" id="contact-form-email" required></input>
          </form>

          {/* Message */}
          <form className={styles["form-group"]}>
            <label for="message">Message *</label>
            <input type="text" id="contact-form-message" required></input>
          </form>

          {/* Button "Submit" */}
          <div className={styles["form-group"]}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}
