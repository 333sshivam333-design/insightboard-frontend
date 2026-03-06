import axios from "axios";

const API_URL = "https://insightboard-backend-ec6p.onrender.com/api";

export const generateTasks = async (transcript: string) => {
  const res = await axios.post(`${API_URL}/transcript`, {
    transcript,
  });

  return res.data;
};