const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
const Imap = require("imap");

// Load environment variables
dotenv.config({ path: "info.env" });

// Create an Express app
const app = express();
app.use(cors());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON data

// Create a transporter with SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
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

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "nikolao2003@outlook.com",
    subject: `Contact Form Submission from ${username}`,
    text: `${message}\n\nFrom: ${username}\nEmail: ${email}`,
    headers: {
      "Reply-To": email, // Setting the Reply-To header
      "MIME-Version": "1.0", // Setting MIME version
      "Content-Type": "text/plain; charset=UTF-8",
      "X-Mailer": "NodeMailer", // Optional header
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});
//IMAP
const imapConfig = {
  host: process.env.SMTP_HOST,
  port: process.env.IMAP_PORT,

  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,

  tls: true,
};

// Function to handle IMAP connection and actions
function connectImap() {
  const imap = new Imap(imapConfig);

  imap.once("ready", function () {
    console.log("Connected to IMAP server");
    // Perform IMAP actions here (e.g., fetching emails)
    imap.end();
  });

  imap.once("error", function (err) {
    console.error("IMAP error:", err);
  });

  imap.connect();
}

// Trigger the IMAP connection
connectImap();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(
  cors({
    origin: "https://checkify.ch", // Specify allowed origin
    methods: ["POST", "GET"], // Specify allowed methods
    allowedHeaders: ["Content-Type"], // Specify allowed headers
  })
);
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
