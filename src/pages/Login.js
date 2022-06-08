// import LoginForm from "./components/LoginForm";
import React, { useState } from "react";
import Axios from 'axios'

function Login() {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const create = () => {
        Axios.post('http://localhost3000/create', {username: usernameReg, password: passwordReg})
        .then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="App">
            <div className="createAccount">
                <h1>Create Account</h1>
                <label>Username</label>
                <input
                type="text"
                onChange={(e) =>{
                    setUsernameReg(e.target.value);
                }}
                />
                <label>Password</label>
                <input type="text" onChange={(e) =>{
                    setPasswordReg(e.target.value);
                }}
                />
                <button onClick={create}>Create!</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..."/>
                <input type="password" placeholeder="Password..."/>
                <button>Login!</button>
            </div>
        </div>
    );


    // const devUser = {
    //     email: "test@test.com",
    //     password: "test123"
    // }

    // const [user, setUser] = useState({ name: "", email: "" });
    // const [error, setError] = useState("");

    // const Login = details => {
    //     console.log(details);
    // }

    // const Logout = () => {
    //     console.log("logout");
    // }
    // return (
    //     <div className="App">


    //     </div>
    // );
};

export default Login;