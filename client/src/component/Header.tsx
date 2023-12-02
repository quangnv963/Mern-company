import React from 'react'
import  { useState } from 'react';
import logo from '../assets/logo.jpg'
import menu from '../assets/icons8-menu.svg'
import close from '../assets/icons8-x-48.png'


const Header = () => {
  const [navBar, setNavBar] = useState(false)  
  const [scrollBar, SetScrollBar] =  useState(false)
  const onScrollBar = () =>{
    console.log(window.scrollY)
    if(window.scrollY >= 120){
      SetScrollBar(true)
    }
    else{
      SetScrollBar(false)
    }
  }
  window.addEventListener('scroll', onScrollBar)
  return (
    <header>
      <div className={scrollBar ? 'z-[10] fixed w-full bg-[white] px-[20px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] top-[0] nav flex justify-between items-center h-[120px]' : 'nav flex justify-between mx-[20px] md:mx-[30px] xl:mx-[50px] 2xl:mx-[100px] py-1 mt-[10px] xl:mt-[20px] items-center h-[90px]'}>
        <div className="logo w-[50px] sm:w-[70px] lg:w-[100px]">
          <a href="/"><img className='w-full' src={logo} alt="" /></a>
        </div>
        <div className="menu">
          <div className="w-[50px] block xl:hidden">
            <img onClick={()=>{setNavBar(!navBar)}} className='w-full hover:cursor-pointer' src={menu} alt="" />
          </div>
          <ul id='navmobile' className={navBar ? 'z-[2] block absolute top-[0px] right-[0px] bg-[#007bff] w-full h-[400px] text-center xl:hidden' : 'hidden'}>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href="/about"></a>About OPM</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Product</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Project</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Invester Relation</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Join US</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Contact</li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href=""></a>Language</li>
            <img onClick={()=>{setNavBar(false)}} className="absolute hover:cursor-pointer top-[1px] right-[1px]" src={close} alt="" />       
          </ul>
          <ul className="hidden xl:flex  text-[#4A4A4A] font-sans xl:text-[16px] 2xl:text-[24px]">
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="/about">About OPM</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Product</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Project</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Invester Relation</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Join US</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Contact</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Language</a></li>       
          </ul>
        </div>
      </div>
      <div className='h-[1.5px] w-full bg-[#D0D0D0] mt-5'></div>
    </header>
  );
}
export default Header;
