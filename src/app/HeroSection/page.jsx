"use client"
import React from 'react'
import Image from 'next/image'
import { CiLinkedin } from 'react-icons/ci'
import { BiLogoGithub } from 'react-icons/bi'
import { BiLogoGmail } from 'react-icons/bi'

import { TypeAnimation } from 'react-type-animation';

const btncss = "mt-5 sm:mt-10 py-3 px-5 border-2 rounded-full w-fit font-bold";

const HeroSection = () => {
    return (
        <section className='bg-gradient-to-tr from-[#6f6f6f28] to-[#4e4e4e] '>
            <main className='h-screen px-2 sm:p-20 sm:py-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between'>

                <div className='mb-6 sm:mb-8 lg:mb-0 sm:w-auto w-screen lg:text-left text-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-7xl font-black mb-3'>Hello!👋I'm <br /> <span className=' text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-400'> Anurag Lohar </span>
                    </h1>

                    {/* React text TypeAnimation */}
                    <TypeAnimation className='font-bold sm:text-5xl text-xl '
                    sequence={[
                        'Web Developer',
                        1000,
                        'Frontend WebD',
                        1000,
                        '3D Designer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{display: 'inline-block' }}
                    repeat={Infinity}
                    />
                
                    {/* <div className='flex flex-col md:flex-row    md:items-center  md:justify-start justify-center' > */}
                    <div className='flex lg:flex-row flex-col lg:justify-start justify-start items-center' >
                    <button className={`${btncss} lg:mr-2` }>Download CV → </button>
                    <button className={`${btncss} lg:ml-2`}>Contact me</button>
                    </div>

                    <div className='mt-10 sm:text-6xl text-5xl flex items-center gap-x-4 lg:justify-start justify-center '>
                    {/* <div className='mt-10 sm:text-6xl text-5xl flex items-center gap-x-4 justify-center '> */}
                <BiLogoGithub className=' hover:cursor-pointer'/>
                <CiLinkedin />
                <BiLogoGmail />
            </div>

                </div>

                <Image className='sm:w-auto w-[270px]'
                src="/imgs/ak.png" 
                alt='error' 
                width={340}
                height={340}
                />

            </main>

           


            {/* <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-center">
                <div className="text-center lg:mr-4">
                    <h1 className='text-2xl py-3'>First para</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nulla in distinctio exercitationem iure quo veniam quod qui, error aliquam! Nostrum, repellendus corporis?</p>
                </div>

                <div className="text-center lg:mr-4">
                    <h1 className='text-2xl py-3'>Second para</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, hic? Corrupti explicabo qui commodi suscipit accusantium, aliquam nostrum? Repellat, nostrum officiis! paragraph</p>
                </div>
            </div> */}
        </section>
    )
}

export default HeroSection