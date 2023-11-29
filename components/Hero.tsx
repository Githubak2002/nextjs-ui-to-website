import React from "react";
import Nav from "./nav";
import Image from "next/image";

const gray = [
    { imgsrc:"/gray1.png" },
    { imgsrc:"/gray3.png" },
    { imgsrc:"/gray2.png" },
    { imgsrc:"/gray4.png" }
  ];

const Hero = () => {
  return (
    <header className="max-w-[1728px] mx-auto">

      <main className="text-center mt-10 sm:px-10 px-6 flexCenter flex-col gap-10  ">
        <h2 className="font-black sm:text-4xl text-2xl max-w-[780px]">Build your audience and grow your brand</h2>
        <p className=" text-slate-500 max-w-[780px] sm:text-base text-sm mx-auto px-6 leading-7">
        no more, no less. Deploy from our single pane of glass, manage them with
        ease and scale up as fast as your workload grows.
        </p>
        <button className="px-10 py-2 sm:text-base text-xs rounded-md bg-[#0C5BC6] text-white">Get Started Now</button>
      </main>

      <div className="relative flexCenter max-w-[980px] mx-auto">
      <Image 
          src="/hero.png"
          alt='hero_img'
          width={200000}
          height= {600}
        //   fill
        //   priority
        //   sizes="(max-width:760px) 100vw,700px"
          className='w-full max-w-[1200px] mx-auto h-[auto] sm:px-6 px-4'
        />
      </div>


      <div className="flex max-w-[780px] mx-auto sm:gap-20 gap-5 sm:px-0 px-10 sm:py-5 py-3 mt-10">
        {
            gray.map((item,i) => {
                return(
                    <div key={i} className="flexCenter sm:w-[180px]">
                    <Image 
                    src={item.imgsrc}
                    alt='hero_img'
                    width={3000}
                    height= {1000}
                    className='w-auto h-auto'
                      />
                    </div>
                    )
            })

        }
      </div>

      <div className="flex max-w-[780px] mx-auto sm:gap-20 gap-5 sm:px-0 px-10 sm:py-5 py-3">
        {
            gray.map((item,i) => {
                return(
                    <div key={i} className="flexCenter sm:w-[180px]">
                    <Image 
                    // key={i}
                    src={item.imgsrc}
                    alt='hero_img'
                    width={3000}
                    height= {1000}
                    className='w-[auto] h-[auto]'
                      />
                    </div>
                    )
            })

        }
      </div>


    </header>
  );
};

export default Hero;
