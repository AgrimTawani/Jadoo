import { facebook, insta, x, playstore, appstore } from "../assets"


const Footer = () => {
  return (
    <div className="sm:-ml-0 -ml-[5%] flex flex-row gap-5 pb-[10%] pl-[11%] items-center">
        <div className="sm:scale-100 scale-75 flex sm:flex-row flex-col gap-10 justify-around sm:-ml-0 -ml-[15%] items-baseline ">   
            <div className="flex flex-col gap-5 sm:w-auto w-[50%]">
                <h1 className="font-poppins text-[#181E4B] font-bold text-[2.75em]">Jadoo.</h1> 
                <p className="font-poppins text-[0.815em] text-[#5E6282] font-medium sm:w-[60%]">Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div id="Nav Col" className="flex flex-row justify-around sm:gap-28 gap-10">
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

            <div className="absolute sm:w-[14%] sm:ml-[130%] ml-[65%] sm:scale-100 sm:mt-[1%] -mt-[45%] text-center">
                <div className="flex gap-4">
                    <img src={facebook} className="" />
                    <img src={insta} className="" />
                    <img src={x} className="" />
                </div>
                <h1 className="text-[#5E6282] sm:pb-[2%] pb-[5%] sm:scale-100 scale-100 w-[130%] font-poppins font-medium text-[1.125em]">Discover our App</h1>
                <div className="flex gap-2 sm:mt-2 sm:ml-3">
                <img src={playstore} className="" />
                <img src={appstore} className="" />
                </div>
            </div>
        </div>
        <div>
            <h1 className="absolute sm:scale-100 sm:mt-[10%] mt-[30%] sm:-ml-[27%] ml-[27%]  font-poppins font-medium text-[#5E6282]">
                All rights reserved@jadoo.co
            </h1>
        </div>
    </div>
  )
}

export default Footer