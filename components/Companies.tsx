import React from 'react'
import Image from 'next/image'

const Companies = (props:any) => {

  const { index, imgsrc } = props;
  return (
    <div key={index} className="flexCenter sm:w-[120px] sm:h-full p-2">
                    <Image 
                    // key={i}
                    src={imgsrc}
                    alt='hero_img'
                    width={300}
                    height= {80}
                    className='w-[auto] h-[auto]'
                      />
    </div>
  )
}

export default Companies