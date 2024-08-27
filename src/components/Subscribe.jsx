import { useState } from "react"
import { Bg, Tele,  Mail } from "../assets"


const Subscribe = () => {

    const [mail, SetMail] = useState("")

    const handleChange = (e) =>{
        SetMail(e.target.value);
    }

    const handleClick = () => {
        alert("Chala gaya mail")
        SetMail("")
    }
  return (
    <div className="pb-[2%]">
        <h1 className="absolute mt-[6%] sm:ml-[16%] text-[#5E6282] font-bold sm:text-[2.25em] text-[%40] sm:w-[65%] text-center">Subscribe to get information, latest news and other
        interesting offers about Jadoo</h1>
        <div className="flex justify-center p-8 mt-[10%] pb-[10%]">
            <img src={Tele} className="absolute hidden sm:block opacity-[100%] ml-[75%] -mt-[3%]"/>
            <img src={Bg} className="sm:w-[80%] w-[%] sm:scale-110 scale-150 sm:-ml-[8%]" />
        </div>
        <div className="flex sm:gap-5 gap-9 absolute w-[50%] sm:scale-100 scale-75 sm:-mt-[18%] -mt-[23%]  sm:ml-[27%] ml-[15%]">
            <div className="bg-white flex sm:px-[1.75em] px-[1em] w-[100%] sm:py-[0.35em] rounded-lg">
                <img src={Mail} className="sm:scale-90 scale-75" />
                <input type="email" value={mail} onChange={handleChange} placeholder="Your Email" className="placeholder:opacity-25 border-none outline-none sm:ml-[0%] sm:w-[100%] p-[1em]"/>
            </div>
            <button onClick={handleClick} className="sm:px-[0.75em] px-[1em] font-OpenSans font-semibold sm:py-[0.35em] rounded-lg text-white sm:text-[1.1em] bg-[#FF5349] sm:w-[30%] z-[20] ">Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe