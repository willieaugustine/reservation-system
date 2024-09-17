import React, { useState } from 'react';
import { createEvent } from '../services/eventService';

const EventBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    event_date: '',
    start_time: '',
    end_time: '',
    location: '',
    capacity: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Event Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Event Date:</label>
      <input
        type="date"
        name="event_date"
        value={formData.event_date}
        onChange={handleInputChange}
      />

      <label>Start Time:</label>
      <input
        type="time"
        name="start_time"
        value={formData.start_time}
        onChange={handleInputChange}
      />

      <label>End Time:</label>
      <input
        type="time"
        name="end_time"
        value={formData.end_time}
        onChange={handleInputChange}
      />

      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
      />

      <label>Capacity:</label>
      <input
        type="number"
        name="capacity"
        value={formData.capacity}
        onChange={handleInputChange}
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventBookingForm;
