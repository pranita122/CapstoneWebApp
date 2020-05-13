import React from "react";
import s from "./Register.module.css";
import RegisterForm from "./RegisterForm";
import { Form, Typography } from "antd";
import { useHistory } from 'react-router-dom'

const RegisterView = () => {
  const history = useHistory();
  return (
    <div className={s.registerRoot}>
      <div className={s.registerForm}>
        <Typography.Text className={s.registerFormTitle}>
          Sign Up
        </Typography.Text>
        <RegisterForm
          history={history}
        />
      </div>
      <div className={s.registerFooter}>
        <Typography.Text className={s.registerFooterText}>
          Already have an account?
        </Typography.Text>
        <button className={s.registerFooterBtnSignup} onClick={() => history.push("/login")}>
          Log In
        </button>
      </div>
    </div>
  )
}

export default RegisterView;