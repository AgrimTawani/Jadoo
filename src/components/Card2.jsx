/* eslint-disable react/prop-types */

const Card = (props) => {

    return (
        <div className="p-6 shadow-lg transition-shadow rounded-[30px] flex flex-col items-center text-center gap-4 sm:w-[20%] sm:mt-0 mt-3 bg-white">
             
            <img src={props.icon} className="scale-95 mt-3"/>
            <div className="flex flex-col items-center text-center gap-4 mt-3">
                <p className="font-OpenSans font-semibold text-[1.5em] text-[#1E1D4C]">{props.title}</p>
                <p className="font-poppins text-[1em] font-medium leading-[26px] text-[#5E6282] w-[70%]">{props.paragraph}</p>
            </div>
        </div>
    );
    };
    
    export default Card;
    