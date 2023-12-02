export interface IProducts {
    _id:number;
    name:string;
    img: string;
    desc:string;
}

export interface IUsers {
    email:string;
    name:string;
    password:string;
    _id:number;
    role:"admin" |"member"
}

export interface INews {
    _id:number;
    title:string;
    content:string;
    img:string;
    date:string
}