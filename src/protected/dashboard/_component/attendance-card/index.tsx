import { Clock } from "lucide-react";
import { attendanceData } from "../../../data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export function AttendanceCard() {
  const activeWorkforce = attendanceData.inOffice + attendanceData.remote;
  const activePercent = Math.round((activeWorkforce / attendanceData.total) * 100);

  return (
    <Card className="md:col-span-4 border-none shadow-sm rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-[15px] font-bold flex items-center gap-2">
          <Clock className="h-4 w-4 text-blue-500" />
          Today's Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-[14px] text-slate-600">In Office / Remote</span>
            </div>
            <span className="text-[14px] font-bold text-slate-900">189</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="text-[14px] text-slate-600">Out / On Leave</span>
            </div>
            <span className="text-[14px] font-bold text-slate-900">58</span>
          </div>
          <div className="pt-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${activePercent}%` }} />
            </div>
            <p className="text-[12px] text-slate-400 mt-3 font-medium">
              {activePercent}% workforce active today
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}