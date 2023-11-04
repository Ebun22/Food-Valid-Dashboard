import { ReactElement, SetStateAction } from "react";

export interface User {
    username: string,
    email: string,
    password: string ,
}
export interface UserInfo {
    name: string,
    email: string,
    id: string,
}
export interface MealData {
    storeId: string,
    storeName: string,
    mealName: string,
    price: number,
    description: string,
    category: string,
    options: string,
    optionsPrice: number,
    imageUrls: Array<string>,
}

export interface Context{
    user: User,
    err: string,
    userInfo: UserInfo,
    isAdmin: boolean,
    showModal: boolean,
    meal: MealData,
    getStore: (id:string) => void,
    allStores: Array<Object>, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    error: React.MutableRefObject<HTMLDivElement | null>,
    login: boolean, 
    setLogin:React.Dispatch<React.SetStateAction<boolean>>,
    handleChange:React.ChangeEventHandler<HTMLInputElement>,
    handleSignUp: React.ReactEventHandler,
    handleLogin: React.ReactEventHandler,
}


