import { useMutation } from "@tanstack/react-query";
import { removeToken } from "../utils/token-storage";
import { authService } from "../services/auth-service";

export const useLogout = () => {
  return useMutation({
    mutationFn: authService.logout,

    onSuccess: () => {
      removeToken();

      window.location.href = "/login";
    },

    onError: () => {
      removeToken();
      window.location.href = "/login";
    },
  });
};