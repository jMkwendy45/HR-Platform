import { apiClient } from "../api/client";

export interface DashboardResponse {
  total_employees: number;
  new_hire_count: number;
  upcoming_event: number;
  open_positions: number;
}

export const dashboardService = {
  getDashboard: async (): Promise<DashboardResponse> => {
    const response = await apiClient.get("/api/v1/dashboard");
    return response.data;
  },
};