import { useMutation } from "@tanstack/react-query";
import { saveToken } from "../utils/token-storage";
import { authService } from "../services/auth-service";

export const useLogin = () => {
  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      saveToken(data.token);
    },

    onError: (error) => {
        error
    },
  });
};