"use client"
import React, {ReactEventHandler, useState} from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface props {
    text: string,
    color: string,
}

const Notice = ({ color, text }: props) => {
    return (
        <>
           <p className={`text-xs text-${color}-400 flex flex-row mt-1.5`}><AiOutlineInfoCircle  className='mt-0.5 pl-1'/>{text}</p>
        </>
    )
}

export default Notice;