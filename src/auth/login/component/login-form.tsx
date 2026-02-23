import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { HrIcon } from "../../../components/icons/hr-logo";
import { GoogleIcon } from "../../../components/icons/google-icon";
import SocialButton from "./social-button";
import { useLogin } from "../../../hooks/use-login";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, isError } = useLogin();

  const onSubmit = (data: LoginInput) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Login successful");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1200);
      },
    });
  };
  return (
    <div className="flex w-full flex-col items-center justify-center px-6 md:w-1/2 lg:px-20">
      <div className="w-full max-w-100 space-y-8">
        <div className="flex flex-col items-center text-center">
          <HrIcon className="mb-2" />
          <p className="text-sm text-gray-500">
            Sign in to manage your organization
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#6A7282]">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6A7282]" />
              <Input
                {...register("email")}
                type="email"
                placeholder="you@company.com"
                className={`h-11 pl-10 border-gray-200 focus-visible:ring-[#1d61fb] ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <button
                type="button"
                className="text-xs font-medium text-[#1d61fb] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6A7282]" />
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                className={`h-11 pl-10 pr-10 border-gray-200 focus-visible:ring-[#1d61fb] ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6A7282] transition-colors hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {isError && (
            <div className="rounded-md bg-red-50 p-3 text-center">
              <p className="text-sm text-red-600 font-medium">
                Invalid email or password
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-11 bg-[#1d61fb] hover:bg-[#1d61fb]/90 text-sm text-white font-bold"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </Button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <SocialButton
            variant="outline"
            className="w-full h-11 border-gray-200"
          >
            <GoogleIcon />
            Login with Google
          </SocialButton>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button className="font-semibold text-[#1d61fb] hover:underline">
            Contact your administrator
          </button>
        </p>
      </div>
    </div>
  );
}
