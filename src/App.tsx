// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { Toaster } from "sonner";
// import { TooltipProvider } from "./components/ui/tooltip";

// import NotFound from "./not-found";
// import LoginPage from "./auth/login/page";
// import Dashboard from "./protected/dashboard/page";
// import Employees from "./protected/employee/page";
// import EmployeeDetail from "./protected/employee/employee-details";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster position="top-right" richColors />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" replace />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/employees" element={<Employees />} />
//           <Route path="/employees/:id" element={<EmployeeDetail />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./_components/protected-route";

const NotFound = lazy(() => import("./not-found"));
const LoginPage = lazy(() => import("./auth/login/page"));
const Dashboard = lazy(() => import("./protected/dashboard/page"));
const Employees = lazy(() => import("./protected/employee/page"));
const EmployeeDetail = lazy(() => import("./protected/employee/_components/employee-details"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
            <Route path="/employees/:id" element={<ProtectedRoute><EmployeeDetail /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;