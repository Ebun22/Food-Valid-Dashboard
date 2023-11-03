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

export interface Context{
    user: User,
    err: string,
    userInfo: UserInfo,
    isAdmin: boolean,
    showModal: boolean, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    error: React.MutableRefObject<HTMLDivElement | null>,
    login: boolean, 
    setLogin:React.Dispatch<React.SetStateAction<boolean>>,
    handleChange:React.ChangeEventHandler<HTMLInputElement>,
    handleSignUp: React.ReactEventHandler,
    handleLogin: React.ReactEventHandler,
}


