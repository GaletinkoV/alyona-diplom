import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import { AuditOutlined, PieChartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import AppLogo from "../../AppLogo";

type MenuItem = Required<MenuProps>["items"][number];

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
};

const AppSidenav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const items: MenuItem[] = [
    { label: "General Info", key: "/", icon: <PieChartOutlined /> },
    {
      label: "Anketa",
      key: "/anketa",
      icon: <AuditOutlined />,
    },
  ];

  const onClick: MenuProps["onClick"] = (info) => {
    navigate(info.key);
  };

  return (
    <Layout.Sider style={siderStyle}>
      <AppLogo />
      <Menu
        onClick={onClick}
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
};

export default AppSidenav;
