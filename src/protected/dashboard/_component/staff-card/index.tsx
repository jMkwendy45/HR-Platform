import { Users, UserPlus, CalendarDays, Briefcase } from "lucide-react";
import { StatCard } from "../stat-card";
import { useDashboard } from "../../../../hooks/use-dashboard";
const StaffCard = () => {

  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return <p className="text-sm text-slate-500">Loading dashboard...</p>;
  }

  if (isError || !data) {
    return (
      <p className="text-sm text-red-500">
        Failed to load dashboard data
      </p>
    );
  }

  const stats = [
    {
      title: "Total Employees",
      value: data.total_employees,
      icon: Users,
      trend: "+12% from last month",
      iconColor: "text-blue-500",
    },
    {
      title: "New Hires This Month",
      value: data.new_hire_count,
      icon: UserPlus,
      subtitle: "Recently added employees",
      iconColor: "text-emerald-500",
    },
    {
      title: "Upcoming Events",
      value: data.upcoming_event,
      icon: CalendarDays,
      subtitle: "Birthdays & anniversaries",
      iconColor: "text-purple-500",
    },
    {
      title: "Open Positions",
      value: data.open_positions,
      icon: Briefcase,
      subtitle: "Currently hiring",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StaffCard;