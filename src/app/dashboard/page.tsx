"use client"
import React from 'react';
import { Button, Modal } from '../components/UI';
import { useStore } from '../context/stateContext';
import { Context } from '../context/Types';
import { AddMeal, Navbar } from '../components';

const Home = () => {

    const { user, err, error, userInfo, showModal, handleChange, setShowModal }: Context = useStore();

    const handleModal = () => {
        setShowModal(true)
    }

    return (
        <div className="flex flex-col h-screen min-h-screen">
            <div className="flex flex-row w-full">
                <Navbar />
                <div className="m-12">
                    <p>This is a sample of a modal created using react portal</p>
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