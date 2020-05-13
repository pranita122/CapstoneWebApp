import { Input, Form, Typography } from "antd";
import s from "./Login.module.css";
import React from "react";

const LoginForm = (props) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.history.push("/home")
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true }]}>
        <Input
          type="email"
          placeholder="Email address"
          className={s.loginInput} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input
          type="password"
          placeholder="Password"
          className={s.loginInput} />
      </Form.Item>
      <button className={s.loginButton} htmlType="submit">
        Log In
      </button>
    </Form>
  );
}

export default LoginForm;
