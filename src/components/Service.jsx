import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import { CalWethear, Rec157, Group4, BestFlights, Mic, Settings } from "../assets"

const Service = () => {
  return (
    <div className='mt-[10%] mb-10 p-10 flex flex-col justify-center items-center gap-5'>
        <h1 className='font-poppins font-semibold text-[#5E6282] text-[1.125em]'>CATEGORY</h1>
        <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.125em] text-[2em] sm:w-auto w-screen sm:ml-0 ml-[12%]'>We Offer Best Services</h1>

        <div className='flex flex-col sm:flex-row sm:justify-evenly sm:items-baseline'>
            <Card 
                icon ={CalWethear}
                title="Calculate Weather"
                paragraph="Built Wicket longer admire do barton vanity itself do in it."
            />
            <Card2 
                icon ={BestFlights}
                title="Best Flights"
                paragraph="Engrossed listening. Park gate sell they west hard for the."
            />
            <Card3 
                icon ={Mic}
                title="Local Events"
                paragraph="Barton vanity itself do in it. Preferd to men it engrossed listening."
            />
            <Card4 
                icon ={Settings}
                title="Customization"
                paragraph="We deliver outsourced aviation services for military customers"
            />
        </div>

        <img src={Rec157} className="hidden sm:block absolute -ml-[41%] mt-[32%] z-[-1] scale-105" />
        <img src={Group4} className="hidden sm:block absolute ml-[85%] -mt-[24%]" />
    </div>
  )
}

export default Service