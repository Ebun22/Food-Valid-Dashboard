"use client"
import React, { ReactEventHandler, useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';


interface props {
    icon: React.ReactNode,
    link: string,
    margin: string
}

const NavLink = ({ icon, link, margin }: props) => {


    const isActive = () => {
        // if (window.location.pathname === `/${link.toLowerCase()}`) 
        return false
    };
// console.log(`/${link.toLowerCase()}`)
    return (
        <>
            <div className={`flex flex-row text-neutral-500 rounded-e-full ${isActive() ? ' bg-white pl-2 rounded-s-full rounded-e-none text-black': ""}`}>
                <span className={`mr-4 mt-${margin} `}>{icon}</span>
                {link === "Order" ?
                    (
                        <Dropdown
                            trigger={link}
                            menu={['Order ID', 'Order list']}
                        />
                    )
                    : (
                        <p className='font-medium py- py-2'>
                            <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                        </p >
                    )}
            </div >
        </>
    )
}

export default NavLink;