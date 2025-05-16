/* Author: Lucas Vincent Johanningmeier */

import { sendMailGmail } from "../services/mailServiceGmail.js";

import { ValidationError, HttpError, ServiceError } from "../errors/index.js";

export const mailServiceGmail = async (req, res, next) => {
  const { senderName, to, subject, message, replyTo } = req.body;

  if (!to || !subject || !message) {
    return next(new ValidationError("To, subject and message are required."));
  }

  try {
    await sendMailGmail({ senderName, to, subject, message, replyTo });
    res.status(200).json({ message: "E-Mail sent successfully!" });
  } catch (err) {
    next(new ServiceError("E-mail service failed", "e-mail")); // 502
  }
};
