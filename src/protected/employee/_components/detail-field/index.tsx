type Props = {
  label: string;
  value?: string | null;
  icon?: string;
};

export function DetailField({ label, value, icon }: Props) {
  return (
    <div>
      <p className="text-[13px] text-slate-400 mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-800">
        {icon} {value || "—"}
      </p>
    </div>
  );
}