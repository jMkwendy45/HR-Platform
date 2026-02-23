import { SidebarFooter } from "../../components/ui/sidebar";
import { Button } from "../../components/ui/button";

type Props = {
  collapsed?: boolean;
};

export default function SidebarHelp({ collapsed }: Props) {
  if (collapsed) return <SidebarFooter className="p-4" />;

  return (
    <SidebarFooter className="p-4">
      <div className="rounded-xl border border-blue-50 bg-[#BEDBFF] p-4">
        <p className="text-[13px] font-bold text-slate-800">Need Help?</p>
        <p className="mt-1 text-[11px] text-slate-500 leading-tight">Contact HR support for assistance</p>
        <Button
          variant="outline"
          className="mt-3 h-8 w-full border-blue-200 bg-white text-[11px] font-medium text-blue-600 shadow-none hover:bg-blue-50"
        >
          Contact Support
        </Button>
      </div>
    </SidebarFooter>
  );
}
