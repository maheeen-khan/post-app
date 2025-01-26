import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const LoginForm = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form className='mx-auto'
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <div className="d-flex gap-2 align-content-center">
          <input id="checkbox" type="checkbox" checked /> Remember me </div>
          </Form.Item>
          <span className='forgot'> Forgot password </span>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block htmlType="submit" className='mb-2 log'>
          Log in
        </Button>
        Don't have an account ? Register now!
      </Form.Item>
    </Form>
  );
};
export default LoginForm;