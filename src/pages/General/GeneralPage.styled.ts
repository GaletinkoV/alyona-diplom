import styled from "@emotion/styled";

export const StyledImage = styled("img")<{ maxWidth?: number }>(
  ({ maxWidth }) => ({
    margin: "0 auto",
    objectFit: "contain",
    width: "100%",
    maxWidth,
  })
);

export const StyledFormulas = styled("div")(() => ({
  padding: 16,
  borderRadius: 6,
  border: "1px solid rgba(5, 5, 5, 0.06)",
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
}));

export const StyledFormulaItem = styled("div")<{ maxWidth: number }>(
  ({ maxWidth }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    width: "100%",

    "& img": {
      objectFit: "contain",
      maxWidth,
    },
  })
);
