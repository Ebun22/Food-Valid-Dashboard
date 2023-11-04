"use client"
import React from 'react';
import Image from 'next/image'
import { Input, Button, TextArea } from './UI';
import { useStore } from '../context/stateContext';
import { User, Context } from '../context/Types';
import Link from 'next/link';


const AddMeal = () => {

    const { handleChange, handleLogin, meal }: Context = useStore();
    const { storeId, storeName, mealName, price, description, category, options, optionsPrice, imageUrls } = meal;
    // console.log(imageUrls)

    return (
        <div className='flex flex-col w-full h-full p-6 ' onClick={(event) => event.stopPropagation()}>
            <form className='flex flex-col w-full h-full'>
                <div className='flex flex-col w-full items-center'>
                    <p className='capitalize font-bold text-lg'>{storeName}</p>
                    <Image
                        src={imageUrls.length !== 0 ? imageUrls[0] : '/dummy-profile.png'}
                        width={100}
                        height={100}
                        alt="profile picture"
                        className="rounded-full w-40 h-40"
                    />
                </div>
                <Input label="Store ID" type="text" value={storeId} id='storeId' onChange={handleChange} />
                <Input label="Meal" type="text" value={mealName} id='mealName' onChange={handleChange} />
                <Input label="Category" type="text" value={category} id='category' onChange={handleChange} />
                <Input label="Price" type="number" value={price} id='price' onChange={handleChange} />

                <div className='flex flex-row space-x-4  w-full h-full'>
                    <Input label="Sides/Topping" type="text" value={options} id='options' onChange={handleChange} />
                    <Input label="Price" type="text" value={optionsPrice} id='optionsPrice' onChange={handleChange} />
                </div>

                <TextArea label="Description" placeHolder="Tell us about this meal..." value={description} id='description' onChange={handleChange} />
                <Input label="Image" type="image" value={imageUrls} id='image' onChange={handleChange} />
                <Button type="submit" text="Login" onClick={handleLogin} />
            </form>
        </div>
    )
}

export default AddMeal;