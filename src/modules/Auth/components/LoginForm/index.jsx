import styles from "./styles.module.css";

const LoginForm = () => (
  <div className={styles.loginWrapper}>
    <form className={styles.loginForm}>
      <label className={styles.labelLogin} htmlFor="email">
        Email:
      </label>
      <input id="email" type="email" className={styles.inputLogin} />

      <label className={styles.labelLogin} htmlFor="password">
        Password:
      </label>
      <input id="password" type="password" className={styles.inputLogin} />
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
