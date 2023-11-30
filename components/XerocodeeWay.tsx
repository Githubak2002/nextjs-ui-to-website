import Image from "next/image";
import React from "react";
import { xeroCodeOne, xeroCodeThree, xeroCodeTwo } from "../constants/constants";
import Card from "./Card";

const XerocodeeWay = () => {
  return (
    <section className="sm:mx-auto max-w-[1200px] sm:px-3">
    <main className="sm:border-0 sm:bg-white   sm:rounded-5xl mx-3 border border-slate-400 rounded-xl pb-4 mb-10">
      
      <h2 className="mb-12 pt-10 flexCenter text-center font-bold text-xl">The Xerocodee Way 
      <Image 
      src="/rocket.png"
      alt="rocket"
      width={30}
      height={30}
      className="pl-2"
      />
      </h2>

      {/* --- 01 --- */}  
      <div className=" text-center flex-col flexCenter">
      <h1 className="text-xl font-bold sm:pt-8 pt-5 ">01</h1>

      <div className="relative mt-2 mb-5 mx-auto w-20 border-2 border-blue-600">
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] left-[-3px]" />
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] right-[-3px]" />
      </div>

      <h2 className="py-3 font-bold text-lg">Self Serve Infrastructure</h2>
      <h3 className="px-2">Accelerate by self-serving production-ready infrastructure and customize as you scale.</h3>
      </div> 
      <div className="">
        {
            xeroCodeOne.map((ele,i) => (
                <Card
                key={i}
                index={i}
                imgurl={ele.imgurl} 
                alt={ele.alt} 
                heading={ele.heading}
                subHeading={ele.subHeading}
                />
            ))
        }
      </div>
      
      {/* --- 02 ---  */}
      <div className="text-center flex-col flexCenter">
      <h1 className="text-xl font-bold sm:pt-8 pt-5">02</h1>

      <div className="relative mt-2 mb-5 mx-auto w-20 border-2 border-blue-600">
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] left-[-3px]" />
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] right-[-3px]" />
      </div>

      <h2 className=" py-3 font-bold text-lg">Deploy applications, fast!</h2>
      <h3 className="px-2">Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.</h3>
      </div> 
      <div className="">
        {
            xeroCodeTwo.map((ele,i) => (
                <Card
                key={i}
                index={i}
                imgurl={ele.imgurl} 
                alt={ele.alt} 
                heading={ele.heading}
                subHeading={ele.subHeading}
                />
            ))
        }
      </div>

      {/* --- 03 ---  */}
      <div className="text-center flex-col flexCenter">
      <h1 className="text-xl font-bold sm:pt-8 pt-5">03</h1>

      <div className="relative mt-2 mb-5 mx-auto w-20 border-2 border-blue-600">
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] left-[-3px]" />
        <div className="absolute h-3 w-3 rounded-full bg-blue-600 top-[-6px] right-[-3px]" />
      </div>

      <h2 className=" py-3 font-bold text-lg">Visibility Into Costs And Metrics</h2>
      <h3 className="px-2">Automaticallv track resource costs. across clouds. on everv change. Visualize kgs ood metrics - CPJ. Network. and Memory.</h3>
      </div> 
      <div className="">
        {
            xeroCodeThree.map((ele,i) => (
                <Card
                key={i}
                index={i}
                imgurl={ele.imgurl} 
                alt={ele.alt} 
                heading={ele.heading}
                subHeading={ele.subHeading}
                />
            ))
        }
      </div>

    </main>
    </section>
  );
};

export default XerocodeeWay;
