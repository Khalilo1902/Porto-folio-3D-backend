import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import transporter from "./nodemailer/transporter";
import contactSchema from "../schema/contactSchema";

export const postContact = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    try {
     
      const newContact = new contactSchema({
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
      transporter.verify((err, success) => {
        if (err) {
          console.error("SMTP Error:", err);
        } else {
          console.log("✅ SMTP is ready");
        }
      });
      console.log("Sende Mail...");
      await transporter.sendMail(mailOptions);
      
      console.log("Mail gesendet!");

      res.status(200).send('Message sent successfully'); 
    } catch (error) {
      console.error('Error sending email:', error);  
      res.status(500).send('Error sending message');  
    }
});
