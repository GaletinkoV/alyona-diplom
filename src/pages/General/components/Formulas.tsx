import React from "react";
import { StyledFormulas, StyledFormulaItem } from "../GeneralPage.styled";
import { Typography } from "antd";

const Formulas = () => {
  const formulas = [
    {
      description: "Description 1",
      image: "formula_1.jpg",
      maxWidth: 400,
    },
    {
      description: "Description 1",
      image: "formula_2.jpg",
      maxWidth: 600,
    },
    {
      description: "Description 1",
      image: "formula_3.jpeg",
      maxWidth: 600,
    },
    {
      description: "Description 1",
      image: "formula_4.jpg",
      maxWidth: 600,
    },
  ];

  return (
    <StyledFormulas>
      <Typography.Title level={5}>Formulas</Typography.Title>
      {formulas.map((item) => {
        return (
          <StyledFormulaItem key={item.image} maxWidth={item.maxWidth}>
            <img src={`/images/${item.image}`} alt="formula" />
            <Typography.Paragraph style={{ margin: 0 }} type="secondary">
              {item.description}
            </Typography.Paragraph>
          </StyledFormulaItem>
        );
      })}
    </StyledFormulas>
  );
};

export default Formulas;
