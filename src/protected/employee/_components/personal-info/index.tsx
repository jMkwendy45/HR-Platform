import { DetailField } from "../detail-field";

type Props = {
  employee: {
    email?: string;
    phone?: string;
    date_of_birth?: string;
    address?: string;
    department?: string;
    next_of_kin_name?: string;
    next_of_kin_relationship?: string;
    next_of_kin_phone?: string;
  };
};

export function PersonalInfoTab({ employee }: Props) {
  return (
    <>
      <section className="mb-10">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Personal Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8">
          <DetailField label="Email" value={employee.email} />
          <DetailField label="Phone" value={employee.phone} />
          <DetailField label="Date of Birth" value={employee.date_of_birth} />
          <DetailField label="Address" value={employee.address} />
          <DetailField label="Department" value={employee.department} />
        </div>
      </section>

      <div className="h-px bg-slate-100 mb-10" />

      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-6">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
          <DetailField label="Name" value={employee.next_of_kin_name} />
          <DetailField label="Relationship" value={employee.next_of_kin_relationship} />
          <DetailField label="Phone" value={employee.next_of_kin_phone} />
        </div>
      </section>
    </>
  );
}