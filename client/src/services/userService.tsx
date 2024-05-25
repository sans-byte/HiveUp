import axios from "axios";
import { axiosInstance } from ".";

export const registerUser = async (user: any) => {
  try {
    const res = await axios.post("/api/users/register", user, {
      baseURL: "http://localhost:5000",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return {
      error: error.res.data,
    };
  }
};
export const loginUser = async (user: { email: string; }) => {
  try {
    const res = await axiosInstance.post("/api/users/login", user);
    return res.data;
  } catch (error) {
    return {
      error: error,
    };
  }
};
