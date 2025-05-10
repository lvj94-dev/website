/* Author: Lucas Vincent Johanningmeier */

import nodemailer from "nodemailer";

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

  await transporter.sendMail(mailOptions);
};

/**
 * NOTES
 * - here in use : Gmail
 *
 * (DONE)
 * - idea : implement my own e-mail provider to receive the message myself (!)
 */
