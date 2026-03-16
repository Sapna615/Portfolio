const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: '*', 
  methods: 'GET,POST',
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
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer verification failed:', error.message);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// API Endpoint for sending emails
app.post('/send-email', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  console.log('Received contact form submission from:', user_email);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    replyTo: user_email,
    subject: `Portfolio Contact: ${subject}`,
    text: `Name: ${user_name}\nEmail: ${user_email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
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
