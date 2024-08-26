import { facebook, insta, x, playstore, appstore } from "../assets"


const Footer = () => {
  return (
    <div className="sm:scale-100 scale-75 sm:-ml-0 -ml-[20%] flex flex-row gap-5 pb-[10%] pl-[11%] items-center">
        <div className="flex justify-around sm:-ml-0 -ml-[15%] items-baseline ">   
            <div className="flex flex-col gap-5 sm:w-auto w-[50%]">
                <h1 className="font-poppins text-[#181E4B] font-bold text-[2.75em]">Jadoo.</h1> 
                <p className="font-poppins text-[0.815em] text-[#5E6282] font-medium sm:w-[60%]">Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div id="Nav Col" className="flex flex-row justify-around gap-28">
                <div className="flex flex-col gap-2"> 
                    <h1 className="font-poppins font-bold text-[1.375] text-[#080809] text-[1.3125em]">Company</h1>
                    <p className="font-poppins text-[#5E6282] font-medium ">About</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Careers</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Mobile</p>
                </div>

                <div className="flex flex-col gap-2"> 
                    <h1 className="font-poppins font-bold text-[1.375] text-[#080809] text-[1.3125em]">Contact</h1>
                    <p className="font-poppins text-[#5E6282] font-medium ">Help/FAQs</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Press</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Affliates</p>
                </div>

                <div className="flex flex-col gap-2"> 
                    <h1 className="font-poppins font-bold text-[1.375] text-[#080809] text-[1.3125em]">More</h1>
                    <p className="font-poppins text-[#5E6282] font-medium ">Airline Fees</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Airline</p>
                    <p className="font-poppins text-[#5E6282] font-medium ">Low fare tips</p>
                </div>
            </div>

            <div className="absolute sm:w-[14%] w-[12%] sm:ml-[77%] ml-[65%] sm:scale-100 sm:mt-[1%] text-center">
                <div className="flex gap-4">
                    <img src={facebook} className="" />
                    <img src={insta} className="" />
                    <img src={x} className="" />
                </div>
                <h1 className="text-[#5E6282] sm:scale-100 scale-90 w-[4 5%] font-poppins font-medium sm:text-[1.125em]">Discover our App</h1>
                <div className="flex gap-2 sm:mt-2 sm:ml-3">
                <img src={playstore} className="" />
                <img src={appstore} className="" />
                </div>
            </div>
        </div>
        <div>
            <h1 className="hidden sm:block absolute mt-[10%] -ml-[27%] font-poppins font-medium text-[#5E6282]">
                All rights reserved@jadoo.co
            </h1>
        </div>
    </div>
  )
}

export default Footer