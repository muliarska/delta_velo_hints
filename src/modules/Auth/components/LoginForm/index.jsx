import styles from "./styles.module.css";
import styles_forms from "../styles/styles_forms.module.css";

import { useHistory } from 'react-router-dom';
import React from 'react';
import {userData} from "../data/data";



function LoginForm() {
    let history = useHistory();

    let state =  {
        email: "",
        password: "",
        errors: {
            email: "empty email",
            password: "empty password"
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
                let isRegistered = false;
                for (let i = 0; i < userData["users"].length; i++) {
                    if (value === userData["users"][i]["email"]) {
                        isRegistered = true;
                    }
                }
                if (!isRegistered) {
                    state.errors.email = "User is not registered!";
                }
                else if ((value.split("@").length !== 2) || value.length < 7){
                    state.errors.email = "Not valid email!";
                }
                else {
                    state.errors.email = "valid"
                }
                break;
            case 'password':
                let validPassword = false;
                for (let i = 0; i < userData["users"].length; i++) {
                    if (value === userData["users"][i]["password"]) {
                        validPassword = true;
                    }
                }
                if (!validPassword) {
                    state.errors.email = "User is not registered!";
                }
                if (value.length < 5){
                    state.errors.password = "Password is too short!"
                }
                else {
                    state.errors.password = "valid";
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
        if(state.errors.email === "valid" &&
            state.errors.password ==="valid" ) {
            history.push('/map');
        }
        else {
            if (state.errors.email !== "valid")
                alert(state.errors.email);
            if (state.errors.password !== "valid")
                alert(state.errors.password);
        }
    }

    const redirectSignIn = () => {
        history.push('/sign_up')
    }

    return (
         <div className={styles_forms.signUpWrapper}>
            <form className={styles_forms.signUpForm} onSubmit={event => onSubmit(event)}>

                <input id="email" type="email" name={"email"} required placeholder="Enter your email" className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>
                <input id="password" type="password" name={"password"} required placeholder="Enter your password" className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>

                {/* eslint-disable-next-line react/button-has-type */}
                <button id="button" className={styles_forms.buttonSignUp} onClick={redirectMap}>
                    {" "}Login{" "}
                </button>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.signUp} onClick={redirectSignIn}> Sign Up </a>
            </form>
       </div>
    )
}


export default LoginForm;
