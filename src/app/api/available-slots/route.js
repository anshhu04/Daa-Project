import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/database';
import Appointment from '@/app/models/Appointment';
import { generateNextAvailableAppointments } from '@/app/lib/sieveOfEratosthenes';

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const daysToCheck = parseInt(searchParams.get('days') || '7', 10);
    const appointmentDuration = parseInt(searchParams.get('duration') || '30', 10);
    const doctorFilter = searchParams.get('doctor');
    
    // Fetch existing appointments from the database
    let query = { status: { $ne: 'Cancelled' } };
    
    // Add doctor filter if provided
    if (doctorFilter) {
      query.doctor = doctorFilter;
    }
    
    // Get appointments from today onwards
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    query.appointmentDate = { $gte: today };
    
    const existingAppointments = await Appointment.find(query).sort({ appointmentDate: 1 });
    
    // Generate available slots
    const availableSlots = await generateNextAvailableAppointments(
      existingAppointments, 
      daysToCheck, 
      appointmentDuration
    );
    
    return NextResponse.json({ 
      success: true, 
      data: availableSlots
    });
    
  } catch (error) {
    console.error('Error fetching available slots:', error);
    
    return NextResponse.json({ 
      success: false, 
      message: 'Server error occurred while processing your request' 
    }, { status: 500 });
  }
} 