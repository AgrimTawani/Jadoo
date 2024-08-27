import { useState } from "react";
import { dots, face, Testi, UpDown} from "../assets"


const Testimonials = () => {

  const [firstCardStyles, setFirstCardStyles] = useState({
    marginTop: "-13%",
    marginLeft: "2%",
    zIndex: 20,
    position: "relative",
  });

  const [secondCardStyles, setSecondCardStyles] = useState({
    marginTop: "-17%",
    marginLeft: "7%",
    zIndex: 10,
    position: "absolute",
  });

  const swapStyles = () => {
    setFirstCardStyles(secondCardStyles);
    setSecondCardStyles(firstCardStyles);
  };

  return (
    <div className="flex sm:flex-row flex-col mt-[10%]"> 

    <div className="flex flex-col sm:-mt-[10%] mt-[20%] sm:p-12 pl-[11%] sm:ml-[10%] ">
        <h1 className='font-poppins font-semibold text-[#5E6282] sm:text-[1.225em] pb-5'>TESTIMONIALS</h1>
        <h1 className='font-Volkhov font-bold text-[#14183E] sm:text-[3.225em] text-[2em] sm:w-[100%] w-fit sm:ml-0 ml-[0%]'>What People Say About Us.</h1>

        <img src={dots} className="hidden sm:block w-[13%] mt-[13%]" />
    </div>
    
    <div className="relative flex justify-center">
      <div className="mt-[10%] -ml-[8%] hidden sm:block">
      <div className="p-10 shadow-lg rounded-2xl w-[60%] bg-white" style={{
          marginTop: firstCardStyles.marginTop,
          marginLeft: firstCardStyles.marginLeft,
          zIndex: firstCardStyles.zIndex,
          position: firstCardStyles.position,
        }}>
        <img src={face} className="absolute -mt-[15%] -ml-[9%]" />
        <p className="text-[#5E6282] font-poppins font-medium text-[1em] leading-[2em]">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
        <div className="mt-5">
          <h1 className="text-[#5E6282] font-poppins font-semibold text-[1.125em]">Mike Taylor</h1>
          <p className="text-[#5E6282] font-poppins font-medium text-[0.875em]">Lahore, Pakistan</p>
        </div>
      </div>

      <div className="p-10 shadow-lg rounded-2xl w-[60%] bg-white" style={{
          marginTop: secondCardStyles.marginTop,
          marginLeft: secondCardStyles.marginLeft,
          zIndex: secondCardStyles.zIndex,
          position: secondCardStyles.position,
        }}>
        <img src={face} className="absolute -mt-[12%] -ml-[1%]" />
        <p className="text-[#5E6282] font-poppins font-medium text-[1em] leading-[2em]">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
        <div className="mt-5">
          <h1 className="text-[#5E6282] font-poppins font-semibold text-[1.125em]">Chris Thomas</h1>
          <p className="text-[#5E6282] font-poppins font-medium text-[0.875em]">CEO Of Red Button   </p>
        </div>
      </div>
      </div>
      <div className="sm:hidden mt-[10%]">
        <img src={Testi} alt="" />
      </div>
      <div className="-ml-[50%] hidden sm:block">
        <img src={UpDown} onClick={swapStyles} />
      </div>
    </div>

    {/* <img src={dots} className="sm:hidden w-[13%] -mt-[13%] ml-[40%]" /> */}
    </div>

  )
}

export default Testimonials