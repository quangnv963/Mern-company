import { useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { getAll } from './api/products'
import { getAllNew } from './api/news'
import { getAllUser } from './api/users'
import Home from './page/Home'
import AboutUs from './page/AboutUs'
import HomeAdd from './page/admin/HomeAdd'
import Signin from './page/Signin'



function App(){
  const [products, SetP] = useState([])
  const [news, SetN] = useState([])
  const [users, SetU] = useState([])


  useEffect(()=>{
    getAll().then(({data}) => SetP(data))
  },[])
  useEffect(()=>{
    getAllNew().then(({data}) => SetN(data))
  },[])
  useEffect(()=>{
    getAllUser().then(({data}) => SetU(data))
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={products} dataN ={news}/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/admin' element={<HomeAdd data={products} dataN={news}/>}/>
          <Route path='/admin/datamanager' element={<HomeAdd data={products} dataN={news}/>}/>
          <Route path='/signin' element={<Signin dataU={users}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}


export default App