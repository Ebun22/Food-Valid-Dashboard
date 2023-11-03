"use client"
import React from 'react';
import Image from 'next/image'
import { Input, Button } from './UI';
import { useStore } from '../context/stateContext';
import { User, Context } from '../context/Types';
import Link from 'next/link';


const AddMeal = () => {

    const { user, handleChange, handleLogin, isAdmin, userInfo }: Context = useStore();
    const { email, password } = user;
    const newInfo = userInfo
    console.log(newInfo)
    console.log(isAdmin)
    return (
        <>
            <form className='flex flex-col w-full h-full'>
                <div>
                    <p>storeName</p>
                    <Image
                        src='/dummy-profile.png'
                        width={100}
                        height={100}
                        alt="profile picture"
                        className="rounded-full"
                    />
                </div>
                <Input label="Store ID" type="text" value={storeId} id='storeId' onChange={handleChange} />
                <Input label="Meal" type="text" value={meal} id='meal' onChange={handleChange} />
                <Input label="Price" type="text" value={price} id='price' onChange={handleChange} />
                <div>
                <Input label="Sides/Topping" type="text" value={options} id='options' onChange={handleChange} />
                <Input label="Price" type="text" value={price} id='price' onChange={handleChange} />
                </div>
                <Input label="Image" type="image" value={image} id='image' onChange={handleChange} />
                <p className="text-sky-600 text-sm pt-1">Forgot password?</p>
                <Button type="submit" text="Login" onClick={handleLogin} />
            </form>
        </>
    )
}

export default AddMeal;