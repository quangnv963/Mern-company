import { INews } from "../types";
import instance from "./instance";


export const getAllNew = () =>{
    return instance.get('/news')
}

export const getOne = (id:number) =>{
    return instance.get(`/news/${id}`)
}
export const AddN = (obj:object | INews) =>{
    return instance.post(`/news`, obj)
}
export const UpN = (id:number, obj:object) =>{
    return instance.put(`/news/${id}`, obj)
}
export const delN = (id:number) =>{
    return instance.delete(`/news/${id}`)
}