import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from 'react-router-dom';
const RegisterForm = ({register}) => {

    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    return (
        <Form className='mx-auto'
            name="login"
            initialValues={{
                remember: true,
            }}
            style={{
                maxWidth: 360,
            }}
            onFinish={register}
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined />} placeholder="Email" />
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
                            <input id="checkbox" type="checkbox" /> Remember me </div>
                    </Form.Item>
                    <span className='forgot'> Forgot password </span>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block htmlType="submit" className='mb-2 log'>
                   Register
                </Button>
                Don't have an account ? <Link to={'/'}> Register now! </Link>
            </Form.Item>
        </Form>
    );
};
export default RegisterForm;