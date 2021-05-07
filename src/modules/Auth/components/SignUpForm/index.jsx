import styles from "./styles.module.css";

const SignUpForm = () => (
  <div className={styles.signUpWrapper}>
    <form className={styles.signUpForm}>

      <input id="name" type="name" placeholder="Enter your name" required="required" className={styles.inputSignUp} />

      <input id="email" type="email" placeholder="Enter your email" required="required" className={styles.inputSignUp} />
  
      <input id="password" type="password" placeholder="Enter your password" required="required" className={styles.inputSignUp} />
      {/* eslint-disable-next-line react/button-has-type */}
      <button id="button" className={styles.buttonSignUp}>
        Create account
      </button>
    </form>
  </div>
);

export default SignUpForm;
