import SignUpForm from "../../modules/Auth/components/SignUpForm";
import Logo from "../../modules/Auth/components/Logo";
import styles from "./styles.module.css";
import React from 'react';

const SignUpView = () => (
  <div className={styles["login-container"]}>
    {/* <Logo /> */}
    <SignUpForm />
  </div>
);

export default SignUpView;
