import styled from "@emotion/styled";

export const StyledLoginPageContainer = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
  min-height: inherit;
  background-color: #ffffff;
`;

export const StyledFormGridItem = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledGridItem = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  backdrop-filter: blur(3px);
  background-color: #e8f5e9;

  svg {
    width: 100%;
    max-width: 400px;
  }
`;
