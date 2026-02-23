import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
} from "lucide-react";
import { DashboardLayout } from "../../layout/dashboard-layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useEmployees } from "../../hooks/use-employee";

const statusStyles: Record<string, string> = {
  Active: "bg-green-50 text-green-600",
  Onboarding: "bg-blue-50 text-blue-600",
  "On Leave": "bg-yellow-50 text-yellow-600",
};

const Employees = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useEmployees({
    name: searchTerm,
    page,
  });

  const employeeList = data?.data || [];

  return (
    <DashboardLayout>
      <div className="max-w-375 mx-auto py-8 px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Employees</h1>
            <p className="text-slate-500 mt-1">
              Manage and view your organization's workforce
            </p>
          </div>
          <Button className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white">
            + Add New Employee
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search by name, email, title, or department..."
              className="pl-10 h-11 border-slate-200"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <Button
            variant="outline"
            className="gap-2 h-11 text-slate-600 border-slate-200"
          >
            <Download className="h-4 w-4" /> Export to CSV
          </Button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-700">
                  Employee
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Job Title
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Department
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Location
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Type
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  Start Date
                </TableHead>
                <TableHead className="text-right font-semibold text-slate-700">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-64 text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto text-[#1D4ED8]" />
                  </TableCell>
                </TableRow>
              ) : (
                employeeList.map((emp: any) => (
                  <TableRow
                    key={emp.id}
                    className="cursor-pointer hover:bg-slate-50/50 transition-colors"
                    onClick={() => navigate(`/employees/${emp.id}`)}
                  >
                    <TableCell>
                      <div className="font-medium text-[#1D4ED8]">
                        {emp.full_name}
                      </div>
                      <div className="text-xs text-slate-500">{emp.email}</div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {emp.job_title}
                    </TableCell>
                    <TableCell className="text-slate-600 capitalize">
                      {emp.department}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {emp.location || "Remote"}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {emp.type || "Full-time"}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {emp.start_date
                        ? new Date(emp.start_date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "N/A"}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-medium ${statusStyles[emp.status] || "bg-green-50 text-green-600"}`}
                      >
                        {emp.status || "Active"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-white">
            <span className="text-sm text-slate-500 font-medium">
              Page {data?.current_page || 1} of {data?.last_page || 1}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-200"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-200"
                disabled={!data?.next_page_url}
                onClick={() => setPage((p) => p + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employees;
