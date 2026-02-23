export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}