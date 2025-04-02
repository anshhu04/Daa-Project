// File: app/api/appointment/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/database';
import Appointment from '@/app/models/Appointment';

// Import real and mock email services
import * as realEmailService from '@/app/lib/emailService';
import * as mockEmailService from '@/app/lib/mockEmailService';

// Determine which email service to use based on environment
const isDev = process.env.NODE_ENV === 'development';
const emailService = isDev ? mockEmailService : realEmailService;

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();
    
    // Parse the JSON body from the request
    const formData = await request.json();
    
    // Create a new appointment document
    const appointment = new Appointment(formData);
    
    // Validate the appointment data
    const validationError = appointment.validateSync();
    if (validationError) {
      const errorMessage = Object.values(validationError.errors)
        .map(error => error.message)
        .join(', ');
        
      return NextResponse.json({ 
        success: false, 
        message: errorMessage 
      }, { status: 400 });
    }
    
    // Save the appointment to the database
    const savedAppointment = await appointment.save();
    
    // Prepare data for email
    const emailData = {
      ...formData,
      appointmentId: savedAppointment._id
    };
    
    // Try to send emails but don't let failures stop the process
    let emailStatus = { patient: false, admin: false };
    
    try {
      // Send confirmation email to patient
      await emailService.sendPatientConfirmation(emailData);
      emailStatus.patient = true;
    } catch (emailError) {
      console.error("Failed to send patient confirmation email:", emailError);
      // Continue with the process despite email failure
    }
    
    try {
      // Send notification to admin
      await emailService.sendAdminNotification(emailData);
      emailStatus.admin = true;
    } catch (emailError) {
      console.error("Failed to send admin notification email:", emailError);
      // Continue with the process despite email failure
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Appointment scheduled successfully',
      appointmentId: savedAppointment._id,
      emailSent: emailStatus.patient,
      adminNotified: emailStatus.admin
    });
    
  } catch (error) {
    console.error('Appointment processing error:', error);
    
    // Handle specific error types
    if (error.name === 'ValidationError') {
      return NextResponse.json({ 
        success: false, 
        message: Object.values(error.errors).map(err => err.message).join(', ')
      }, { status: 400 });
    }
    
    // Return general error response
    return NextResponse.json({ 
      success: false, 
      message: 'Server error occurred while processing your request' 
    }, { status: 500 });
  }
}

// Get appointments for a specific user by email
export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();
    
    // Get email from query parameters
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({
        success: false,
        message: 'Email parameter is required'
      }, { status: 400 });
    }
    
    // Find appointments for this email
    const appointments = await Appointment.find({ 
      email: email.toLowerCase()
    }).sort({ appointmentDate: 1 });
    
    return NextResponse.json({
      success: true,
      data: appointments
    });
    
  } catch (error) {
    console.error('Error fetching appointments:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Server error occurred while processing your request'
    }, { status: 500 });
  }
}