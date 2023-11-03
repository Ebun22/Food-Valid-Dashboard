"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';
import { RxDashboard } from 'react-icons/rx';
import { TbToolsKitchen, TbUserPentagon } from 'react-icons/tb';
import { BsBarChartLine } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { PiCallBell } from 'react-icons/pi';
import { Dropdown } from '../components/UI';


const Navbar = () => {

    const { userInfo }: Context = useStore();
    const { name, id } = userInfo;

    return (
        <>
            <div className="w-1/5 h-screen bg-gray-950 flex flex-col items-center text-white">
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
                <div className="flex flex-col my-6">
                    <div className="flex flex-row">
                        <span className="mr-4 mt-2.5 text-gray-500"><RxDashboard /></span>
                        <p className='font-medium py-2 text-gray-500 py-2'>
                            <Link href='/dashboard'>Dashboard</Link>
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <span className="mr-4 mt-4 h-1 text-gray-500"><PiCallBell /></span>
                            <Dropdown
                                trigger='Order'
                                menu={['Order ID', 'Order list']}
                            />
                    </div>
                    <div className="flex flex-row mb-1">
                        <span className="mr-4 mt-3 text-gray-500"><TbToolsKitchen /></span>
                        <p className='font-medium py-2 text-gray-500 py-2'>
                            <Link href='/dashboard/restaurants'>
                                Restaurants
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-row my-1.5">
                        <span className="mr-4 mt-3 text-gray-500"><TbUserPentagon /></span>
                        <p className='font-medium py-2 text-gray-500 py-2'>Customers</p>
                    </div>
                    <div className="flex flex-row my-1">
                        <span className="mr-4 mt-2.5 text-gray-500"><BsBarChartLine /></span>
                        <p className='font-medium py-2 text-gray-500 py-2'>Analytics</p>
                    </div>
                    <div className="flex flex-row my-1">
                        <span className="mr-4 mt-3 text-gray-500"><AiOutlineSetting /></span>
                        <p className='font-medium py-2 text-gray-500 py-2'>Settings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;