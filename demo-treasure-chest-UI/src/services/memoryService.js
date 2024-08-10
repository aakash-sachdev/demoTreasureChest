import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/memories';

const fetchMemories = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/memories/', {
            withCredentials: true,
        });
        // Handle response...
    } catch (error) {
        console.error("There was an error fetching the memories!", error);
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

export const updateMemoryDescription = async (id, description) => {
  try {
    const response = await axios.put(`${BASE_API_URL}/update/${id}`, null, {
      params: { description },
      withCredentials: true, // Ensure credentials (cookies) are sent
    });
    return response.data;
  } catch (error) {
    console.error('There was an error updating the memory description!', error);
    throw error;
  }
};
