import styles_forms from "../styles/styles_forms.module.css";
import {useHistory} from "react-router-dom";
import React from 'react';
import {userData} from "../data/data";

function SignUpForm() {
    let history = useHistory();
    const fs = require('fs');

    let state =  {
        name: "",
        email: "",
        password: "",
        errors: {
            name: "empty name",
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
            case('name'):
                if (value.length < 2){
                    state.errors.name = "Name is too short!";
                }
                else {
                    state.errors.name = "valid";
                }
                break;
            case 'email':
                if ((value.split("@").length !== 2) || value.length < 7){
                    state.errors.email = "Not valid email!";
                }
                else {
                    state.errors.email = "valid"
                }
                break;
            case 'password':
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

    const writeData = () => {
        // write information to data.js to be signed up !
        userData["users"].push(state);
    }

    const redirectMap = () => {
        if(state.errors.email === "valid" &&
            state.errors.password === "valid" &&
            state.errors.name === "valid"
        ) {
            writeData();
            history.push('/map');
        }
        else {
            if (state.errors.name !== "valid")
                alert(state.errors.name);
            if (state.errors.email !== "valid")
                alert(state.errors.email);
            if (state.errors.password !== "valid")
                alert(state.errors.password);
        }
    }

    return (
        <div className={styles_forms.signUpWrapper}>
            <form className={styles_forms.signUpForm} onSubmit={event => onSubmit(event)}>

                <input id="name" type="name" name={"name"} required placeholder="Enter your name"  className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>

                <input id="email" type="email" name={"email"} required placeholder="Enter your email"  className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>

                <input id="password" type="password" name={"password"} required placeholder="Enter your password"  className={styles_forms.inputSignUp}
                       onChange={e => handleChange(e)} onBlur={e => validate(e)}/>

                {/* eslint-disable-next-line react/button-has-type */}
                <button id="button" className={styles_forms.buttonSignUp} onClick={redirectMap}>
                    Create account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;
