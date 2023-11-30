import Image from 'next/image'
import React from 'react'

// --- content constant ---
const mainHeading = "Modernize Apps, Infrastructure With Cloud Native Tech For Resilience, Scalability.";
const heading1 = "Real-Time Risk Monitoring";
const heading2 = "Collaborative Workflows";
const subHeading1 = "Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.";
const subHeading2 = "Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.";

const BlueSection = () => {
  return (
    <section className='mx-auto max-w-[1260px] sm:px-5 px-3'>

        <main className='bg-[#0C5BC6] text-white rounded-3xl flexCenter md:text-3xl text-xl font-bold sm:gap-8 flex-col sm:p-12 text-center p-3 py-10'>

            <h2>{mainHeading}</h2>

            <div className='flexBetween justify-evenly sm:flex-row flex-col sm:w-[80%]'>
                <div className='sm:w-[70%]'>
                    <Image 
                    src="/real-time.png"
                    alt="realtime"
                    height={1400}
                    width={1480}
                    className=''
                    />
                </div>
                <div className='max-w-[260px] text-left'>
                    <h1>{heading1}</h1>
                    <h3 className=' text-xs font-light leading-5 mt-3'> {subHeading1}</h3>
                </div>
            </div>

            <div className='flex items-center justify-between sm:flex-row flex-col-reverse sm:w-[70%]'>
                <div className='max-w-[260px] text-left '>
                    <h1>{heading2}</h1>
                    <h3 className=' text-xs font-light leading-5 mt-3'> {subHeading2}</h3>
                </div>
                <div className='sm:w-[50%] flexCenter sm:items-end sm:my-0 my-10 '>
                    <Image 
                    src="/collaboration.png"
                    alt="real-time"
                    height={300}
                    width={380}
                    className=''
                    />
                </div>
            </div>


        </main>
    </section>
  )
}

export default BlueSection