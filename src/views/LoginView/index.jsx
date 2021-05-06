import LoginForm from "../../modules/Auth/components/LoginForm";
import Logo from "../../modules/Auth/components/Logo";
import styles from "./styles.module.css";

const LoginView = () => (
  <div className={styles["login-container"]}>
    <Logo />
    <LoginForm />
  </div>
);

export default LoginView;
