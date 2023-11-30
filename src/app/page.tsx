import Hero from '../../components/Hero'
import Features from '../../components/Features'
import XerocodeeWay from '../../components/XerocodeeWay'
import Subscribe from '../../components/Subscribe'
import BlueSection from '../../components/BlueSection'
import SuccessStories from '../../components/SuccessStories'

export default function Home() {
  return (
   <main className='max-w-[1728px] mx-auto'>
    <Hero />
    <Features />
    <BlueSection />
    <XerocodeeWay />


    <SuccessStories />
    
    <Subscribe />
   </main>
  )
}
