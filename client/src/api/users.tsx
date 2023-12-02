import { IUsers } from "../types";
import instance from "./instance";


export const getAllUser = () =>{
    return instance.get('/users')
}

export const getOne = (id:number) =>{
    return instance.get(`/users/${id}`)
}
export const AddP = (obj:object | IUsers) =>{
    return instance.post(`/users`, obj)
}
export const UpP = (id:number, obj:object) =>{
    return instance.put(`/users/${id}`, obj)
}
export const delP = (id:number) =>{
    return instance.delete(`/users/${id}`)
}