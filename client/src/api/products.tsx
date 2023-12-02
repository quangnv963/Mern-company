import { IProducts } from "../types";
import instance from "./instance";


export const getAll = () =>{
    return instance.get('/products')
}

export const getOne = (id:number) =>{
    return instance.get(`/products/${id}`)
}
export const AddP = (obj:object | IProducts) =>{
    return instance.post(`/products`, obj)
}
export const UpP = (id:number, obj:object) =>{
    return instance.put(`/products/${id}`, obj)
}
export const delP = (id:number) =>{
    return instance.delete(`/products/${id}`)
}