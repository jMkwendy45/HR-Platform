import { API_ENDPOINTS } from "../api/api-endpoint";
import { apiClient } from "../api/client";
import type { LoginPayload, LoginResponse } from "../types/auth";

export const authService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, payload);

    return response.data;
  },


  logout: async () => {
    const response = await apiClient.post("/api/v1/logout");
    return response.data;
  },
};