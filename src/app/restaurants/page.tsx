"use client"
import React, { useRef } from 'react';
import { Button, Modal, TableBody, TableHead } from '../components/UI';
import { useStore } from '../context/stateContext';
import { TbToolsKitchen, TbUserPentagon } from 'react-icons/tb';
import { AiFillStar } from 'react-icons/ai';
import { Context } from '../context/Types';
import { AddMeal, Navbar } from '../components';



const Home = () => {

    const { allStores, showModal, getStore, handleChange, setShowModal }: Context = useStore();
    // const { storeName, storeId, categories, isStoreOpen, deliveryFee, rating, storeImages } = allStores;
    console.log(allStores)
    const handleModal = (e: any) => {
        setShowModal(true)
        getStore(e.target.id)
    }

    return (

        <>
            <div>
                <TableHead
                    head={[
                        <p className='rounded-s-lg  overflow-hidden w-full p-4 bg-rose-50 '>Restaurant</p>,
                        <p className='w-full p-4 bg-rose-50'>Contact Details</p>,
                        <p className='w-full p-4 bg-rose-50'>Average Rating</p>,
                        <p className='w-full p-4 bg-rose-50'>Delivery Fee</p>,
                        <p className='w-full p-4 bg-rose-50'>Status</p>,
                        <p className='rounded-e-lg  w-full p-4 bg-rose-50'>Add Meal</p>]}
                >
                    {allStores.map((store: any) => {
                        return (
                            <TableBody
                                details={[
                                    <p>{store.storeName}</p>,
                                    store.phoneNumber,
                                    <p className="flex flex-row justify-center"><AiFillStar className="text-yellow-400" /> {store.rating}</p>,
                                    <p>{store.deliveryFee}</p>,
                                    store.isStoreOpen == true ? "Open" : "Closed",
                                    <p id={store.storeId} onClick={(e) => handleModal(e)}>+</p>
                                ]}
                            />
                        )
                    }
                    )}
                </TableHead>
            </div>
            <div className="flex flex-col h-full">

                {showModal &&
                    <Modal onClick={() => setShowModal(false)} >
                        <AddMeal />
                    </Modal>
                }
            </div>
        </>

    )
}

export default Home;