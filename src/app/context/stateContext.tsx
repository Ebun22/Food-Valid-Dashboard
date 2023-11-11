"use client"
import React, { useState, useEffect, createContext, useContext, useRef, ReactEventHandler, useCallback } from 'react';
import { Context, MealData, User, Options } from "./Types";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { toast } from 'react-toastify';


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
export const optionData = {
    option: '',
    optionPrice: 0,
}
const mealData: MealData = {
    storeId: '',
    mealName: '',
    price: 0,
    description: '',
    category: '',
    imageUrls: [],
}
const storeData = {
    name: '',
    id: '',
    images: ''
}
export default function StateProvider({ children }: any) {
    const [user, setUser] = useState(userData)
    const [err, setErr] = useState("")
    const [response, setResponse] = useState('')
    const [login, setLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userInfo, setUserInfo] = useState(info);
    const [allStores, setAllStores] = useState([]);
    const [numOfRes, setNumOfRes] = useState(0);
    const [numOfCust, setNumOfCust] = useState(0);
    const [numOfMeals, setNumOfMeal] = useState(0);
    const [store, setStore] = useState(storeData);
    const [options, setOptions] = useState<Options[]>([optionData]);
    const [meal, setMeal] = useState<MealData>(mealData);
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

    const getters = async (endPoint: string, method: string, token: string) => {
        try {
            const response = await fetch((url + endPoint), {
                method: method,
                headers: {
                    'Authorization': "Bearer " + token
                }
            })
            const data = await response.json();
            return data
        } catch (error) { }
    }

    const posters = async (endPoint: string, method: string, token: string, body: FormData) => {
        try {
            const response = await fetch(`${url + endPoint}`, {
                method: method,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: body,
            })
            const data = await response.json();
            setResponse(JSON.stringify(response.status))
            if (response.status === 200) {
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
            const userInfo = {
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
        getters("/auth/stores", 'GET', token).then((res) => {
            setAllStores(res)
            console.log("This is the restaurants: ", res.length)
        })
    }

    const getStore = async (id: string) => {
        getters(`/auth/stores/${id}`, 'GET', token).then((res) => {
            setStore(() => ({
                name: res.storeName,
                id: res.storeId,
                images: res.storeImages
            }))
        })
    }

    const handleAddMeal = async () => {
        const body = new FormData();

        body.append("storeId", store.id);
        body.append("mealName", meal.mealName);
        body.append("price", meal.price.toString());
        body.append("description", meal.description);
        body.append("category", meal.category);
        body.append("imageUrls", JSON.stringify(meal.imageUrls));
        body.append("options", JSON.stringify(options));

        // console.log(posters("/meals/add", "POST", token, body))
        if (response === "200") {
            toast.success("Meal has been successfully uplaoded!!");
        } else if (response === "403") {
            toast.error("You area not authorized to perform this action");
        }
        posters("/meals/add", "POST", token, body).then((res) => {
            console.log(res)
        })

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
        store,
        err,
        error,
        isAdmin,
        meal,
        allStores,
        userInfo,
        setLogin,
        showModal,
        getStore,
        options,
        setOptions,
        setMeal,
        setShowModal,
        handleLogin,
        handleSignUp,
        handleAddMeal,
    }


    return (
        <StateConsumer.Provider value={value} >
            {children}
        </ StateConsumer.Provider>
    )
}

