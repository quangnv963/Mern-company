import MainAdd from "../../component/mainAdd";
import { INews, IProducts } from "../../types";
import React from 'react'

const HomeAdd = ({data, dataN}:{ data:IProducts[], dataN:INews[]}) => {
  return (
   <div>
     <MainAdd data={data} dataN={dataN}/>
   </div>
  )
};

export default HomeAdd;