"use client"
import React from 'react';
import {Input, Button} from './UI';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';

const Signup = () => {

    const { user, err, error, handleChange, handleSignUp }: Context  = useStore();
    const {username, email, password} = user;

    return (
        <>
            <form>
                <p ref={error} className={err != "" ? 'flex flex-col justify-center pl-28 py-4 m-auto bg-red-200 text-red-700 border-l-2 border-rose-600' : "hidden"}>{err}</p>
                <Input label="UserName" type="text" value={username} id='username' onChange={handleChange} />
                <Input label="Email" type="text" value={email} id='email' onChange={handleChange} />
                <Input label="Password" type="password" value={password} id='password' onChange={handleChange} />
                <Button type="submit" text="SignUp" onClick={handleSignUp}/>
            </form>
        </>
    )
}

export default Signup;