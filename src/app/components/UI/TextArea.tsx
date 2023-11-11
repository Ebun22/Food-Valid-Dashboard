"use client"
import React, {ReactEventHandler, useState} from 'react';

interface props {
    label: string,
    value:string,
    placeHolder: string,
    id: string,
    onChange: ReactEventHandler,
}

const TextArea = ({ label, value, placeHolder, id, onChange}: props) => {
    return (
        <>
            <div className="mt-6">
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">{label}</span>
                    <textarea id={id} rows={4} value={value} onChange={onChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border 
                    border-gray-300 focus:ring-sky-500 focus:border-sky-500 " 
                    placeholder={placeHolder}></textarea>
                </label>
            </div>
        </>
    )
}

export default TextArea;