import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import { StyledContent, StyledPageContent } from "./AppLayout.styled";
import AppSidenav from "./components/AppSidenav";

const { Footer } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <AppSidenav />
      <Layout style={{ marginLeft: 200 }}>
        <AppHeader />
        <StyledContent>
          <StyledPageContent style={{ background: colorBgContainer }}>
            <Outlet />
          </StyledPageContent>
        </StyledContent>
        <Footer style={{ textAlign: "center" }}>
          © 2023 IRA. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
