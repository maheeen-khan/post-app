import React from 'react';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values.name, values.desc);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


const PostForm = ({addPost}) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off"     onFinish={addPost}
    onFinishFailed={onFinishFailed}>
      <Form.Item
        name="name"
        label="Your Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="What do you want to say ?"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}  htmlType="submit">Add post</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default PostForm;