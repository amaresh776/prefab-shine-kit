import { AdminLayout } from "@/components/admin/AdminLayout";
import { StatsCard } from "@/components/admin/StatsCard";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { DataTable } from "@/components/admin/DataTable";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentOrders = [
  { id: "ORD-001", customer: "John Doe", status: "Completed", amount: "$299.00" },
  { id: "ORD-002", customer: "Jane Smith", status: "Processing", amount: "$149.00" },
  { id: "ORD-003", customer: "Bob Johnson", status: "Pending", amount: "$499.00" },
  { id: "ORD-004", customer: "Alice Williams", status: "Completed", amount: "$799.00" },
];

const columns = [
  { key: "id" as const, header: "Order ID" },
  { key: "customer" as const, header: "Customer" },
  { 
    key: "status" as const, 
    header: "Status",
    render: (value: string) => (
      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
        value === "Completed" ? "bg-green-100 text-green-800" :
        value === "Processing" ? "bg-blue-100 text-blue-800" :
        "bg-yellow-100 text-yellow-800"
      }`}>
        {value}
      </span>
    )
  },
  { key: "amount" as const, header: "Amount" },
];

const Index = () => {
  return (
    <AdminLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$45,231"
            icon={DollarSign}
            trend={{ value: 20.1, isPositive: true }}
          />
          <StatsCard
            title="Active Users"
            value="2,350"
            icon={Users}
            trend={{ value: 15.3, isPositive: true }}
          />
          <StatsCard
            title="Total Orders"
            value="1,247"
            icon={ShoppingCart}
            trend={{ value: 5.2, isPositive: false }}
          />
          <StatsCard
            title="Growth Rate"
            value="12.5%"
            icon={TrendingUp}
            trend={{ value: 3.8, isPositive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <DashboardCard
            title="Recent Activity"
            description="Latest updates from your dashboard"
            className="col-span-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New user registration</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Order #1247 completed</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">System update available</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Quick Actions"
            className="col-span-3"
          >
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                Create New User
              </Button>
              <Button className="w-full" variant="outline">
                Generate Report
              </Button>
              <Button className="w-full" variant="outline">
                Export Data
              </Button>
            </div>
          </DashboardCard>
        </div>

        <DashboardCard
          title="Recent Orders"
          description="View and manage your latest orders"
          action={<Button variant="outline" size="sm">View All</Button>}
        >
          <DataTable data={recentOrders} columns={columns} />
        </DashboardCard>
      </div>
    </AdminLayout>
  );
};

export default Index;
