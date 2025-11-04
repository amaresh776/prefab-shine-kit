import { ReactNode } from "react";
import { Card } from "antd";

interface DashboardCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export const DashboardCard = ({ 
  title, 
  description, 
  children, 
  className,
  action 
}: DashboardCardProps) => {
  return (
    <Card 
      title={title}
      extra={action}
      className={className}
      hoverable
    >
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      {children}
    </Card>
  );
};
