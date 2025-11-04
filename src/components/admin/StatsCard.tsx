import { Card, Statistic } from "antd";
import { LucideIcon } from "lucide-react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatsCard = ({ title, value, icon: Icon, trend, className }: StatsCardProps) => {
  return (
    <Card className={className} hoverable>
      <div className="flex items-start justify-between">
        <Statistic
          title={title}
          value={value}
          suffix={
            trend && (
              <span className="text-sm ml-2">
                {trend.isPositive ? (
                  <ArrowUpOutlined className="text-green-600" />
                ) : (
                  <ArrowDownOutlined className="text-red-600" />
                )}
                <span className={trend.isPositive ? "text-green-600" : "text-red-600"}>
                  {" "}{trend.value}%
                </span>
              </span>
            )
          }
        />
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
