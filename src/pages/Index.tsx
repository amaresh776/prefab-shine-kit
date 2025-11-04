import { AdminLayout } from "@/components/admin/AdminLayout";
import { StatsCard } from "@/components/admin/StatsCard";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { DataTable } from "@/components/admin/DataTable";
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Index = () => {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      icon: Users,
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: "Total Orders",
      value: "1,234",
      icon: ShoppingCart,
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: "Revenue",
      value: "$45,231",
      icon: DollarSign,
      trend: { value: 3.1, isPositive: false },
    },
    {
      title: "Growth",
      value: "23.5%",
      icon: TrendingUp,
      trend: { value: 4.3, isPositive: true },
    },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$250.00", status: "Completed" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$180.00", status: "Pending" },
    { id: "ORD-003", customer: "Bob Johnson", amount: "$320.00", status: "Completed" },
    { id: "ORD-004", customer: "Alice Brown", amount: "$150.00", status: "Processing" },
  ];

  const orderColumns = [
    { key: "id" as const, header: "Order ID" },
    { key: "customer" as const, header: "Customer" },
    { key: "amount" as const, header: "Amount" },
    {
      key: "status" as const,
      header: "Status",
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-800"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Recent Orders */}
        <DashboardCard
          title="Recent Orders"
          description="Latest orders from your customers"
          action={
            <Button type="primary" icon={<PlusOutlined />}>
              New Order
            </Button>
          }
        >
          <DataTable data={recentOrders} columns={orderColumns} />
        </DashboardCard>
      </div>
    </AdminLayout>
  );
};

export default Index;
