import { CalendarDays } from "lucide-react";
import { Avatar,AvatarFallback } from "../../../../components/ui/avatar";

const birthdays = [
  { name: "Sarah Johnson", date: "Feb 15", initials: "SJ" },
  { name: "Michael Rodriguez", date: "Feb 18", initials: "MR" },
  { name: "Emily Chen", date: "Feb 22", initials: "EC" },
];

export function BirthdaysSection() {
  return (
    <div className="pt-4">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="h-5 w-5 text-purple-500" />
        <h2 className="text-[15px] font-bold text-slate-800">
          Upcoming Birthdays & Anniversaries
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {birthdays.map((person) => (
          <div key={person.name} className="flex items-center gap-4 p-4 bg-purple-100 rounded-xl border border-purple-50">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarFallback className="bg-purple-100 text-purple-600 font-bold">
                {person.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[14px] font-bold text-slate-800">{person.name}</p>
              <p className="text-[12px] text-slate-500">{person.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}