import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Signup = () => {

    const navigate = useNavigate();

    const [formFields, setformFields] = useState({
        userEmail: '',
        userPassword: ''
    })

    const hadleFormField = (event) => {
        let key = event.target.name;
        let val = event.target.value;

        setformFields({ ...formFields, [key]: val })
        console.log(formFields)

    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/rac/user/login', formFields);


            if (response.data && response.data.success) {

                console.log('User Logged in successfully:', response.data.token);
                navigate("/admin/dashboard");
            } else {

                console.log('Log in failed:', response.data.message);
            }
        } catch (error) {

            console.log('Error:', error.response.data.message);
        }
    };

    return (
        <>
            <section className="h-full lg:mt-20 md:mt-10">
                <div className="h-full">
                    {/* Left column container with background */}
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Right column container */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>
                                {/* Sign in section */}
                                {/* Separator between social media sign in and email/password sign in */}
                                <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <h1 className="" style={{ fontSize: "2rem", fontWeight: "700" }}>
                                        Login
                                    </h1>
                                </div>

                                <div className="">
                                    {/* Email input */}
                                    <input
                                        type="email"
                                        name="userEmail"
                                        size="lg"
                                        placeholder="Email"
                                        className="mb-6 border p-1 w-full rounded"
                                        onChange={hadleFormField}
                                    />

                                    {/* Password input */}
                                    <input
                                        type="password"
                                        name="userPassword"
                                        className="mb-6 border p-1 w-full rounded"
                                        size="lg"
                                        placeholder="Passowrd"
                                        onChange={hadleFormField}
                                    />
                                </div>

                                {/* Login button */}
                                <div className="text-center lg:text-left flex items-center flex-col">
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        onClick={handleLogin}
                                        style={{ backgroundColor: 'blue' }}
                                    >
                                        Login
                                    </button>

                                    {/* Register link */}
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Don't have an account?{" "}
                                        <Link to="/signup" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700" style={{ color: 'blue' }}>
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;