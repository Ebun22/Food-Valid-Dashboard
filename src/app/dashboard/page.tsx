"use client"
import React from 'react';
import Image from 'next/image';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';
import { useSearchParams } from 'next/navigation';


const Home = () => {

    const { user, err, error, handleChange, handleSignUp, userInfo }: Context  = useStore();
    const {name, email, id} = userInfo;

    return (
        <div className="flex flex-row w-full">
           <div className="w-1/5 bg-gray-950 h-screen flex flex-col items-center text-white">
            <h1 className="font-extrabold text-xl my-4">FoodValid</h1>
            <div className="flex flex-col items-center text-center">
                <Image
                src='/dummy-profile.png'
                width={100}
                height={100}
                alt="profile picture"
                className="rounded-full"
                />
                <p className='capitalize font-medium'>{name}</p>
                <p className='font-thin italic text-xs text-neutral-500 '><span className='font-thin italic'>{id}</span></p>
                <p className='font-extralight text-sm py-2'>Welcome Admin!</p>
            </div>
           </div>
           <div className="m-12">main bar</div>
        </div>
    )
}

export default Home;