import styles from "./styles.module.css";

const SignUpForm = () => (
  <div className={styles.signUpWrapper}>
    <form className={styles.signUpForm}>
      <label className={styles.labelSignUp} htmlFor="name">
        Name:
      </label>
      <input id="name" type="name" className={styles.inputSignUp} />
      <label className={styles.labelSignUp} htmlFor="email">
        Email:
      </label>
      <input id="email" type="email" className={styles.inputSignUp} />

      <label className={styles.labelSignUp} htmlFor="password">
        Password:
      </label>
      <input id="password" type="password" className={styles.inputSignUp} />
      {/* eslint-disable-next-line react/button-has-type */}
      <button id="button" className={styles.buttonSignUp}>
        Create account
      </button>
    </form>
  </div>
);

export default SignUpForm;
