"use client"
import React from 'react';
import { Input, Button } from './UI';
import { useStore } from '../context/stateContext';
import { User, Context } from '../context/Types';
import Link from 'next/link';


const Login = () => {

    const { user, handleChange, handleLogin, isAdmin, userInfo }: Context = useStore();
    const { email, password } = user;
    const newInfo = userInfo
    console.log(newInfo)
    console.log(isAdmin)
    return (
        <>
            <form className='flex flex-col '>
                <Input label="Email" type="text" value={email} id='email' onChange={handleChange} />
                <Input label="Password" type="password" value={password} id='password' onChange={handleChange} />
                <p className="text-sky-600 text-sm pt-1">Forgot password?</p>
                <Button type="submit" text="Login" onClick={handleLogin} />
            </form>
        </>
    )
}

export default Login;