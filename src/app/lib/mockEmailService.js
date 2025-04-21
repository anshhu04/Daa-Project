/**
 * Mock email service for development/testing
 * This simulates sending emails without actually requiring email credentials
 */

/**
 * Generate a random confirmation code
 */
const generateConfirmationCode = () => {
  // Generate a 6-digit confirmation code
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Simulate sending confirmation email to patient
 */
export async function sendPatientConfirmation(data) {
  const { name, email, doctor, appointmentDate, appointmentId } = data;
  
  // Generate a mock confirmation code
  const confirmationCode = generateConfirmationCode();
  
  console.log("=== MOCK EMAIL SERVICE ===");
  console.log(`TO: ${email}`);
  console.log(`SUBJECT: Your Appointment Confirmation`);
  console.log("CONTENT:");
  console.log(`Dear ${name},`);
  console.log(`Thank you for scheduling an appointment with us.`);
  console.log(`Doctor: ${doctor}`);
  console.log(`Date and Time: ${new Date(appointmentDate).toLocaleString()}`);
  console.log(`Appointment ID: ${appointmentId}`);
  console.log(`Confirmation Code: ${confirmationCode}`);
  console.log("========================");
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    info: {
      messageId: `mock-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
      mock: true
    },
    confirmationCode
  };
}

/**
 * Simulate sending notification to admin/office staff
 */
export async function sendAdminNotification(data) {
  const { name, email, phone, doctor, appointmentDate, gender, medication, medicationList, appointmentId } = data;
  
  console.log("=== MOCK ADMIN NOTIFICATION ===");
  console.log(`TO: Admin`);
  console.log(`SUBJECT: New Appointment Request`);
  console.log("CONTENT:");
  console.log(`A new appointment has been scheduled:`);
  console.log(`Patient: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Gender: ${gender}`);
  console.log(`Doctor: ${doctor}`);
  console.log(`Date and Time: ${new Date(appointmentDate).toLocaleString()}`);
  console.log(`Taking Medication: ${medication}`);
  if (medication === 'Yes') {
    console.log(`Medication List: ${medicationList}`);
  }
  console.log(`Appointment ID: ${appointmentId}`);
  console.log("================================");
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    messageId: `mock-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
    mock: true
  };
} 