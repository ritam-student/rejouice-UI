import { useGSAP } from "@gsap/react";
import BackgroundVideo from "./BackgroundVideo";
import Hero from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Nav";
import WeAre from "./WeAre";
import Highlights from "./Highlights";
import OurApproach from "./OurApproach";



gsap.registerPlugin(ScrollTrigger);


export default function Main() {

    const {contextSafe} = useGSAP();


    useGSAP(() => {
        gsap.to(".upar" , {
            transform: "translateY(-40%)",
            scrollTrigger : {
                trigger : ".middle",
                scroller: "body",
                scrub: 4,
                start: "top 40%",
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        })

        gsap.to(".bottom" , {
            transform: "translateY(-30%)",
            scrollTrigger : {
                trigger : ".bottom",
                scroller: "body",
                scrub: 4,
                end: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })
    });



    interface MouseEventWithClient extends React.MouseEvent<HTMLDivElement, MouseEvent> {
        clientX: number;
        clientY: number;
    }

    const mouseEntered = contextSafe((e: MouseEventWithClient) => {
        gsap.to(".moving-cursor", {
            opacity: 1,
            left: e.clientX,
            top: e.clientY
        });
    })


    const mouseLeaved = contextSafe(() => {
        gsap.to(".moving-cursor" , {
            opacity: 0,
            duration: 1
        })
    })





    return <div className="w-full h-auto bg-black">
        
        <div className="relative z-50">
            <NavBar />
        </div>
        
        <div className="z-30 relative upar">
            <Hero/>
        </div>
        <div onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved} className="z-20 -translate-y-24 middle overflow-x-hidden">
            <div className="relative h-full w-full">
                <BackgroundVideo />
                <div className="absolute inset-0 text-3xl md:text-5xl text-white flex items-center justify-center "><h2 className=" relative after:bg-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-200 after:ease-linear cursor-pointer">Showreel</h2></div>
                <div  className="moving-cursor fixed top-0 left-0 opacity-0 bg-violet-500 h-[40px] w-[40px] flex items-center justify-center rounded-[100%] text-center ">play</div>
            </div>
        </div>
        <div className="z-30 relative -translate-y-24 bottom w-full  h-auto">
            <WeAre />
        </div>
        <div className="-translate-y-24 ">
            <Highlights />
        </div>
        <OurApproach />
        
    </div>
}