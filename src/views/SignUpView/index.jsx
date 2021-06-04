import SignUpForm from "../../modules/Auth/components/SignUpForm";
import styles from "./styles.module.css";
import React from 'react';

const SignUpView = () => (
  <div className={styles["login-container"]}>
    <SignUpForm />
  </div>
);

export default SignUpView;
