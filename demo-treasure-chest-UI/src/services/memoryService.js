import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/memories';

export const fetchMemories = async () => {
  try {
      const response = await axios.get(BASE_API_URL, {
          withCredentials: true,
      });
      return response.data;
  } catch (error) {
      console.error("There was an error fetching the memories!", error);
      throw error; 
  }
};

export const addMemory = async (formData) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/new`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true, // Ensure credentials (cookies) are sent
    });
    return response.data;
  } catch (error) {
    console.error('There was an error creating the memory!', error);
    throw error;
  }
};

export const deleteMemory = async (memoryId) => {
  try {
    await axios.post(`${BASE_API_URL}/delete`, null, {
      params: { memoryId },
      withCredentials: true, // Ensure credentials (cookies) are sent
    });
  } catch (error) {
    console.error('There was an error deleting the memory!', error);
    throw error;
  }
};

