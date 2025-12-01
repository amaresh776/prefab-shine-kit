import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button, type MenuProps } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
} from "lucide-react";

const { Header, Sider, Content } = Layout;

const menuItems: MenuProps['items'] = [
  { key: "/", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { key: "/users", label: "Users", icon: <Users className="h-4 w-4" /> },
  { key: "/analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { key: "/reports", label: "Reports", icon: <FileText className="h-4 w-4" /> },
  { key: "/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout className="min-h-screen">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        className="shadow-lg"
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <h2 className={`font-bold text-white ${collapsed ? "text-sm" : "text-xl"}`}>
            {collapsed ? "AP" : "Admin Panel"}
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          className="mt-4"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header className="bg-white shadow-sm px-6 flex items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg w-16 h-16"
          />
          <h1 className="text-lg font-semibold ml-4">Admin Dashboard</h1>
        </Header>
        <Content className="m-6 p-6 bg-gray-50 rounded-lg min-h-[280px]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
