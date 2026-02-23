import { HrIcon } from "../../components/icons/hr-logo";

type Props = {
  collapsed?: boolean;
};

export default function SidebarLogo({ }: Props) {
  return (
    <div className="flex h-16 items-center gap-3 px-6 mb-2">
        <HrIcon />
      </div>
   
  );
}
