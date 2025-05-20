import Rejouice from "./UI/Rejouice";


export default function Hero() {
    return <div className="flex flex-col justify-between h-auto w-full  gap-[40px] sm:gap-[60px] md:gap-[80px] lg:gap-[100px] "> 
        <div className="py-24  ">
            <Rejouice />
        </div>
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-10 py-5 ">
            <div className="flex items-center justify-start gap-16">
                <p className="">Strategy, Design, <br />and Performance.</p>
                <p className="">Two Engagement <br />Models: Cash or Equity.</p>
            </div>
            <div className="">arrow</div>
        </div>
    </div>
}