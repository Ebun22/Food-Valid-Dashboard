"use client"
import React from 'react';
import Image from 'next/image'
import { Input, Button, TextArea, Notice } from './UI';
import { useStore, optionData } from '../context/stateContext';
import { User, Context } from '../context/Types';
import { TiDelete } from 'react-icons/ti';
import Link from 'next/link';


const AddMeal = () => {

    const { handleAddMeal, meal, setMeal, store, options, setOptions }: Context = useStore();
    const { storeId, mealName, price, description, category, imageUrls } = meal;
    const { id, name, images } = store;
 
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setMeal((prev: any) => {

            return {
                ...prev,
                [e.target.id]: e.target.value || e.target.files
            }
        })
    };

    const handleAddSide = () => {
        setOptions([...options, optionData])
    }

    const handleRemoveSide = (index: number) => {
        const list = [...options]
        list.splice(index, 1)
        setOptions(list)
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {id, value} = e.target;
        const list = [...options]
        list[index]  = {
            ...list[index],
            [id]: value
        };
        setOptions(list)
    }

    return (
        <div className='flex flex-col w-full h-full p-6 ' onClick={(event) => event.stopPropagation()}>
            <form className='flex flex-col w-full h-full'>
                <div className='flex flex-col w-full items-center'>
                    <p className='capitalize font-bold text-xl mb-2'>{name}</p>
                    <Image
                        src={images.length !== 0 ? images[0] : '/dummy-profile.png'}
                        width={100}
                        height={100}
                        alt="profile picture"
                        className="rounded-full w-40 h-40"
                    />
                </div>
                <Input label="Store ID" type="text" value={id} id='storeId' onChange={handleChange} />
                <Input label="Meal" type="text" value={mealName} id='mealName' onChange={handleChange} />
                <Input label="Category" type="text" value={category} id='category' onChange={handleChange} />
                <Notice color='slate' text='Seperate categories by comma' />
                <Input label="Price" type="number" value={price} id='price' onChange={handleChange} />

                {options.map((item: Object, index: number) => (
                    <div key={index} className='flex flex-col left'>
                        <div className='flex flex-row space-x-4  w-full'>
                            <Input label="Sides/Topping" type="text" value={options[index]?.option} id='option' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOptionChange(e, index as number)} />
                            <Input label="Price" type="text" value={options[index]?.optionPrice} id='optionPrice' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOptionChange(e, index as number)} />
                            {options.length > 1 &&
                                <p className="mt-14 pt-1 h-1/3 text-xl" onClick={() => handleRemoveSide(index)}>
                                    <TiDelete className="text-red-400" />
                                </p>
                            }
                        </div>
                        {options.length - 1 === index &&
                            <Button type="button" text="Add Sides" onClick={handleAddSide} />
                        }

                    </div>
                ))}
                <Notice color='slate' text='Leave blank if this meal has no sides' />

                <TextArea label="Description" placeHolder="Tell us about this meal..." value={description} id='description' onChange={handleChange} />
                <Input label="Image" type="file" value={imageUrls} id='imageUrls' name="fileName" onChange={handleChange} />
                <Button type="button" text="Add meal" onClick={handleAddMeal} />
            </form>
        </div>
    )
}

export default AddMeal;