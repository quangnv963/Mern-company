import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { IUsers } from "../types"
import React from 'react'


const Signin = ({dataU}:{dataU: IUsers[]}) =>{
    const navigate = useNavigate();
    const {register, formState:{ errors }, handleSubmit} = useForm<IUsers>()
    const AddAcc: SubmitHandler<IUsers> = async (data:IUsers) =>{
        const fill:IUsers | undefined = dataU.find(u => u.email == data.email)
        console.log(fill)
        if(!fill){
            alert('Account not found')
            return;
        }
        // const checkPass = await bcryptjs.compare(data.password , fill.password)
        if(fill.password != data.password){
            alert('Wrong Pass')
            return;
        }
        alert('Login succes Admin ')
        document.cookie = `name=${fill.name}; max-age=${3600}`;
        navigate('/admin')

    }
 
    return(
    <div>
        <p>Đây là trang Đăng Nhập 2</p>
        <form action="" onSubmit={handleSubmit(AddAcc)}>
            <div>
                <label htmlFor="email">Email</label>
                <div>
                    <input type="email" {...register('email', {required:'Required'})} placeholder="Your Email" />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div>
                    <input type="password" {...register('password', {required:'Required'})} placeholder="Your Password" />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
            </div>
            <div>
                <button type="submit">
                    Login
                </button>
            </div>
        </form>
    </div>
 )
}

export default Signin