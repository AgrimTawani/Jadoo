import { testimonials, dots } from "../assets"

const Testimonials = () => {
  return (
    <div className="flex sm:flex-row flex-col "> 

    <div className="flex flex-col sm:-mt-[10%] mt-[20%] sm:p-12 pl-[11%] sm:ml-[10%] ">
        <h1 className='font-poppins font-semibold text-[#5E6282] sm:text-[1.225em] pb-5'>TESTIMONIALS</h1>
        <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.225em] text-[2em] sm:w-[70%] w-fit sm:ml-0 ml-[0%]'>What People Say About Us.</h1>

        <img src={dots} className="hidden sm:block w-[13%] mt-[13%]" />
    </div>
   
    <img src={testimonials} className="sm:mb-[8%] sm:-mt-[8%] mt-[10%] sm:-ml-[16%] sm:w-fit w-[90%] " />
    <img src={dots} className="sm:hidden w-[13%] -mt-[13%] ml-[40%]" />
    </div>
 
  )
}

export default Testimonials