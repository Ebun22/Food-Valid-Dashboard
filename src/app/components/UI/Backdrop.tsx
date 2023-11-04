"use client"
import React, { ReactComponentElement, ReactEventHandler, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

interface props {
    children: React.ReactNode,
    onClick: ReactEventHandler,
}

const Backdrop = ({ children, onClick }: props) => {
    const modalElement = document.getElementById('modal');
    return (
        <>
            {
            modalElement && ReactDOM.createPortal(
                <div className="flex flex-col w-full py-12 absolute z-10 top-0 left-0 right-0 bg-opacity-50 bg-black justify-center align-center" onClick={onClick}>
                    {children}
                </div>,
                modalElement
            ) 
        }
        </>

    )
}

export default Backdrop;