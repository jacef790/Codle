import loginForm from "../components/loginForm";
import React, { useState } from "react";

function Login() {
    const devUser = {
        email: "test@test.com",
        password: "test123"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("logout");
    }
    return (
        <div className="App">


        </div>
    );
}

export default Login;