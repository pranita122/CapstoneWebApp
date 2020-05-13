import React from "react";
import s from "./Login.module.css";
import LoginForm from "./LoginForm";
import { Form, Typography } from "antd";
import { useHistory } from 'react-router-dom'

const LoginView = () => {
  const history = useHistory();
  return (
    <div className={s.loginRoot}>
      <div className={s.loginForm}>
        <Typography.Text className={s.loginFormTitle}>
          Log In
        </Typography.Text>
        <LoginForm
          history={history}
        />
      </div>
      <div className={s.loginFooter}>
        <Typography.Text className={s.loginFooterText}>
          Don't have an account yet?
        </Typography.Text>
        <button className={s.loginFooterBtnSignup} onClick={() => history.push("/register")}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default LoginView;