import { DetailField } from "../detail-field";

type Props = {
  employee: {
    job_title?: string;
    department?: string;
    employment_type?: string;
    type?: string;
    start_date?: string;
    manager?: string;
    salary?: string | number;
    location?: string;
  };
};

export function EmploymentTab({ employee }: Props) {
  return (
    <>
      <section className="mb-10">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Employment Details</h3>
        <div className="grid grid-cols-2 gap-y-10">
          <DetailField label="Job Title" value={employee.job_title} />
          <DetailField label="Department" value={employee.department} />
          <DetailField label="Employment Type" value={employee.employment_type || employee.type || "Full-time"} />
          <DetailField label="Start Date" value={employee.start_date} icon="📅" />
          <DetailField label="Manager" value={employee.manager} />
          <DetailField
            label="Current Salary"
            value={employee.salary ? `$${Number(employee.salary).toLocaleString()}` : undefined}
            icon="💰"
          />
        </div>
      </section>

      <div className="h-px bg-slate-100 mb-10" />

      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-2">Location</h3>
        <p className="text-slate-500 font-medium">{employee.location || "—"}</p>
      </section>
    </>
  );
}