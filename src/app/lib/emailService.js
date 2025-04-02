// File: lib/emailService.js
import nodemailer from 'nodemailer';

// Create a transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
    port: parseInt(process.env.EMAIL_PORT || '2525'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

/**
 * Send confirmation email to patient
 */
export async function sendPatientConfirmation(data) {
  const { name, email, doctor, appointmentDate, appointmentId } = data;
  
  console.log("Preparing patient email for:", email);
  
  if (!email) {
    throw new Error("Patient email address is missing");
  }
  
  // Format the date for email
  const formattedDate = new Date(appointmentDate).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  
  // Email content
  const mailOptions = {
    from: `"Medical Center" <${process.env.EMAIL_FROM || 'appointments@example.com'}>`,
    to: email,
    subject: 'Your Appointment Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for scheduling an appointment with us. Your appointment details are as follows:</p>
        <ul>
          <li><strong>Doctor:</strong> ${doctor}</li>
          <li><strong>Date and Time:</strong> ${formattedDate}</li>
          <li><strong>Appointment ID:</strong> ${appointmentId}</li>
        </ul>
        <p>Please arrive 15 minutes before your scheduled appointment time.</p>
        <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.</p>
        <p>Best regards,<br>Medical Center Team</p>
      </div>
    `
  };
  
  try {
    // Create a new transporter instance for each email
    const transporter = createTransporter();
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Patient email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending patient email:", error);
    throw error;
  }
}

/**
 * Send notification to admin/office staff
 */
export async function sendAdminNotification(data) {
  const { name, email, phone, doctor, appointmentDate, gender, medication, medicationList, appointmentId } = data;
  
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    console.warn("Admin email address is not configured");
    return { skipped: true, reason: "Admin email not configured" };
  }
  
  // Format the date for email
  const formattedDate = new Date(appointmentDate).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  
  // Email content
  const mailOptions = {
    from: `"Appointment System" <${process.env.EMAIL_FROM || 'appointments@example.com'}>`,
    to: adminEmail,
    subject: 'New Appointment Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Appointment Request</h2>
        <p>A new appointment has been scheduled with the following details:</p>
        <ul>
          <li><strong>Patient:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Gender:</strong> ${gender}</li>
          <li><strong>Doctor:</strong> ${doctor}</li>
          <li><strong>Date and Time:</strong> ${formattedDate}</li>
          <li><strong>Taking Medication:</strong> ${medication}</li>
          ${medication === 'Yes' ? `<li><strong>Medication List:</strong> ${medicationList}</li>` : ''}
          <li><strong>Appointment ID:</strong> ${appointmentId}</li>
        </ul>
        <p>Please log in to the admin panel to confirm this appointment.</p>
      </div>
    `
  };
  
  try {
    // Create a new transporter instance for each email
    const transporter = createTransporter();
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Admin email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending admin email:", error);
    throw error;
  }
}