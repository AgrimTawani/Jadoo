import { Image, L1, L2, L3 } from "../assets"

const Bookings = () => {
    return (
    <div className="flex sm:ml-10 h-fit sm:p-12 pl-[11%] ">
        <div className="sm:w-full w-[97%] sm:ml-[10%] ml-">
            <h1 className='font-poppins font-semibold text-[#5E6282] sm:text-[1.225em] pb-5'>Easy and Fast</h1>
            <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.225em] text-[2em] sm:w-[90%] w-fit sm:ml-0 ml-[0%]'>Book Your Next Trip In 3 Easy Steps</h1>

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

        <img src={Image} className="hidden sm:block mb-[10%] -mt-[10%]" />
    </div>
    )
}

export default Bookings