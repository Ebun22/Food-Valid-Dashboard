"use client"
import React, { ReactEventHandler, useState } from 'react';
import Button from './UI/Button';
import Backdrop from './UI/Backdrop'

interface props {
    children: React.ReactNode,
    onClick: ReactEventHandler,
}

const Modal = ({children, onClick }: props) => {

    return (
        <Backdrop onClick={onClick} >
            <div className="flex flex-row w-full justify-center align-center px-80 pt-2 bg-transparent">
                <div className="flex flex-col w-full items-center justify-center items-center rounded-lg bg-white">
                    {children}
                    <Button type='button' text="close modal" onClick={onClick} />
                </div>
            </div>
        </Backdrop>
    )
}

export default Modal;