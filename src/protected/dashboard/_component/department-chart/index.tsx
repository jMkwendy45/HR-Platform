import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { departmentData } from "../../../data/mock-data";

export function DepartmentChart() {
  return (
    <Card className="border-none shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle className="text-[15px] font-bold">Department Distribution</CardTitle>
        <p className="text-[12px] text-slate-400">Current workforce breakdown</p>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={departmentData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {departmentData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}