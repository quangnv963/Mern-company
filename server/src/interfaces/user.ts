import { Request } from "express";

export interface IUser {
    _id: string | number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "member";
}
