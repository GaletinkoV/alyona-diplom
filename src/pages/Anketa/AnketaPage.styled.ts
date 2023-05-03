import styled from "@emotion/styled";

export const StyledQuestionContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const StyledQuestionItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,
}));

export const StyledActionsRow = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
}));

export const StyledLoadingContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  padding: 16,
  alignItems: "center",
}));
