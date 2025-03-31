"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContact = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const transporter_1 = __importDefault(require("./nodemailer/transporter"));
const contactSchema_1 = __importDefault(require("../schema/contactSchema"));
exports.postContact = (0, express_async_handler_1.default)(async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new contactSchema_1.default({
            name,
            email,
            message,
        });
        await newContact.save();
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Request from ${name}`,
            replyTo: email,
            html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0056b3;">New Contact Request from ${name}</h2>
            <p style="font-size: 16px; color: #333;">
              <strong>Name:</strong> ${name} <br>
              <strong>Email:</strong> ${email} <br>
              <strong>Message:</strong> <br>
              ${message}
            </p>
            <hr style="border: 1px solid #ddd;">
            <footer style="font-size: 14px; color: #777;">
              <p>Sent from your contact form at <a href="https://yourwebsite.com" style="color: #0056b3; text-decoration: none;">khalil-dev.me</a></p>
            </footer>
          </div>
        `,
        };
        await transporter_1.default.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message');
    }
});
//# sourceMappingURL=contactController.js.map