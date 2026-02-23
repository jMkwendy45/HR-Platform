import { DashboardLayout } from "../../layout/dashboard-layout";
import { ActionItemsCard } from "./_component/action-items";
import { AttendanceCard } from "./_component/attendance-card";
import { BirthdaysSection } from "./_component/birthday-section";
import { DepartmentChart } from "./_component/department-chart";
import { HeadcountChart } from "./_component/head-count-chart";
import StaffCard from "./_component/staff-card";


const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="max-w-375 mx-auto space-y-8 p-2 md:p-4 font-sans border-none">
        <div className="space-y-1">
          <h1 className="text-[22px] font-semibold text-slate-900">Dashboard</h1>
          <p className="text-[13px] text-slate-500">
            Welcome back! Here's what's happening with your organization.
          </p>
        </div>

        <StaffCard />

        <div className="grid gap-4 md:grid-cols-12">
          <AttendanceCard />
          <ActionItemsCard />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <HeadcountChart />
          <DepartmentChart />
        </div>

        <BirthdaysSection />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;