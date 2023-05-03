import React, { useState } from "react";
import { Button, Divider, Form, notification } from "antd";

import ProjectForm from "./components/ProjectForm";
import Questions from "./components/Questions";
import { StyledActionsRow } from "./AnketaPage.styled";
import { requestPostProject } from "../../api/fetchers";

interface IFormValues {
  packages: string;
  ecosystem: string;
  questions: {
    [key: number]: number;
  };
}

const AnketaPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const onSubmit = (values: IFormValues) => {
    setLoading(true);

    return requestPostProject({
      name: Date.now().toString(),
      userId: 2,
      packages: values.packages.split(",").map((item) => ({ name: item })),
      ecosystem: values.ecosystem,
      questuinnaire: Object.entries(values.questions).map(([key, value]) => ({
        questionId: Number(key),
        answerId: value,
      })),
    })
      .then(() => {
        form.resetFields();
      })
      .catch(() => {
        api.error({
          message: "Error",
          description: "Something went wrong",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form layout="vertical" form={form} scrollToFirstError onFinish={onSubmit}>
      {contextHolder}
      <ProjectForm />
      <Questions />
      <Divider />
      <StyledActionsRow>
        <Button htmlType="submit" type="primary" loading={loading}>
          Submit Form
        </Button>
        <Button onClick={handleReset}>Reset Fields</Button>
      </StyledActionsRow>
    </Form>
  );
};

export default AnketaPage;
