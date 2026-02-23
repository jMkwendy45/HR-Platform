import { Check } from "lucide-react";
import { actionItems } from "../../../data/mock-data";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

const priorityStyles = {
  high: "bg-[#FFE2E2] text-red border-[#FFE2E2]",
  medium: "bg-[#FEF9C2] text-[#A65F00] border-[#FEF9C2]",
  low: "bg-[#DCFCE7] text-[#008236] border-[#DCFCE7]",
};


export function ActionItemsCard() {
  return (
    <Card className="md:col-span-8 border-none shadow-sm rounded-2xl bg-white p-2">
      <CardHeader className="pb-4">
        <CardTitle className="text-[16px] font-semibold text-slate-800">Action Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {actionItems.slice(0, 3).map((item) => {
            const completed = (item as any).completed;
            return (
              <div key={item.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-4">

                  <div className={`h-6 w-6 rounded-md border-2 transition-colors flex items-center justify-center
                    ${completed 
                      ? "bg-black border-black" 
                      : "border-slate-100 bg-slate-50"}`}
                  >
                    {completed && <Check className="h-3.5 w-3.5 text-white stroke-4" />}
                  </div>
                  
                  <p className={`text-[15px] font-medium transition-all
                    ${completed ? "text-slate-300 line-through" : "text-slate-600"}`}>
                    {item.title}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <span className={`px-3 py-1 rounded-full text-[12px] font-medium border ${priorityStyles[item.priority]}`}>
                    {item.priority}
                  </span>
                  
                  <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                    ${completed ? "border-emerald-400" : "border-slate-200"}`}>
                    {completed && <div className="h-2.5 w-2.5 bg-emerald-400 rounded-full" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <Button className="w-full mt-6 bg-[#4285F4] hover:bg-blue-600 text-white rounded-xl h-12 text-[15px] font-semibold shadow-none">
          View All Tasks
        </Button>
      </CardContent>
    </Card>
  );
}