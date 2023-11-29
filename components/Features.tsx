import Image from "next/image";
import React from "react";
import { features, features2 } from "../constants/constants";

const Features = () => {
  return (
    <section className="sm:my-10 my-7 flexCenter flex-col">

      <>  
      <h2 className="px-4 py-3 rounded-3xl text-sm bg-[#4192FF4D] text-[#0C5BC6] my-6">
        Features
      </h2>

      <h2 className="font-bold text-xl px-4 text-center">
        <span className="text-[#0C5BC6]">Save 1000s </span>of expensive coder
        hours
      </h2>
      <h2 className=" text-[#494369] text-sm px-6 pt-3 leading-7 text-center">
        With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.
      </h2>
      </>

    {/* --- features btns --- */}
    <div className="lg:flex hidden gap-x-3 mt-12 mb-6">
        {
            features.map((feature,i) => (
                <button key={i} className="px-3 py-1 border-slate-300 border text-xs font-semibold text-[#494369] bg-white w-[110px] h-[30px]">{feature.f}</button>
            ))
        }
    </div>

    {/* --- dashboard images --- */}
      <div className="relative my-20 h-auto md:w-[550px] sm:w-[405px] w-[205px]">
        <Image
          src="/dashboard-1.png"
          alt="dashboard_img"
          width={400}
          height={230}
          //   fill
          //   priority
          // sizes="(max-width:760px) 100vw,700px"
          className="h-full w-full "
        />

        <Image
          src="/dashboard-2.png"
          alt="dashboard_img"
          width={400}
          height={230}
          className=" absolute top-[-25%] right-[-25%] h-1/2 w-1/2 "
        />

        <Image
          src="/dashboard-2.png"
          alt="dashboard_img"
          width={400}
          height={230}
          className="absolute bottom-[-25%] left-[-25%] h-[65%] w-[65%] "
        />

      </div>

      <div className="flexBetween sm:flex-row flex-col max-w-[920px] md:w-[760px] sm:pt-10 pb-10 gap-y-10 px-6">
        <div className="flexCenter flex-col">
            <h2 className="py-6 font-bold">Without Xerocodee</h2>
            <Image
            src="/without.png"
            alt="dashboard_img"
            width={600}
            height={530}
            className="h-full w-full "
            />
        </div>

        <div className="flexCenter flex-col">
            <h2 className="py-6 font-bold">With Xerocodee</h2>
            <Image
            src="/with.png"
            alt="dashboard_img"
            width={600}
            height={530}
            className="h-full w-full "
            />
        </div>

      </div>

      <h2 className=" text-center text-xl font-bold px-4 sm:py-8 py-6">Self serve infrastructure platform for <span className="text-blue-600">scaling teams</span></h2>


      <div className="flex items-center flex-wrap lg:justify-between justify-center px-2 max-w-[780px] mx-auto ">
        {
            features2.map((ele,i) => (
              <div key={i} className="min-w-[270px] sm:w-[365px] flexBetween bg-white p-2 my-4 sm:text-xs text-sm rounded-xl">
                <div className="flexCenter h-[74px] w-[82px] rounded-xl shadow-xl">
                    <Image
                        src={ele.imgurl}
                        alt={ele.alt}
                        width={54}
                        height={54}
                        className="h-[80%] w-[80%] bg-white"
                    />
                </div>
                <div className="flex-col pl-4">
                    <h2 className="text-xl font-bold">{ele.heading}</h2>
                    <h2>{ele.subHeading}</h2>
                </div>
              </div>
            ))
        }

      </div>




      {/* <div className="flexBetween bg-white p-2   my-10">
        <div className="flexCenter h-[74px] w-[74px] rounded-xl shadow-xl">
            <Image
                src="/infrastructure.png"
                alt="infrastructure_img"
                width={54}
                height={54}
                className="h-[80%] w-[80%] bg-white"
            />
        </div>
        <div className="flex-col pl-4">
            <h2 className="text-xl font-bold">Infrastructure</h2>
            <h2>Automated Cloud Infrastructure Workflow</h2>
        </div>
      </div> */}

    </section>
  );
};

export default Features;
