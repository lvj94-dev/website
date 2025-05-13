/* Author: Lucas Vincent Johanningmeier */

import { sendMailGmail } from "../services/mailServiceGmail.js";

export const mailServiceGmail = async (req, res) => {
  const { senderName, to, subject, message, replyTo } = req.body;

  try {
    await sendMailGmail({ senderName, to, subject, message, replyTo });
    res.status(200).json({ message: "E-Mail sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending e-mail!" });
  }
};
