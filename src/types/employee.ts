export type Employee = {
  id: number;
  full_name: string;
  email: string;
  job_title: string;
  department: string;
  location?: string;
  type?: string;
  start_date?: string;
  status?: string;
};

export type EmployeeDetail = {
  id: number;
  full_name: string;
  email: string;
  job_title: string;
  department: string;
  location?: string;
  type?: string;
  start_date?: string;
  status?: string;
  phone?: string;
  date_of_birth?: string;
  address?: string;
  salary?: string | number;
  manager?: string;
  employment_type?: string;
  next_of_kin_name?: string;
  next_of_kin_relationship?: string;
  next_of_kin_phone?: string;
};

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}
