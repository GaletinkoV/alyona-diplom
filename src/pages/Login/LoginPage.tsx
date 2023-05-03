import React from "react";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import LoginForm from "./components/LoginForm";

import {
  StyledFormGridItem,
  StyledGridItem,
  StyledLoginPageContainer,
} from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      <StyledFormGridItem>
        <LoginForm />
      </StyledFormGridItem>
      <StyledGridItem>
        <LoginIcon />
      </StyledGridItem>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;
