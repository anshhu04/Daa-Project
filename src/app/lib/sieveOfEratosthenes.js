// File: lib/sieveOfEratosthenes.js

/**
 * Sieve of Eratosthenes Algorithm
 * 
 * This implementation uses the Sieve of Eratosthenes algorithm to find available
 * appointment slots based on existing appointments.
 * 
 * In our context:
 * - The numbers represent minutes in a day (0-1439)
 * - "Prime" slots are available appointment slots
 * - "Composite" slots are already booked appointment slots
 * 
 * @param {Date} date - The date to check for availability
 * @param {Array} existingAppointments - Array of existing appointment objects
 * @param {number} appointmentDuration - Duration of each appointment in minutes (default: 30)
 * @returns {Array} - Array of available time slots as Date objects
 */
export function findAvailableSlots(date, existingAppointments, appointmentDuration = 30) {
  // Set clinic hours (e.g., 9 AM to 5 PM)
  const clinicOpenMinute = 9 * 60; // 9 AM in minutes
  const clinicCloseMinute = 17 * 60; // 5 PM in minutes
  
  // Create a boolean array for all minutes in the day
  // true = available, false = unavailable
  const slots = Array(1440).fill(true); // 24 hours * 60 minutes
  
  // Mark all slots outside clinic hours as unavailable
  for (let i = 0; i < clinicOpenMinute; i++) {
    slots[i] = false;
  }
  for (let i = clinicCloseMinute; i < 1440; i++) {
    slots[i] = false;
  }
  
  // Filter appointments for the selected date
  const dateAppointments = existingAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.appointmentDate);
    return appointmentDate.toDateString() === date.toDateString();
  });
  
  // Mark booked slots as unavailable (using Sieve principle)
  dateAppointments.forEach(appointment => {
    const appointmentDate = new Date(appointment.appointmentDate);
    const appointmentMinute = appointmentDate.getHours() * 60 + appointmentDate.getMinutes();
    
    // Mark the appointment slot and buffer time as unavailable
    for (let i = Math.max(0, appointmentMinute - 15); i < Math.min(1440, appointmentMinute + appointmentDuration + 15); i++) {
      slots[i] = false;
    }
  });
  
  // Find available slots (in appointmentDuration chunks)
  const availableSlots = [];
  
  for (let i = clinicOpenMinute; i <= clinicCloseMinute - appointmentDuration; i += appointmentDuration) {
    // Check if the entire slot duration is available
    let isSlotAvailable = true;
    for (let j = 0; j < appointmentDuration; j++) {
      if (!slots[i + j]) {
        isSlotAvailable = false;
        break;
      }
    }
    
    if (isSlotAvailable) {
      // Create a new Date object for this slot
      const slotDate = new Date(date.getTime());
      slotDate.setHours(Math.floor(i / 60), i % 60, 0, 0);
      availableSlots.push(slotDate);
    }
  }
  
  return availableSlots;
}

/**
 * Format available slots into a human-readable format
 * 
 * @param {Array} availableSlots - Array of Date objects representing available slots
 * @returns {Array} - Array of formatted time strings
 */
export function formatAvailableSlots(availableSlots) {
  return availableSlots.map(slot => {
    return slot.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  });
}

/**
 * Generate next available appointments using Sieve of Eratosthenes
 * 
 * @param {Array} existingAppointments - Array of existing appointment objects
 * @param {number} daysToCheck - How many days ahead to check
 * @param {number} appointmentDuration - Duration of each appointment in minutes
 * @returns {Array} - Array of available appointment date/time objects
 */
export async function generateNextAvailableAppointments(existingAppointments, daysToCheck = 7, appointmentDuration = 30) {
  const availableDays = [];
  const today = new Date();
  
  // Check availability for the next n days
  for (let i = 0; i < daysToCheck; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() + i);
    
    // Skip weekends
    const dayOfWeek = checkDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue; // Skip Sunday (0) and Saturday (6)
    
    const availableSlots = findAvailableSlots(checkDate, existingAppointments, appointmentDuration);
    
    if (availableSlots.length > 0) {
      availableDays.push({
        date: checkDate,
        slots: availableSlots
      });
    }
  }
  
  return availableDays;
} 