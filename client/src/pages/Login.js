import LoginForm from "../components/LoginForm";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { gql, useMutation, useQuery } from '@apollo/client';
import { ADD_ACCOUNT } from "../utils/mutations";
import { QUERY_LOGIN } from "../utils/queries";


export function Login() {


    let navigate = useNavigate();

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    function handleCreateUserChange(event) {
        setUsernameReg(event.target.value)
    }

    function handleCreatePassChange(event) {
        setPasswordReg(event.target.value)
    }

    // function handleLogUserChange(event) {
    //     setUsernameLogin(event.target.value)
    // }

    // function handleLogPassChange(event) {
    //     setPasswordLogin(event.target.value)
    // }

    const [renderLink, setRenderLink] = useState(false)

    const [addAccount, { error, data }] = useMutation(ADD_ACCOUNT);

    // debugger;
    const { data: data2 } = useQuery(QUERY_LOGIN, {
        variables: {
            username: usernameLogin,
            password: passwordLogin
        },
        skip: !usernameLogin,
        fetchPolicy: "no-cache"
    });

    useEffect(() => {

        if (data2?.QueryLogin?.username) {
            localStorage.setItem("CodleUsername", JSON.stringify(usernameLogin));
            localStorage.setItem("CodlePassword", JSON.stringify(passwordLogin));
            localStorage.setItem("Codleid", JSON.stringify(data2.QueryLogin._id));
            navigate('/play');
        }
    }, [data2])



    const Create = async () => {


        try {
            const { data } = await addAccount({
                variables: {
                    username: usernameReg,
                    password: passwordReg
                }
            })

            console.log(data);

            localStorage.setItem("CodleUsername", JSON.stringify(usernameReg));
            localStorage.setItem("CodlePassword", JSON.stringify(passwordReg));
            localStorage.setItem("Codleid", JSON.stringify(data.addAccount._id));
        } catch (e) {
            console.error(e);
            return;
        }

        console.log("account added")

        //     // Axios.post('http://localhost3000/create', { username: usernameReg, password: passwordReg })
        //     //     .then((response) => {
        //     //         console.log(response);
        //     //     });

        navigate('/play');

    };

    const userNameInputRef = useRef()
    const passwordInputRef = useRef()


    const login = async () => {
        setUsernameLogin(userNameInputRef.current.value);
        setPasswordLogin(passwordInputRef.current.value);



        // try {
        //     const { data2 } = await QueryLogin({
        //         variables: {
        //             username: usernameLogin,
        //             password: passwordLogin
        //         }
        //     });
        // } catch (e) {
        //     console.error(e);
        //     return;
        // }


        //TODO: compare password
        //TODO: store account username in variable

        // navigate(`/play`);

    };

    return (
        <div className="bg-gradient-to-tl from-black to-gray-500 h-screen w-screen text-white">
            <div className="createAccount ">
                <h1 className="h-[50px] w-screen text-transparent bg-clip-text bg-gradient-to-br from-[#ff8300] to-[#00d8ff] border-b-4 border-b-indigo-500 flex justify-center items-center text-4xl font-extrabold">Create Account</h1>

                <div className='m-4'>
                    <div className='mb-4'>
                        <label className='m-8'>Username</label>
                        <input
                            className='text-black'
                            type="text"
                            onChange={handleCreateUserChange}
                            value={usernameReg}
                        />
                    </div>
                    <div>
                        <label className='m-8'>Password</label>
                        <input type="text"
                            className='text-black'
                            value={passwordReg} onChange={handleCreatePassChange}
                        />
                    </div>
                </div>

                <button className='mb-4 rounded bg-gray-600 font-bold text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1' onClick={Create}>Create!</button>

            </div>

            <div className="login">
                <div>
                    <input
                        ref={userNameInputRef}
                        className='m-4 text-black' type="text" placeholder="Username..."
                    // value={usernameLogin}
                    // onChange={handleLogUserChange}
                    />
                </div>
                <div>
                    <input className='m-4 text-black' type="password" placeholder="Password..."
                        ref={passwordInputRef}
                    // value={passwordLogin}
                    // onChange={handleLogPassChange}
                    />
                </div>
                <button className='mb-4 rounded bg-gray-600 font-bold text-md md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1' onClick={login}>Login!</button>
            </div>

            {renderLink ? (
                <div>
                    <Link to="/play">Play Game!</Link>
                </div>
            ) : (
                <div></div>
            )}

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
