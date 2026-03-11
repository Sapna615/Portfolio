const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'http://localhost:5174', 
    /\.vercel\.app$/ // This allows all Vercel deployment URLs
  ],
  methods: 'GET,POST',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Default GET route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running and ready to send emails!');
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from .env
    pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env
  },
});

// Test transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer transporter error:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// API Endpoint for sending emails
app.post('/send-email', (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: `"${user_name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // The email address that will receive the message
    replyTo: user_email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Global Error Handlers to prevent server from crashing
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
