import { apiClient } from "../api/client";
import type {
  Employee,
  EmployeeDetail,
  PaginatedResponse,
} from "../types/employee";

export const employeeService = {
  getEmployees: async (params: any): Promise<PaginatedResponse<Employee>> => {
    const response = await apiClient.get("/api/v1/employee", { params });
    return response.data.data;
  },

  getEmployeeById: async (id: string): Promise<EmployeeDetail> => {
    const response = await apiClient.get(`/api/v1/employee/${id}`);
    return response.data.data ?? response.data;
  },
};
