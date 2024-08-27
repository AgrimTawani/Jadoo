import { lg1, lg2, lg3, lg4, lg5 } from "../assets"

const Logos = () => {
    return (
        <div className="flex gap-3 justify-evenly sm:mt-[10%] pb-10">
            <img src={lg1} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:shadow-lg" />
            <img src={lg2} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:shadow-lg" />
            <img src={lg3} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:shadow-lg" />
            <img src={lg4} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:shadow-lg" />
            <img src={lg5} className="grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:shadow-lg" />
        </div>
    )
}

export default Logos