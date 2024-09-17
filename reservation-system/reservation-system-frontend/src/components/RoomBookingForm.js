import React, { useState } from 'react';
import { createRoom } from '../services/roomService';

const RoomBookingForm = () => {
  const [formData, setFormData] = useState({
    room_type: '',
    price_per_night: '',
    max_capacity: '',
    availability: true,
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
      await createRoom(formData);
      alert('Room created successfully!');
    } catch (error) {
      console.error('Error creating room:', error);
      alert('Failed to create room');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Room Type:</label>
      <input
        type="text"
        name="room_type"
        value={formData.room_type}
        onChange={handleInputChange}
      />

      <label>Price per Night:</label>
      <input
        type="number"
        name="price_per_night"
        value={formData.price_per_night}
        onChange={handleInputChange}
      />

      <label>Max Capacity:</label>
      <input
        type="number"
        name="max_capacity"
        value={formData.max_capacity}
        onChange={handleInputChange}
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <button type="submit">Create Room</button>
    </form>
  );
};

export default RoomBookingForm;
