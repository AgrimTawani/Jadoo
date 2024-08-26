import { Traveller, plane, red, Play } from "../assets"

const Hero = () => {
  return (
    <div className="flex justify-center w-screen">
{/* Hero Description */}
        <div>
            <div className="ml-10 p-12 pt-18">
                <p className="uppercase font-poppins text-[#DF6951] sm:text-[1.25em] sm:leading-[90px] w-screen sm:w-auto sm:ml-0 ml-6 font-bold">best destinations around the world</p>
                <h1 className="pt-2 sm:text-[5.25em] text-[2.75em] h-fit font-Volkhov text-[#181E4B] sm:w-auto w-[90%] sm:ml-0 ml-4 sm:leading-[95px]">
                    Travel, enjoy and live a new and full life
                </h1>
                <img src={red} className="absolute sm:-mt-[14%] -mt-[35%] z-[-1] sm:ml-[18%]"/>
                <h1 className="font-poppins text-[#5E6282] font-medium text-[1em] w-[70%] drop-shadow-2xl leading-[30px] mt-5 sm:ml-0 ml-5">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. 
                </h1>
                <div className="flex sm:ml-0 ml-5 sm:mt-0 mt-3 items-baseline gap-[90px]">
                  <button className="bg-[#F1A501] sm:mt-8 sm:p-5 p-3 sm:px-8 px-3 rounded-xl text-white sm:text-xl text-md font-noto font-medium hover:scale-105 transition-transform">Find out more</button>
                  
                  <p className="font-poppins text-[#686D77] font-medium hover:scale-105 transition-transform">Play Demo</p>
                  
                  <img src={Play} className=" absolute sm:mt-[2%] sm:ml-[13%] -mt-[4%] ml-[35%] hover:cursor-pointer hover:scale-105 transition-transform" />
                </div>
            </div>
        </div>
{/* Hero Traveler Img */}
        <div className="hidden sm:block sm:w-fit sm:mr-[11%] sm:-ml-[11%] sm:pt-5 sm:pr-5 ">
          <img src={plane} className="absolute ml-[4%]" />
          <img src={Traveller} className="w-screen scale-125 overflow-x-hidden z-20" />
          <img src={plane} className="absolute -mt-[44%] ml-[41%] z-[-1]" />

        </div>
    </div>
  )
}

export default Hero