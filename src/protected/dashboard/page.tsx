// import { Badge, CalendarDays, CheckCircle2, Clock } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";
// import { DashboardLayout } from "../../layout/dashboard-layout";
// import { Avatar, AvatarFallback } from "../../components/ui/avatar";
// import {
//   actionItems,
//   attendanceData,
//   departmentData,
//   headcountData,
// } from "../data/mock-data";
// import { Button } from "../../components/ui/button";
// import {
//   CartesianGrid,
//   Cell,
//   Line,
//   LineChart,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip as RechartsTooltip,
// } from "recharts";
// import StaffCard from "./_component/staff-card";

// const priorityStyles = {
//   high: "bg-destructive/10 text-destructive border-destructive/20",
//   medium: "bg-warning/10 text-warning border-warning/20",
//   low: "bg-info/10 text-info border-info/20",
// };

// const Dashboard = () => {
//   const activeWorkforce = attendanceData.inOffice + attendanceData.remote;
//   const activePercent = Math.round(
//     (activeWorkforce / attendanceData.total) * 100,
//   );

//   return (
//     <DashboardLayout>
//       <div className="max-w-375  mx-auto space-y-8 p-2 md:p-4 font-sans border-none">
//         <div className="space-y-1">
//           <h1 className="text-[22px] font-semibold text-slate-900">
//             Dashboard
//           </h1>
//           <p className="text-[13px] text-slate-500">
//             Welcome back! Here's what's happening with your organization.
//           </p>
//         </div>
//         <StaffCard />

//         <div className="grid gap-4 md:grid-cols-12">
//           {/* Today's Attendance */}
//           <Card className="md:col-span-4 border-none shadow-sm rounded-xl">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-[15px] font-bold flex items-center gap-2">
//                 <Clock className="h-4 w-4 text-blue-500" />
//                 Today's Attendance
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-5">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
//                     <span className="text-[14px] text-slate-600">
//                       In Office / Remote
//                     </span>
//                   </div>
//                   <span className="text-[14px] font-bold text-slate-900">
//                     189
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
//                     <span className="text-[14px] text-slate-600">
//                       Out / On Leave
//                     </span>
//                   </div>
//                   <span className="text-[14px] font-bold text-slate-900">
//                     58
//                   </span>
//                 </div>

//                 {/* Progress Bar - Exactly like the image */}
//                 <div className="pt-4">
//                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-emerald-500 transition-all"
//                       style={{ width: `${activePercent}%` }}
//                     />
//                   </div>
//                   <p className="text-[12px] text-slate-400 mt-3 font-medium">
//                     {activePercent}% workforce active today
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="md:col-span-8 border-none shadow-sm rounded-xl">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-[15px] font-bold">
//                 Action Items
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="divide-y divide-slate-50">
//                 {actionItems.slice(0, 3).map((item) => {
//                   const completed = (item as any).completed;
//                   return (
//                     <div
//                       key={item.id}
//                       className="flex items-center justify-between py-4"
//                     >
//                       <div className="flex items-center gap-4">
//                         {/* Checkbox circle */}
//                         <div
//                           className={`h-5 w-5 rounded border ${completed ? "bg-blue-600 border-blue-600 flex items-center justify-center" : "border-slate-200"}`}
//                         >
//                           {completed && (
//                             <CheckCircle2 className="h-3.5 w-3.5 text-white" />
//                           )}
//                         </div>
//                         <p
//                           className={`text-[14px] ${completed ? "text-slate-400 line-through" : "text-slate-600"}`}
//                         >
//                           {item.title}
//                         </p>
//                       </div>
//                       <Badge
//                         className={`rounded-full px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider ${priorityStyles[item.priority]}`}
//                       >
//                         {item.priority}
//                       </Badge>
//                     </div>
//                   );
//                 })}
//               </div>
//               <Button
//                 variant="secondary"
//                 className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-10 text-[14px]"
//               >
//                 View All Tasks
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           <Card className="border-none shadow-sm rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-[15px] font-bold">
//                 Headcount Growth
//               </CardTitle>
//               <p className="text-[12px] text-slate-400">Last 7 months</p>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={250}>
//                 <LineChart data={headcountData}>
//                   <CartesianGrid vertical={false} stroke="#f1f5f9" />
//                   <XAxis
//                     dataKey="month"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fontSize: 11, fill: "#94a3b8" }}
//                     dy={10}
//                   />
//                   <YAxis
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fontSize: 11, fill: "#94a3b8" }}
//                   />
//                   <RechartsTooltip cursor={{ stroke: "#e2e8f0" }} />
//                   <Line
//                     type="monotone"
//                     dataKey="count"
//                     stroke="#3b82f6"
//                     strokeWidth={3}
//                     dot={{
//                       fill: "#3b82f6",
//                       strokeWidth: 2,
//                       r: 4,
//                       stroke: "#fff",
//                     }}
//                     activeDot={{ r: 6 }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>

//           <Card className="border-none shadow-sm rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-[15px] font-bold">
//                 Department Distribution
//               </CardTitle>
//               <p className="text-[12px] text-slate-400">
//                 Current workforce breakdown
//               </p>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie
//                     data={departmentData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={0}
//                     outerRadius={80}
//                     paddingAngle={0}
//                     dataKey="value"
//                     label={({ name, value }) => `${name}: ${value}`}
//                   >
//                     {departmentData.map((entry, index) => (
//                       <Cell key={index} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="pt-4">
//           <div className="flex items-center gap-2 mb-4">
//             <CalendarDays className="h-5 w-5 text-purple-500" />
//             <h2 className="text-[15px] font-bold text-slate-800">
//               Upcoming Birthdays & Anniversaries
//             </h2>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="flex items-center gap-4 p-4 bg-[#f8f7ff] rounded-xl border border-purple-50">
//               <Avatar className="h-12 w-12 border-2 border-white">
//                 <AvatarFallback className="bg-purple-100 text-purple-600 font-bold">
//                   SJ
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-[14px] font-bold text-slate-800">
//                   Sarah Johnson
//                 </p>
//                 <p className="text-[12px] text-slate-500">Feb 15</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-[FAF5FF] rounded-xl border border-purple-50">
//               <Avatar className="h-12 w-12 border-2 border-white">
//                 <AvatarFallback className="bg-purple-100 text-purple-600 font-bold">
//                   SJ
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-[14px] font-bold text-slate-800">
//                   Michael Rodriguez
//                 </p>
//                 <p className="text-[12px] text-slate-500">Feb 18</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 p-4 bg-[#f8f7ff] rounded-xl border border-purple-50">
//               <Avatar className="h-12 w-12 border-2 border-white">
//                 <AvatarFallback className="bg-purple-100 text-purple-600 font-bold">
//                   SJ
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-[14px] font-bold text-slate-800">
//                   Emily Chen
//                 </p>
//                 <p className="text-[12px] text-slate-500">Feb 22</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;
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