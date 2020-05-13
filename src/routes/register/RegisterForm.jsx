import { Input, Form, Typography } from "antd";
import s from "./Register.module.css";
import React from "react";

const RegisterForm = (props) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.history.push("/home")
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item name="firstName" rules={[{ required: true }]}>
        <Input
          placeholder="First Name"
          className={s.registerInput} />
      </Form.Item>
      <Form.Item name="lastName" rules={[{ required: true }]}>
        <Input
          placeholder="Last Name"
          className={s.registerInput} />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true }]}>
        <Input
          type="email"
          placeholder="Email address"
          className={s.registerInput} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input
          type="password"
          placeholder="Password"
          className={s.registerInput} />
      </Form.Item>
      <button className={s.registerButton}>
        Sign Up
      </button>
    </Form>
  );
}

export default RegisterForm;
