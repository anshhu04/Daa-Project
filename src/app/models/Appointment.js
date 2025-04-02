// File: models/Appointment.js
import mongoose from 'mongoose';

// Define the schema only if it doesn't exist already
const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, 'Gender is required']
  },
  doctor: {
    type: String,
    required: [true, 'Doctor selection is required'],
    trim: true
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required'],
    validate: {
      validator: function(v) {
        return v > new Date();
      },
      message: 'Appointment date must be in the future'
    }
  },
  medication: {
    type: String,
    enum: ['Yes', 'No'],
    default: 'No'
  },
  medicationList: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if the model already exists before defining it
// This prevents errors in development due to hot reloading
export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);