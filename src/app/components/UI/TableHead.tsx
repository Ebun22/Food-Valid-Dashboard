"use client"
import React, { ReactEventHandler, useState } from 'react';

interface props {
    head: Array<string>,
    children: React.ReactNode,
}

const TableHead = ({ head, children }: props) => {
    return (
        <>
            <div className="mt-6">
                <table className="table-auto">
                    <thead>
                        <tr>
                            {
                                head.map((head: string, index: number) => (
                                    <>
                                        <td key={index}>{head}</td>                               
                                    </>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableHead;