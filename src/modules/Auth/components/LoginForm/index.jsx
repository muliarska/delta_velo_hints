import styles from "./styles.module.css";
import styles_forms from "../styles/styles_forms.module.css";

import { useHistory } from 'react-router-dom';
import React from 'react';


function LoginForm() {
    let history = useHistory();

    let state =  {
        email: "",
        password: "",
        errors: {
            email: "",
            password: ""
        }
    };

    const handleChange = (ev) => {

        const {name, value} = ev.target;

        state[name] = value;
    }

    const validate = (ev) => {
        const {name, value} = ev.target;

        switch(name) {
            case 'email':
                if (!('@' in value) || value.length < 7){
                    state.errors.email = "Not valid email!";
                }
                break;
            case 'password':
                if (value < 5){
                    state.errors.password = "Password is too short!"
                }
                break;
            default:
                break;
        }

    }

    const onSubmit = (event) => {
        event.preventDefault();
    }


    const redirectMap = () => {
        history.push('/map')
    }

    const redirectSignIn = () => {
        history.push('/sign_up')
    }

    return (
        <div className={styles_forms.signUpWrapper}>
            <form className={styles_forms.signUpForm} onSubmit={event => onSubmit(event)}>

                <input id="email" type="email" placeholder="Enter your email" required="required" className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>
                {state.errors.email && <span>{state.errors.email}</span>}
                <input id="password" type="password" placeholder="Enter your password" required="required" className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>
                {state.errors.password && <span>{state.errors.password}</span>}

                {/* eslint-disable-next-line react/button-has-type */}
                <button id="" className={styles.buttonSubmit} onClick={redirectMap}>
                    {" "}Login{" "}
                </button>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.signUp} onClick={redirectSignIn}> Sign Up </a>
            </form>
       </div>
    )
}


export default LoginForm;
