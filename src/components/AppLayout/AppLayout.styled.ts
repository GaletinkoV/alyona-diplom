import styled from "@emotion/styled";
import { Layout } from "antd";

export const StyledContent = styled(Layout.Content)(() => ({
  padding: 24,
}));

export const StyledPageContent = styled("div")(() => ({
  padding: 16,
  display: "flex",
  flexDirection: "column",
  borderRadius: 4,
  minHeight: 400,
}));

export const StyledHeader = styled(Layout.Header)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 24px",
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  "& > h4": {
    margin: 0,
    color: "#fff",
  },
}));
