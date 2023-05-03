import { GoogleOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import React from "react";
import { StyledLoginForm } from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <Typography.Title level={5}>Welcome back 🚀</Typography.Title>
      <Typography.Paragraph>Log back into your account</Typography.Paragraph>
      <Space direction="vertical" size={16}>
        <Button
          block
          icon={<GoogleOutlined />}
          shape="round"
          type="primary"
          size="large"
        >
          Sign In
        </Button>
        <Button
          icon={<GoogleOutlined />}
          block
          shape="round"
          type="default"
          size="large"
        >
          Sign Up
        </Button>
      </Space>
    </StyledLoginForm>
  );
};

export default LoginForm;
