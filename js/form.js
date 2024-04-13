const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Create a transporter with SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

// Endpoint to handle form submissions
app.post("/send-email", async (req, res) => {
  const { username, email, message } = req.body;

  // Define email options
  const mailOptions = {
    from: email, // Use the sender's email from the form data
    to: "nikola.obradovic@stu.ssst.edu.ba", // Recipient's email address
    subject: `Contact Form Submission from ${username}`,
    text: `${message}\n\nFrom: ${username}\nEmail: ${email}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
