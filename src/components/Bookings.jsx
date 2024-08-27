
import { bar, building, cloud, dome, Girl, heart, L1, L2, L3, OPTIONS } from "../assets"

const Bookings = () => {
    return (
    <div className="flex sm:ml-10 h-fit sm:p-12 pl-[11%] ">
        <div className="sm:w-[100%] w-[97%] sm:ml-[10%] ml-">
            <h1 className='font-poppins font-semibold text-[#5E6282] sm:text-[1.225em] pb-5'>Easy and Fast</h1>
            <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.225em] text-[2em] sm:w-[40%] w-fit sm:ml-0 ml-[0%]'>Book Your Next Trip In 3 Easy Steps</h1>

            <div className="mt-3 pt-2 flex flex-col gap-5">
                <div className="flex gap-6">
                    <img src={L1} className="scale-110"/>
                    <div className="flex flex-col mt-4">
                        <h1 className="text-[#5E6282] font-poppins font-bold text-[1em]">Choose Destination</h1>
                        <p className="text-[#5E6282] font-poppins text-[1em] sm:w-[65%] w-[95%]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <img src={L2} className="scale-110"/>
                    <div className="flex flex-col mt-4">
                        <h1 className="text-[#5E6282] font-poppins font-bold text-[1em]">Make Payment</h1>
                        <p className="text-[#5E6282] font-poppins text-[1em] sm:w-[65%] w-[95%]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <img src={L3} className="scale-110"/>
                    <div className="flex flex-col mt-4">
                        <h1 className="text-[#5E6282] font-poppins font-bold text-[1em]">Reach Airport on Selected Date</h1>
                        <p className="text-[#5E6282] font-poppins text-[1em] sm:w-[65%] w-[95%]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className=" hidden sm:block bg-white rounded-3xl -ml-[53%] mt-[8%] shadow-lg p-5 pt-8 relative z-10">
            <img src={Girl} className="" />
            <div className="flex flex-col mt-[9%]">
                <h1 className="font-poppins text-[1.125em] font-medium">Trip To Greece</h1>
                <p className="font-poppins font-medium text-[1em] text-[#84829A] mt-[10px]">14-29 June | by Robbin joseph</p>
                <img src={OPTIONS} className="w-[44%] mt-[20px]" />
            </div>
            <div className="flex mt-[25px] gap-4">
                <img src={building} alt="" />
                <p className="font-poppins font-medium text-[1em] text-[#84829A]">24 People are going</p>
                <img src={heart} className="w-[5%] ml-[28%]" />
            </div>

            <div className="absolute z-20 -mt-[53%] ml-[57%] bg-white rounded-3xl shadow-lg w-full p-5 pt-8">
                <div className="flex gap-4">
                    <img src={dome} alt="" />
                    <div className="flex flex-col">
                        <p className="font-poppins font-medium text-[#84829A] text-[0.875em]">Ongoing</p>
                        <h1 className="font-poppins font-medium text-[1.125em]">Trip to Rome</h1>
                    </div>
                </div>
                <div className="flex flex-col ml-[20%]">
                <p className="mt-[5%] font-poppins font-medium text-[0.875em]"><span className="text-[#5E6282]">40%</span> completed</p>
                <img src={bar} className="mt-[7%] -ml-[10%] scale-75" />
                </div>
                
            </div>
            
        </div>
        <img src={cloud} className="absolute z-[-1] ml-[44%] -mt-[10%] shadow-none hidden sm:block" />
    </div>
    )
}

export default Bookings