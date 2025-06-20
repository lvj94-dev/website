/* Author: Lucas Vincent Johanningmeier */

// Third-party
import nodemailer from "nodemailer";

// Error handling
import { ServiceError } from "../errors/index.js";

/**
 * @function sendMailGmail
 *
 * @description
 * Sens an e-mail using Gmail's SMTP service.
 *
 * @param {Object} options
 * @param {string} options.senderName
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.message
 * @param {string} [options.replyTo]
 *
 * @returns {Promise<void>}
 */
export const sendMailGmail = async ({
  senderName,
  to,
  subject,
  message,
  replyTo,
}) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER_GMAIL,
      pass: process.env.APP_PASSWORD_GMAIL,
    },
  });

  const mailOptions = {
    from: `${senderName} <${process.env.EMAIL_USER_GMAIL}>`,
    to: [to, process.env.EMAIL_USER_GMAIL],
    subject: subject,
    text: message,
    replyTo: replyTo,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new ServiceError("Failed to send e-mail via Gmail", err); // 502
  }
};

/**
 * NOTES
 * - here in use : Gmail
 * - (T) Create a @typedef for MailOptions (!)
 *
 * (DONE)
 * - idea : implement my own e-mail provider to receive the message myself (!)
 */
