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
export interface Options {
    option: string,
    optionPrice: number,
}
export interface MealData {
    storeId: string,
    mealName: string,
    price: number,
    description: string,
    category: string,
    imageUrls: Array<string>,
}

interface StoreData {
    name: '',
    id:'',
    images: ''   
}   

export interface Context{
    user: User,
    err: string,
    userInfo: UserInfo,
    isAdmin: boolean,
    store:{
        name: string;
        id: string;
        images: string;
    },
    setMeal: React.Dispatch<React.SetStateAction<MealData>>
    options: Options[],
    setOptions: React.Dispatch<React.SetStateAction<Options[]>>
    showModal: boolean,
    meal: MealData,
    getStore: (id:string) => void,
    allStores: Array<Object>, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    error: React.MutableRefObject<HTMLDivElement | null>,
    login: boolean, 
    setLogin:React.Dispatch<React.SetStateAction<boolean>>,
    handleChange:React.ChangeEventHandler<HTMLInputElement>,
    handleAddMeal: () => void,
    handleSignUp: React.ReactEventHandler,
    handleLogin: React.ReactEventHandler,
}


