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
};
