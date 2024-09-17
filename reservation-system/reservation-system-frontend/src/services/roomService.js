import axios from 'axios';

const API_URL = 'http://localhost:3000/api/rooms';

export const getRooms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms', error);
    throw error;
  }
};

export const createRoom = async (roomData) => {
  try {
    const response = await axios.post(API_URL, roomData);
    return response.data;
  } catch (error) {
    console.error('Error creating room', error);
    throw error;
  }
};
