'use client'
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    medication: '',
    medicationList: ''
  });

  const [doctors, setDoctors] = useState([
    "Dr. Sanjay Gupta",
    "Dr. Susan Love",
    "Dr. Ben Carson",
    "Dr. Gagandeep Kang"
  ]);

  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? (checked ? value : prev[name]) : value
    }));

    // When doctor changes, reset dates and times
    if (name === 'doctor') {
      setFormData(prev => ({
        ...prev,
        appointmentDate: '',
        appointmentTime: ''
      }));
      fetchAvailableDates(value);
    }

    // When date changes, fetch available slots for that date
    if (name === 'appointmentDate' && value) {
      fetchAvailableSlots(formData.doctor, value);
    }
  };

  // Fetch available dates when component mounts
  useEffect(() => {
    if (formData.doctor) {
      fetchAvailableDates(formData.doctor);
    }
  }, []);

  // Fetch available dates for the selected doctor
  const fetchAvailableDates = async (doctor) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/available-slots?doctor=${encodeURIComponent(doctor)}&days=14`);
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Extract just the dates
        const dates = data.data.map(day => {
          const date = new Date(day.date);
          return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        });
        setAvailableDates(dates);
      } else {
        setMessage({ text: data.message || 'Failed to fetch available dates', type: 'error' });
      }
    } catch (error) {
      console.error('Error fetching available dates:', error);
      setMessage({ text: 'Failed to fetch available dates', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Fetch available time slots for the selected date
  const fetchAvailableSlots = async (doctor, date) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/available-slots?doctor=${encodeURIComponent(doctor)}&days=14`);
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Find the selected date in the data
        const selectedDay = data.data.find(day => {
          const dayDate = new Date(day.date);
          return dayDate.toISOString().split('T')[0] === date;
        });
        
        if (selectedDay) {
          // Format slots for display
          const timeSlots = selectedDay.slots.map(slot => {
            const slotTime = new Date(slot);
            return {
              value: slotTime.toISOString(),
              label: slotTime.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit', 
                hour12: true 
              })
            };
          });
          setAvailableSlots(timeSlots);
        } else {
          setAvailableSlots([]);
        }
      } else {
        setMessage({ text: data.message || 'Failed to fetch available slots', type: 'error' });
      }
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setMessage({ text: 'Failed to fetch available slots', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });
    
    // Combine date and time into a single datetime
    const combinedDateTime = formData.appointmentTime ? 
      new Date(formData.appointmentTime) : 
      new Date(`${formData.appointmentDate}T${formData.appointmentTime}`);
    
    // Prepare data for submission
    const submissionData = {
      ...formData,
      appointmentDate: combinedDateTime.toISOString()
    };
    
    delete submissionData.appointmentTime; // Remove the separate time field
  
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        let successMessage = "Appointment scheduled successfully!";
        
        // Add information about email status
        if (data.emailSent) {
          successMessage += " A confirmation has been sent to your email.";
        } else {
          successMessage += " However, we couldn't send you an email confirmation at this time.";
        }
        
        setMessage({ text: successMessage, type: 'success' });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          gender: '',
          doctor: '',
          appointmentDate: '',
          appointmentTime: '',
          medication: '',
          medicationList: ''
        });
        setAvailableSlots([]);
      } else {
        setMessage({ text: data.message || 'Failed to schedule appointment', type: 'error' });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "Something went wrong. Please try again later.", type: 'error' });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="bg-slate-100 flex flex-col lg:flex-row mt-20">
        {/* Left Side Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img src="/hero_section.jpg" alt="Hero Section" className="h-[100%] w-[100%]" />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-8">
          <h2 className="text-blue-800 text-lg font-bold">CONTACT US</h2>
          <h1 className="text-3xl font-bold mt-4">Make an Appointment</h1>
          <p className="text-xl text-slate-600 mt-4">We will send you a confirmation within 24 hours.</p>
          <p className="text-xl text-slate-600">Emergency? Call 1-2554-2356-33</p>

          {/* Status Message */}
          {message.text && (
            <div className={`mt-4 p-3 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message.text}
            </div>
          )}

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Your Email</label>
                <input type="email" name="email" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            {/* Phone Number & Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Sex</label>
                <div className="flex items-center gap-4 mt-1">
                  <label><input type="radio" name="gender" value="Male" className="mr-1" onChange={handleChange} required /> Male</label>
                  <label><input type="radio" name="gender" value="Female" className="mr-1" onChange={handleChange} /> Female</label>
                  <label><input type="radio" name="gender" value="Other" className="mr-1" onChange={handleChange} /> Other</label>
                </div>
              </div>
            </div>

            {/* Select Doctor */}
            <div>
              <label className="text-lg font-medium text-gray-700">Select a Doctor</label>
              <select
                name="doctor"
                className="w-full p-2 border text-lg mt-1"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>

            {/* Appointment Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Date of Appointment</label>
                <select
                  name="appointmentDate"
                  className="w-full border p-2 mt-1 text-lg"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  disabled={!formData.doctor || loading}
                >
                  <option value="">Select a date</option>
                  {availableDates.map((date, index) => {
                    const displayDate = new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    });
                    return (
                      <option key={index} value={date}>{displayDate}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Time of Appointment</label>
                <select
                  name="appointmentTime"
                  className="w-full border p-2 mt-1 text-lg"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                  disabled={!formData.appointmentDate || loading}
                >
                  <option value="">Select a time</option>
                  {availableSlots.map((slot, index) => (
                    <option key={index} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Medications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Taking Any Medications?</label>
                <div className="flex items-center gap-4 mt-1">
                  <label><input type="radio" name="medication" value="Yes" className="mr-1" onChange={handleChange} required /> Yes</label>
                  <label><input type="radio" name="medication" value="No" className="mr-1" onChange={handleChange} /> No</label>
                </div>
              </div>
            </div>

            {/* Medications Description */}
            {formData.medication === 'Yes' && (
              <div>
                <label className="text-lg font-medium text-gray-700">Please list your medications</label>
                <textarea 
                  name="medicationList" 
                  className="w-full min-h-24 border p-2 text-lg mt-1" 
                  value={formData.medicationList} 
                  onChange={handleChange}
                  required={formData.medication === 'Yes'}
                ></textarea>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-blue-700 text-white font-bold px-5 rounded-md text-sm hover:bg-blue-500 duration-300 h-12 w-52 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'PROCESSING...' : 'BOOK APPOINTMENT'}
            </button>   
          </form>
        </div>
      </div>
    </>
  );
}
