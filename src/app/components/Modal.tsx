"use client"
import React, { ReactEventHandler, useState } from 'react';
import Button from './UI/Button';
import Backdrop from './UI/Backdrop'

interface props {
    children: React.ReactNode,
    onClick: ReactEventHandler,
}

const Modal = ({ children, onClick }: props) => {

    return (
        <Backdrop onClick={onClick} >
            <div className="flex flex-row w-full justify-center align-center px-80 pt-2 bg-transparent">
                <div className="flex flex-col w-full items-center justify-center items-center rounded-lg bg-white">
                    <p onClick={onClick} className='flex flex-col w-full items-end pr-6 mt-4 text-2xl font-light'>X</p>
                    {children}
                </div>
            </div>
        </Backdrop>
    )
}

export default Modal;