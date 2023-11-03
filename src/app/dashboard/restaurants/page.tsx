"use client"
import React from 'react';
import { Button, Modal, TableBody, TableHead } from '../../components/UI';
import { useStore } from '../../context/stateContext';
import { Context } from '../../context/Types';
import { AddMeal, Navbar } from '../../components';

const Home = () => {

    const { allStores, showModal, handleChange, setShowModal }: Context = useStore();
    // const { storeName, storeId, categories, isStoreOpen, deliveryFee, rating, storeImages } = allStores;
    console.log(allStores)
    const handleModal = () => {
        setShowModal(true)
    }

    return (
        <div className="flex flex-col h-screen min-h-screen">
            <div className="flex flex-row w-full">
                <Navbar />
                <div className="m-12">
                    <p>This is a sample of a modal created using react portal</p>
                    <div>
                        <TableHead head={['Restaurant', 'contact', 'rating', 'Delivery Fee', 'Status', 'Add Meal']}>
                            {allStores.map((store: any) => {
                                return (
                                    <TableBody
                                        details={[store.storeName, store.phoneNumber, store.rating, store.deliveryFee, store.isStoreOpen]}
                                    />
                                )
                            }
                            )}
                        </TableHead>
                    </div>
                    <Button type='button' text="click to see modal" onClick={handleModal} />
                    {showModal &&
                        <Modal onClick={() => setShowModal(false)}>
                            <AddMeal />
                        </Modal>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;