"use client"
import React from 'react';
import { TbToolsKitchen, TbUserPentagon } from 'react-icons/tb';
import { useStore } from '../../context/stateContext';
import { Context } from '../../context/Types';
import { AddMeal, Navbar } from '../../components';

interface props {
    icon:  React.ReactNode,
    number: number,
    title: string
}
const NumBox = ({icon, number, title}: props) => {

    return (
        <div className="flex flex-row ">
            <div className="flex flex-row bg-white h-12 rounded-full py-4 px-4 mr-4">
              {icon}
            </div>
            <div>
                <p className="font-bold text-xl text-center">
                   {number}
                </p>
                <p className="text-slate-600 text-sm">{title}</p>
            </div>
        </div>

    )
}

export default NumBox;