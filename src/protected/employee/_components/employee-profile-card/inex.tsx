import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";

type Props = {
  full_name: string;
  job_title?: string;
  status?: string;
  employment_type?: string;
  type?: string;
};

export function EmployeeProfileCard({ full_name, job_title, status, employment_type, type }: Props) {
  const firstName = full_name?.split(" ")[0] ?? "";
  const initials = full_name
    ? full_name.split(" ").map((n) => n[0]).join("").slice(0, 2)
    : "?";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6 shadow-sm flex items-center gap-6">
      <Avatar className="h-24 w-24 border-4 border-slate-50">
        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}`} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{full_name}</h1>
        <p className="text-slate-500 text-lg">{job_title}</p>
        <div className="flex gap-2 mt-2">
          <span className="bg-green-50 text-green-600 px-3 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
            {status || "Active"}
          </span>
          <span className="text-slate-400 text-sm font-medium ml-2">
            {employment_type || type || "Full-time"}
          </span>
        </div>
      </div>
    </div>
  );
}