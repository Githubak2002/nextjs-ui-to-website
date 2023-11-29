"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const navCss = "hover:scale-110 transition-all hover:cursor-pointer"; 
const Nav = () => {

  const [menu,setMenu] = useState("hidden");
 
  return (

    <nav className='max-w-[1728px] mx-auto '>

    {/* ==== nav for laptop and tablet size screen ==== */}

    {/* <main className='max-w-[1398px] mx-auto h-[81px] lg:flexBetween hidden border-b border-2 shadow-lg px-[117px] text-lg font-medium'> */}
    <main className='max-w-[1098px] mx-auto h-[71px] mt-2 lg:flexBetween hidden border-b border-2 shadow-lg px-[117px] text-lg font-medium rounded-lg'>

        <Image 
        src="/logo_lg.png"
        alt='logo'
        width={140}
        height= {40}
        className='cursor-pointer'
        />

        <ul className='flex gap-x-[33px]'>
        <li className={navCss} > Home </li>
        <li className={navCss} > Team </li>
        <li className={navCss} > Contact </li>
        <li className={navCss} > Careers </li>
        </ul>

        <button className='border-2 border-[#0C5BC6] text-[#0C5BC6] px-8 py-1 rounded-md'>Sign In</button>
    </main>

    {/* ==== nav for mobile size screen ==== */}

    <main className='lg:hidden flexBetween h-[59px] border-b border-2 shadow-lg px-[24px]'>
      <Image 
          src="/logo_sm.png"
          alt='logo'
          width={60}
          height= {60}
          className='cursor-pointer'
      />

      <i className="sm:hidden hover:cursor-pointer pr-4 text-xl font-bold ri-menu-2-fill"></i>
    </main>

  </nav>

  )
}

export default Nav