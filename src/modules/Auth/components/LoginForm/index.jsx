import styles from "./styles.module.css";

const LoginForm = () => (
  <div className={styles.loginWrapper}>
    <form className={styles.loginForm}>

      <input id="email" type="email" placeholder="Enter your email" required="required" className={styles.inputLogin} />

      <input id="password" type="password" placeholder="Enter your password" required="required" className={styles.inputLogin} />
      {/* eslint-disable-next-line react/button-has-type */}
      <button id="" className={styles.buttonSubmit}>
        {" "}Login{" "}
      </button>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.signUp}> Sign Up </a>
    </form>
  </div>
);

export default LoginForm;
