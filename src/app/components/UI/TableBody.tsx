"use client"
import React, { ReactEventHandler, useState } from 'react';

interface props {
    details: Array<string>,
}

const TableBody = ({ details }: props) => {
    return (
        <>

            {
                details.map((details: string, index: number) => (
                    <tr>
                        <td>{details}</td>
                        <td>Add</td>
                    </tr>
                ))
            }

        </>
    )
}

export default TableBody;