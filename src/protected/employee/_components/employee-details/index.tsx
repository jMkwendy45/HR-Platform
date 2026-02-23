import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useEmployeeDetail } from "../../../../hooks/use-employee";
import { DashboardLayout } from "../../../../layout/dashboard-layout";
import { EmployeeProfileCard } from "../employee-profile-card/inex";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { PersonalInfoTab } from "../personal-info-tab";
import { EmploymentTab } from "../employment-tab";

const EmployeeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: employee, isLoading } = useEmployeeDetail(id ?? "");

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-10 w-10 animate-spin text-slate-400" />
        </div>
      </DashboardLayout>
    );
  }

  if (!employee) return null;

  return (
    <DashboardLayout>
      <div className="max-w-375 mx-auto py-8 px-4">
        <button
          onClick={() => navigate("/employees")}
          className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-8 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Employees
        </button>

        <EmployeeProfileCard {...employee} />

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="bg-slate-100/50 p-1 rounded-lg w-fit mb-6">
            <TabsTrigger
              value="personal"
              className="px-8 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="employment"
              className="px-8 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
            >
              Employment
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="personal"
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
          >
            <PersonalInfoTab employee={employee} />
          </TabsContent>

          <TabsContent
            value="employment"
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
          >
            <EmploymentTab employee={employee} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDetail;
