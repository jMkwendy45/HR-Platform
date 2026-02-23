import { Card, CardContent } from "../../../../components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: any;
  subtitle?: string;
  trend?: string;
  iconColor: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
  trend,
  iconColor,
}: StatCardProps) => {
  return (
    <Card className="border-gray-100 shadow-sm bg-white rounded-xl">
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[13px] font-medium text-slate-500">
              {title}
            </p>

            <h3 className="text-3xl font-bold text-slate-900 mb-1">
              {value}
            </h3>

            {trend ? (
              <div className="flex items-center gap-1 text-[12px] font-medium text-emerald-500 mt-2">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>{trend}</span>
              </div>
            ) : (
              <p className="text-[12px] text-slate-400 mt-2">
                {subtitle}
              </p>
            )}
          </div>

          <div className={iconColor}>
            <Icon className="h-6 w-6 stroke-[1.5]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};