"use client"
import React from 'react';
import Image from 'next/image';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';
import { RxDashboard } from 'react-icons/rx';
import { TbToolsKitchen, TbUserPentagon } from 'react-icons/tb';
import { BsBarChartLine } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { PiCallBell } from 'react-icons/pi';
import { Dropdown, NavLink } from '../components/UI';


const Navbar = () => {

    const { userInfo }: Context = useStore();
    const { name, id } = userInfo;

    return (
        <>
            <div className="w-1/5 bg-gray-950 flex flex-col text-white">
                <div className="flex flex-col w-full items-center">
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
                <div className="flex flex-col my-6 ml-8">
                    <NavLink icon={<RxDashboard />} link='Dashboard' margin='3' />
                    <NavLink icon={<PiCallBell />} link='Order' margin='4' />
                    <NavLink icon={<TbToolsKitchen />} link='Restaurants' margin='3' />
                    <NavLink icon={<TbUserPentagon />} link='Customers' margin='3' />
                    <NavLink icon={<BsBarChartLine />} link='Analytics' margin='2.5' />
                    <NavLink icon={<AiOutlineSetting />} link='Settings' margin='3' />
                </div>
            </div>
        </>
    )
}

export default Navbar;