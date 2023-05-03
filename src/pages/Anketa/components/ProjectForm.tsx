import React, { memo } from "react";
import { Divider, Form, Input, Typography } from "antd";

const ProjectForm = () => {
  return (
    <>
      <Typography.Title level={4}>Project Details Form</Typography.Title>
      <Form.Item
        label="Project packages"
        name="packages"
        rules={[{ required: true, message: "Projects packages are required" }]}
      >
        <Input placeholder="Enter project packages using ',' separator" />
      </Form.Item>
      <Form.Item
        label="Ecosystem"
        name="ecosystem"
        rules={[{ required: true, message: "Ecosystem is required" }]}
      >
        <Input placeholder="Enter ecosystem" />
      </Form.Item>
      <Divider />
    </>
  );
};

export default memo(ProjectForm);
