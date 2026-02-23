import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";
import { headcountData } from "../../../data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export function HeadcountChart() {
  return (
    <Card className="border-none shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle className="text-[15px] font-bold">Headcount Growth</CardTitle>
        <p className="text-[12px] text-slate-400">Last 7 months</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={headcountData}>
            <CartesianGrid vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
            <RechartsTooltip cursor={{ stroke: "#e2e8f0" }} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4, stroke: "#fff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}