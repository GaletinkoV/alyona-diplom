import React, { memo } from "react";
import useSWR from "swr";
import { Form, Radio, Space, Spin, Typography } from "antd";

import { requestGetAnketa } from "../../../api/fetchers";

import {
  StyledLoadingContainer,
  StyledQuestionContainer,
  StyledQuestionItem,
} from "../AnketaPage.styled";

const Questions = () => {
  const { data = [], isLoading } = useSWR("/anketa", requestGetAnketa);

  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <Spin size="large" />
      </StyledLoadingContainer>
    );
  }

  return (
    <StyledQuestionContainer>
      {data.map((item) => {
        return (
          <StyledQuestionItem key={item.id}>
            <Typography.Paragraph>{item.question}</Typography.Paragraph>
            <Form.Item
              name={["questions", `${item.id}`]}
              rules={[
                { required: true, message: "Please, answer the question" },
              ]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  {item.Answers.map((answer) => {
                    return (
                      <Radio value={answer.id} key={answer.id}>
                        {answer.answer}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </Form.Item>
          </StyledQuestionItem>
        );
      })}
    </StyledQuestionContainer>
  );
};

export default memo(Questions);
