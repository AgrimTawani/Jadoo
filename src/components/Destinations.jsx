import DestinationCard from "./DestinationCard"
import { Rome, London, Europe, DestDecore } from "../assets"


const Destinations = () => {
  return (
    <div className='mt-[10%] mb-10 p-10 flex flex-col justify-center items-center gap-5'>
        <h1 className='font-poppins font-semibold text-[#5E6282] text-[1.125em]'>Top Selling</h1>
        <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.125em] text-[2em] sm:w-auto w-screen sm:ml-0 ml-[35%]'>Top Destinations</h1>

      <div className=" sm:flex sm:gap-0 gap-10 sm:mt-0 mt-4">
        <DestinationCard 
            img = {Rome}
            city = "Rome, Italy"
            price = "$5.24k"
            duration = "10 days trip"
        />

        <DestinationCard 
            img = {London}
            city = "London, England"
            price = "$4.2k"
            duration = "12 days trip"
        />  

        <DestinationCard 
            img = {Europe}
            city = "Full Europe"
            price = "$15k"
            duration = "28 days a trip"
        /> 

      </div>

      <img src={DestDecore} className="absolute z-[-1] sm:ml-[85%] ml-[60%] sm:mt-[10%]" />
    </div>
  )
}

export default Destinations