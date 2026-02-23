import { useQuery } from "@tanstack/react-query";
import { employeeService } from "../services/employee-service";

export const useEmployees = (filters: any) => {
  return useQuery({
    queryKey: ["employees", filters],
    queryFn: async () => {
      const response = await employeeService.getEmployees(filters);
      return response; 
    },
    placeholderData: (prev) => prev,
  });
};

export const useEmployeeDetail = (id: string) => {
  return useQuery({
    queryKey: ["employee", id],
    queryFn: () => employeeService.getEmployeeById(id),
    enabled: !!id,
  });
};
