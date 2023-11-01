"use client"
import React, { ReactEventHandler, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

type Open = boolean;

interface props {
    trigger: string,
    menu: Array<string>
}

const Dropdown = ({ trigger, menu }: props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className="my-2 mt-1.5 font-medium py-2 text-gray-500">
                <div onClick={handleOpen} className='flex flex-row w-full'>
                <button className="" >{trigger}</button><span className='mt-1.5 ml-4 '><GoChevronDown /></span>
                </div>
                <ul className={open ? "h-full opacity-100 ease-in-out duration-75" : "h-0 opacity-0 ease-in-out duration-75"}>
                    {menu.map((menuItem, index) => (
                        <li className='font-extralight text-sm py-2' key={index}>{menuItem}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Dropdown;