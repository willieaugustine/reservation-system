import axios from 'axios';

const API_URL = 'http://localhost:3000/api/reservations';

export const getReservations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching reservations', error);
    throw error;
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await axios.post(API_URL, reservationData);
    return response.data;
  } catch (error) {
    console.error('Error creating reservation', error);
    throw error;
  }
};
