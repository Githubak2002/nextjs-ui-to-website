import Image from 'next/image';
import React from 'react'

const Card = (props:any) => {
  const {imgurl,alt,heading,subHeading,index} = props;
  return (
    <main className={`max-w-[970px] mx-auto sm:flexBetween flex ${index%2===0 ? "sm:flex-row": "sm:flex-row-reverse"} sm:p-4 px-3 py-5 flex-col`}>
                    <div className="flexCenter sm:w-1/2 w-full">
                    <Image
                    src={imgurl}
                    alt={alt}
                    width={380}
                    height={270}
                    className=" max-h-[280px] w-auto sm:my-8 sm:mx-20 m-4"
                    />
                    </div>
                    <div className="sm:w-1/2 w-auto sm:text-left text-center">
                        <h2 className="font-bold text-lg py-3">{heading}</h2>
                        <h2>{subHeading}</h2>
                    </div>
                </main>
  )
}

export default Card