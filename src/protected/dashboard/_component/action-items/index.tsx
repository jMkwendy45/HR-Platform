import { Badge } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { actionItems } from "../../../data/mock-data";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

const priorityStyles = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-info/10 text-info border-info/20",
};

export function ActionItemsCard() {
  return (
    <Card className="md:col-span-8 border-none shadow-sm rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-[15px] font-bold">Action Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-slate-50">
          {actionItems.slice(0, 3).map((item) => {
            const completed = (item as any).completed;
            return (
              <div key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className={`h-5 w-5 rounded border ${completed ? "bg-blue-600 border-blue-600 flex items-center justify-center" : "border-slate-200"}`}>
                    {completed && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                  </div>
                  <p className={`text-[14px] ${completed ? "text-slate-400 line-through" : "text-slate-600"}`}>
                    {item.title}
                  </p>
                </div>
                <Badge className={`rounded-full px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider ${priorityStyles[item.priority]}`}>
                  {item.priority}
                </Badge>
              </div>
            );
          })}
        </div>
        <Button variant="secondary" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-10 text-[14px]">
          View All Tasks
        </Button>
      </CardContent>
    </Card>
  );
}