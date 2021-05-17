import styles from "./styles.module.css";
import styles_forms from "../styles/styles_forms.module.css";
import {useHistory} from "react-router-dom";

function SignUpForm() {
    let history = useHistory();

    const redirectMap = () => {
        history.push('/map')
    }

    return (
        <div className={styles_forms.signUpWrapper}>
            <form className={styles_forms.signUpForm}>

                <input id="name" type="name" placeholder="Enter your name" required="required" className={styles_forms.inputSignUp} />

                <input id="email" type="email" placeholder="Enter your email" required="required" className={styles_forms.inputSignUp} />

                <input id="password" type="password" placeholder="Enter your password" required="required" className={styles_forms.inputSignUp} />
                {/* eslint-disable-next-line react/button-has-type */}
                <button id="button" className={styles.buttonSignUp} onClick={redirectMap}>
                    Create account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;
