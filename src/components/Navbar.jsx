import { useState } from "react";
import { Jadoo } from "../assets"


const Navbar = () => {

    const [selectedValue, setSelectedValue] = useState("option1");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


return (
    <div className="text-[#212832] flex justify-evenly sm:p-12 w-full sm:gap-[18%] gap-[50%] p-4 sm:mb-[2em]">
        
            <div className="sm:ml-10 ml-8">
                <img src={Jadoo} className="hover:cursor-pointer" />
            </div>
            <p className="text-3xl sm:hidden hover:cursor-pointer">&#9776;</p>
            <div className="hidden sm:flex gap-[4em] items-baseline font-semibold font-noto sm:text-lg">
                <ul className="flex justify-evenly items-baseline gap-[4em] font-semibold font-noto">
                    <li className="hover:cursor-pointer hover:scale-105">Destinations</li>
                    <li className="hover:cursor-pointer hover:scale-105">Hotels</li>
                    <li className="hover:cursor-pointer hover:scale-105">Flights</li>
                    <li className="hover:cursor-pointer hover:scale-105">Bookings</li>
                    <li className="hover:cursor-pointer hover:scale-105">Login</li>
                    <button className="border-2 border-black p-2 rounded-md h-fit w-[7rem] hover:scale-105">Sign Up</button>
                </ul>
                <div>
                    <select className="bg-transparent border-none w-[50%] hover:cursor-pointer hover:scale-105" id="dropdown" value={selectedValue} onChange={handleChange}>
                            <option value="" disabled>
                            Select an option
                            </option>
                            <option value="option1">EN</option>
                            <option value="option2">FR</option>
                            <option value="option3">ES</option>
                        </select>
                </div>
            </div>                
    </div>
    )
}

export default Navbar