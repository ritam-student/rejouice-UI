import { useGSAP } from "@gsap/react";
import BackgroundVideo from "./BackgroundVideo";
import Hero from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Nav";
import WeAre from "./WeAre";
import Highlights from "./Highlights";
import OurApproach from "./OurApproach";
import Footer from "./Footer";
import { useEffect } from "react";



gsap.registerPlugin(ScrollTrigger);


export default function Main() {

    const {contextSafe} = useGSAP();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            document.body.style.overflow = "";
        } , 6000);

        return () => {
            document.body.style.overflow = "";
        }
    })


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

        gsap.to(".loader" , {
            transform: "translateY(-100%)",
            duration: 3,
            delay: 3
        })

        gsap.to(".loader-text" , {
            opacity: 0,
            stagger: 0.15,
            delay: 1
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





    return <div className="relative">
        <div className="w-full h-auto bg-black overflow-hidden">
        
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
            <Footer />
            
        </div>

        <div
            className="loader absolute h-screen w-full overflow-y-hidden text-black inset-0 z-[999] bg-white flex items-center justify-center text-2xl"
            style={{ overflow: "hidden", position: "fixed", top: 0, left: 0 }}
        >
            <h2>
                <span className="loader-text">T</span>
                <span className="loader-text">o</span>
                <span className="loader-text">m</span>
                <span className="loader-text">m</span>
                <span className="loader-text">o</span>
                <span className="loader-text">r</span>
                <span className="loader-text">o</span>
                <span className="loader-text">w</span>
                <span className="loader-text">'</span>
                <span className="loader-text">s </span>
                <span className="loader-text"> B</span>
                <span className="loader-text">r</span>
                <span className="loader-text">a</span>
                <span className="loader-text">n</span>
                <span className="loader-text">d</span>
                <span className="loader-text"> , </span>
                <span className="loader-text">T</span>
                <span className="loader-text">o</span>
                <span className="loader-text">d</span>
                <span className="loader-text">a</span>
                <span className="loader-text">y .</span>
                <span className="loader-text">
                    <sup className="text-lg">TM</sup>
                </span>
                
            </h2>
        </div>
    </div>
    
}