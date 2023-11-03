"use client"
import React, {ReactEventHandler, useState} from 'react';

interface props {
    label: string,
    value:string,
    placeHolder: string,
    id: string,
    onChange: ReactEventHandler,
}

const Input = ({ label, value, placeHolder, id, onChange}: props) => {
    return (
        <>
            <div className="mt-6">
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">{label}</span>
                    <textarea id={id} rows={4} value={value} onChange={onChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder={placeHolder}></textarea>
                </label>
            </div>
        </>
    )
}

export default Input;