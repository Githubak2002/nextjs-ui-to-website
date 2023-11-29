import Image from 'next/image'
import React from 'react'
// import React from ''

const page = () => {
  return (
    <section className='max-w-[1400px] mx-auto flex flex-col items-center justify-center mt-20'>
        <h2 className='text-3xl text-fuchsia-300'>Hello</h2>
        <Image 
        src="/imgs/ak.png"
        alt='logo'
        width={200}
        height={200}
        />
    </section>
  )
}

export default page