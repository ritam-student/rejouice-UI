import Rejouice from "./UI/Rejouice";
import { FaArrowDown } from "react-icons/fa6";


export default function Hero() {
    return <div className="flex bg-black flex-col justify-between h-auto w-full  gap-[40px] sm:gap-[60px] md:gap-[80px] lg:gap-[100px] z-30 "> 
        <div className="py-24  ">
            <Rejouice />
        </div>
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-10 py-5 text-[10px] sm:text-sm ">
            <div className="flex items-center justify-between gap-5 md:gap-16">
                <p className="">
                    <span>Strategy,</span> <span>Design,</span> <br /><span>and</span> <span>Performance.</span>
                </p>
                <p className="">
                    <span>Two</span>
                    <span> Engagement</span>
                    <br />
                    <span>Models :</span>
                    <span> Cash</span>
                    <span> or</span>
                    <span> Equity.</span>   
                </p>
            </div>
            <div className=""><FaArrowDown /></div>
        </div>
    </div>
}