import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
  return (
    <section className='sm:mx-auto max-w-[920px] sm:px-6 px-3 mb-20'>

    <main className='px-4 mx-4 bg-[#90BFFF] text-center rounded-2xl'>

        <div className='pt-6 pb-4 mx-auto max-w-[270px] flexCenter'>
        <Image 
          src="/plane.png"
          alt='plane_img'
          width={100}
          height= {100}
          className='w-full h-full'
        />
        </div>

        <h2 className='mt-4 text-xl font-bold'>Subscribe To Our Newsletter & Get The Coupon Code. </h2>

        <h3 className='text-sm py-4'>All your information is completely confidential.</h3>

        <div className='flexCenter flex-wrap gap-3 pt-3 pb-8 '>
            <input
            className='p-2 bg-white rounded-md sm:text-sm text-xs' type="text" placeholder='Type your email'/>
            <button className='sm:text-sm text-xs font-semibold rounded-md text-white bg-[#0C5BC6] p-2'>Subscribe</button>
        </div>
    </main>
    </section>
  )
}

export default Subscribe