import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const fetchMemories = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/api/memories`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the memories!", error);
    throw error;
  }
};

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// Fetch all children
export const fetchChildren = async () => {
  const response = await axios.get(`${API_BASE_URL}/children`);
  return response.data;
};

export const addMemory = async (formData) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/memories/new`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the Memory!", error);
    throw error;
  }
};

export const deleteMemory = async (memoryId) => {
  try {
    await axios.post(`${BASEAPIURL}/api/memories/delete`, null, {
      params: { memoryId },
    });
  } catch (error) {
    console.error("There was an error deleting the Memory!", error);
    throw error;
  }
}

  export const updateMemoryDescription = async (id, description) => {
    try {
      const response = await axios.put(`${BASEAPIURL}/api/memories/update/${id}`, null, {
        params: { description },
      });
      return response.data;
    } catch (error) {
      console.error("There was an error updating the memory description!", error);
      throw error;
    }
 };
