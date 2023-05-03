import React, { memo } from "react";
import { Button, Typography } from "antd";
import { StyledHeader } from "../AppLayout.styled";
import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Imeca Info";
      case "/anketa":
        return "Anketa Info";
      default:
        return null;
    }
  };

  return (
    <StyledHeader>
      <Typography.Title level={4}>{getTitle()}</Typography.Title>
      <Button>Log out</Button>
    </StyledHeader>
  );
};

export default memo(AppHeader);
