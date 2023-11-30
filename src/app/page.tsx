import Hero from '../../components/Hero'
import Features from '../../components/Features'
import XerocodeeWay from '../../components/XerocodeeWay'
import Subscribe from '../../components/Subscribe'

export default function Home() {
  return (
   <main className='max-w-[1728px] mx-auto'>
    <Hero />
    <Features />
    <XerocodeeWay />

    <Subscribe />
   </main>
  )
}
