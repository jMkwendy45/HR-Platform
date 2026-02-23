import {
  LayoutDashboard,
  Users,
  Clock,
  Briefcase,
  DollarSign,
  CalendarDays,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";
import { Sidebar, useSidebar } from "../../components/ui/sidebar";
import SidebarLogo from "../side-bar-logo/side-bar-logo";
import SidebarNav from "../side-bar-nav/side-bar-nav";
import SidebarHelp from "../side-bar-help/side-bar-help";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "Time & Attendance", url: "#", icon: Clock },
  { title: "Recruitment", url: "#", icon: Briefcase },
  { title: "Payroll", url: "#", icon: DollarSign },
  { title: "Calendar", url: "#", icon: CalendarDays },
  { title: "Reports", url: "#", icon: BarChart3 },
  { title: "Documents", url: "#", icon: FileText },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-gray-100 bg-white">
      <SidebarLogo collapsed={collapsed} />
      <SidebarNav items={navItems} collapsed={collapsed} />
      <SidebarHelp collapsed={collapsed} />
    </Sidebar>
  );
}
