/* Author: Lucas Vincent Johanningmeier */

import nodemailer from "nodemailer";

export const mailServiceGmail = async (req, res) => {
  const { senderName, to, subject, message, replyTo } = req.body;

  try {
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
  } catch (error) {
    console.error("Error sending e-mail: ", error);
  }
};

/**
 * NOTES
 * - here in use : Gmail
 * - idea : implement my own e-mail provider to receive the message myself (!)
 */
