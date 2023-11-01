"use client"
import React from 'react';
import Input from './UI/Input';
import { useStore } from '../context/stateContext';
import { User, Context } from '../context/Types';
import { Signup, Login } from './';

const Auth = () => {

    const { login, setLogin, user }: Context = useStore();
    const { userName, email, password } = user;

    return (
        <>
            {
                login ?
                    (
                        <div className="w-full flex flex-col justify-center">
                            <div>
                            <Login />
                            </div>

                            <p className="w-full flex justify-center mt-2 text-sm">Don't have an account with us? <span className="text-blue-600" onClick={() => setLogin(false)}>create account</span></p>
                        </div>
                    )
                    :
                    (
                        <div className="w-full flex flex-col justify-center">
                            <Signup />
                            <p className="w-full flex justify-center mt-2 text-sm">Have an account with us already? <span className="text-blue-600" onClick={() => setLogin(true)}>Login</span></p>
                        </div>
                    )

            }

        </>
    )
}

export default Auth;