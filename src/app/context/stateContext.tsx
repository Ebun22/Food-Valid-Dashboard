"use client"
import React, { useState, useEffect, createContext, useContext, useRef, ReactEventHandler, useCallback } from 'react';
import { Context, User } from "./Types";
import { useRouter, useSearchParams, usePathname } from "next/navigation"


export const StateConsumer = createContext<Context | null>(null)

export const useStore = () => {
    const store = useContext(StateConsumer);
    if (store === null) {
        throw new Error("context cannot be accesed");
    }
    return store;
}
const userData = {
    username: '',
    email: '',
    password: '',
}
const info = {
    name: '',
    email: '',
    id: '',
}

export default function StateProvider({ children }: any) {
    const [user, setUser] = useState(userData)
    const [err, setErr] = useState("")
    const [login, setLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userInfo, setUserInfo] = useState(info);
    const [showModal, setShowModal] = useState(false);
    const [token, setToken] = useState('');
    const [url, setUrl] = useState('https://nodejs-food-valid-production.up.railway.app')

    const error = useRef(null)
    const router = useRouter()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    };

    const postAuth = async (endPoint: string, method: string, body: User) => {
        try {
            const response = await fetch(`${url + endPoint}`, {
                method: method,
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body),
            })


            if (response.status === 400) {
                if (error.current) {
                    (error.current as HTMLDivElement).focus()
                }
                setErr("Invalid Password. Try a stronger password")
            } else if (response.status === 401) {
                setErr("Invalid Password")
            } else if (response.status != 200) {
                setErr("Invalid Password. Try a stronger password")
            } else if (response.status === 200) {
                const data = await response.json();
                return data
            }
        } catch (error) { }
    }

    const handleLogin: ReactEventHandler = async (e) => {
        e.preventDefault()
        postAuth("/auth/admin/login", 'POST', user).then((res) => {
            const login = {
                isAdmin: res.isAdmin,
                token: res.accessToken
            }
           const userInfo ={
                name: res.username,
                email: res.email,
                id: res.userId,
            }
            localStorage.setItem("login", JSON.stringify(login))
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        })
        if (isAdmin) {
            router.push('/dashboard')
        }
    }

    const handleSignUp: ReactEventHandler = async (e) => {
        e.preventDefault()
        postAuth("/auth/signup", 'POST', user)
    }

    const getStores = async () => {
        const response = await fetch(`${url}/auth/stores`, {
            method: 'GET'
        })
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        //To get access Token from local storage
        const store = localStorage.getItem("login")
        const parsedStore = JSON.parse(store as string)
        setIsAdmin(parsedStore.isAdmin)
        setToken(parsedStore.token)

        //To get user i.e admin details form localStorage
        const details = JSON.parse(localStorage.getItem("userInfo") as string)
        setUserInfo(details)
    }, [])

    useEffect(() => {
        getStores()
    }, [])

    const value = {
        user,
        handleChange,
        login,
        err,
        error,
        isAdmin,
        userInfo,
        setLogin,
        showModal, 
        setShowModal,
        handleLogin,
        handleSignUp,
    }


    return (
        <StateConsumer.Provider value={value} >
            {children}
        </ StateConsumer.Provider>
    )
}

