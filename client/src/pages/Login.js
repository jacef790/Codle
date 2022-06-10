// import LoginForm from "./components/LoginForm";
import React, { useState } from "react";


function Login() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    // const create = () => {
    //     // Axios.post('http://localhost3000/create', { username: usernameReg, password: passwordReg })
    //     //     .then((response) => {
    //     //         console.log(response);
    //     //     });
    // };

    // const login = () => {

    // };

    return (
        <div className="bg-gradient-to-tl from-black to-gray-500 h-screen w-screen text-white">
            <div className="createAccount ">
                <h1 className="h-[50px] w-screen text-transparent bg-clip-text bg-gradient-to-br from-[#ff8300] to-[#00d8ff] border-b-4 border-b-indigo-500 flex justify-center items-center text-4xl font-extrabold">Create Account</h1>

                <div className='m-4'>
                    <div className='mb-4'>
                        <label className='m-8'>Username</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className='m-8'>Password</label>
                        <input type="text" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                        />
                    </div>
                </div>

                {/* <button className='mb-4 rounded bg-gray-600 font-bold text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1' onClick={create}>Create!</button> */}

            </div>

            <div className="login">
                <div>
                    <input className='m-4' type="text" placeholder="Username..." onChange={(e) => {
                        setUsernameLogin(e.target.value);
                    }}
                    />
                </div>
                <div>
                    <input className='m-4' type="password" placeholder="Password..." onChange={(e) => {
                        setPasswordLogin(e.target.value);
                    }}
                    />
                </div>
                {/* <button className='mb-4 rounded bg-gray-600 font-bold text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1' onClick={login}>Login!</button> */}
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