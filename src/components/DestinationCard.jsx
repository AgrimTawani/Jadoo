/* eslint-disable react/prop-types */
import { arrow } from "../assets";

const Card = (props) => {
  return (
    <div className="absolute object-contain sm:bottom-[28%] bottom-[26%] rounded-b-3xl left-[16.5%] p-5 bg-white w-[67%] sm:h-[20%] h-[22%] pb-2">
      <div className="flex justify-between gap-3">
      <h2 className="text-[#5E6282] font-medium sm:text-[1.125em] text-[0.88em] font-poppins">{props.city}</h2>
      <p className="text-[#5E6282] font-medium sm:text-[1.125em] text-[0.88em] font-poppins">{props.price}</p>
      </div>
      <div className="flex pt-4 gap-3">
      <img src={arrow} alt="" />
      <p className="text-[#5E6282] font-medium sm:text-[1em] text-[0.79em] font-poppins">{props.duration}</p>
      </div>
    </div>
  );
};

const DestinationCard = (props) => {
  return (
    <div className="relative overflow-hidden">
      <img src={props.img} className="object-cover" />
      <Card
        city={props.city}
        price={props.price}
        duration={props.duration}
      />
    </div>
  );
};

export default DestinationCard;
