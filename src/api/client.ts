import { getToken } from "../utils/token-storage";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://apitest.hcmatrix.co",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});