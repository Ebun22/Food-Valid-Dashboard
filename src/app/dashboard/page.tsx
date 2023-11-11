"use client"
import React from 'react';
import { TbToolsKitchen, TbUserPentagon } from 'react-icons/tb';
import { PiCallBell } from 'react-icons/pi';
import { LuUsers2 } from 'react-icons/lu';
import { BiBowlHot } from 'react-icons/bi';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';
import { AddMeal, Navbar } from '../components';
import NumBox from './components/NumBox';

const Home = () => {

    const { allStores, handleChange, setShowModal }: Context = useStore();

    return (
        <>
            <div className="flex flex-row w-full">
                <Navbar />
                <div className="m-12 w-full">
                    <p>Dashboard</p>
                    <div className="flex flex-row bg-red-50 rounded-lg py-6 px-6">
                        <NumBox icon={<TbToolsKitchen />} number={allStores.length} title='Total Restaurants' />
                        <p className="border border-1-slate-600 mx-6"></p>
                        <NumBox icon={<LuUsers2 />} number={allStores.length} title='Total Customers' />
                        <p className="border border-1-slate-600 mx-6"></p>
                        <NumBox icon={<BiBowlHot />} number={allStores.length} title='Total Meals' />
                        <p className="border border-1-slate-600 mx-6"></p>
                        <NumBox icon={<PiCallBell />} number={allStores.length} title='Total Orders' />
                    </div>
                    <div className="flex flex-row w-full gap-x-8" >
                        <div>
                            <div>
                                <p>Revenue</p>
                                GRAPH
                            </div>
                            <div>
                                <p>Pending meal Image upload</p>
                                GRAPH
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Revenue</p>
                                GRAPH
                            </div>
                            <div>
                                <p>Pending meal Image upload</p>
                                GRAPH
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;