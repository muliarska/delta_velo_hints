import LoginForm from "../../modules/Auth/components/LoginForm";
import styles from "./styles.module.css";
import React from 'react';

const LoginView = () => (
  <div className={styles["login-container"]}>
    <LoginForm />
  </div>
);

export default LoginView;
