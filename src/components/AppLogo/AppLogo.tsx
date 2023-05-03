import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { StyledAppLogoContainer } from "./AppLogo.styled";

const AppLogo = () => {
  return (
    <StyledAppLogoContainer>
      <LogoIcon />
    </StyledAppLogoContainer>
  );
};

export default AppLogo;
