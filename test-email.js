// Test script to verify email configuration
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('Email settings:');
  console.log(`- Host: ${process.env.EMAIL_HOST}`);
  console.log(`- Port: ${process.env.EMAIL_PORT}`);
  console.log(`- Secure: ${process.env.EMAIL_SECURE}`);
  console.log(`- User: ${process.env.EMAIL_USER}`);
  console.log(`- Password: ${process.env.EMAIL_PASSWORD ? '******' : 'Not set'}`);
  console.log(`- From: ${process.env.EMAIL_FROM}`);
  console.log(`- Admin: ${process.env.ADMIN_EMAIL}`);

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true // Enable debug output
    });

    // Verify connection configuration
    console.log('Verifying connection configuration...');
    await transporter.verify();
    console.log('Server is ready to take our messages');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Test System" <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email from Medical Appointment System',
      text: 'This is a test email to verify that the email configuration is working correctly.',
      html: '<p>This is a test email to verify that the email configuration is working correctly.</p>'
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error during email test:', error);
  }
}

testEmail(); 