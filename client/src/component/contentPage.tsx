import { Link } from "react-router-dom";
import { IProducts } from "../types"
import { INews } from "../types";
import React from 'react'

const Content = ({data, dataN}:{data: IProducts[], dataN: INews[]})=>{
    return (
        <div>
            <h1 className="text-center font-oswald text-[#1a90c9] text-[28px] md:text-[30px] lg:text-[42px] py-3">OUR PRODUCTS</h1>
            <div className="grid lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-1 mx-[30px] ml-[50px] xl:ml-[150px] md:mx-[90px] gap-y-[50px] lg:gap-y-[0px] lg:mx-[150px] 2xl:mx-[300px] gap-x-[30px]">
                {data.map((item, i)=>{
                    return(
                       <div key={i} className="w-full xl:h-[300px] h-[150px] md:h-[200px] transform hover:scale-120">
                            <Link to={`/products/${item?._id}`}>
                            <div className="parent h-[150px] md:h-[200px] xl:h-[250px] 2xl:h-[300px]">
                                <img className="child" src={item?.img} alt="" /> 
                            </div>
                            <p className="text-[#726e73] font-oswald text-[24px] text-center">{item?.name}</p>
                            </Link>
                       </div> 
                    )
                })}
            </div>
            <div className="w-full flex justify-center items-center mt-[90px]">
                <img className="mx-auto xl:w-[200px] w-[120px] md:w-[150px]" src="https://www.quantatw.com/Quanta/english/img/16259139_comp.jpg" alt="" />
            </div>
            <div className="grid lg:grid-cols-2 grid-rows-4 lg:grid-rows-1  2xl:mx-[250px] mx-[20px] md:mx-[90px] lg:mx-[150px] mt-[30px] gap-x-[30px] gap-y-[30px] py-4">
                {dataN.map((item, i)=>{
                    return(
                       <div key={i}>
                            <Link className="w-full xl:h-[250px] h-[330px] grid xl:grid-cols-2 grid-rows-2 gap-x-[90px] gap-y-[10px]" to={`/products/${item?._id}`}>
                            <div className="w-full h-[300px] 2xl:w-[400px] 2xl:h-[200px]">
                                <img className="w-full h-[200px]" src={item?.img} alt="" /> 
                            </div>
                            <div className="my-auto">
                                <p className="text-[#007bff] font-oswald text-[16px] md:text-[17px] xl:text-[20px] 2xl:text-[24px] py-2">{item?.date}</p>
                                <p className="text-[#726e73] font-oswald text-[16px] md:text-[17px] xl:text-[20px] 2xl:text-[24px] w-[300px] xl:w-[200px] 2xl:w-[300px]">{item?.title}</p>
                            </div>
                            </Link>
                       </div> 
                    )
                })}
            </div>
            <div className='h-[1.5px] w-full bg-[#D0D0D0] mt-20'></div>
        </div>
    );
}

export default Content