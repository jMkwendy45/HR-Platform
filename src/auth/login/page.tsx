
import LoginForm from "./component/login-form";
import RightPanel from "./component/right-panel";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-white font-outfit">
      <LoginForm />
      <RightPanel />
    </div>
  );
}