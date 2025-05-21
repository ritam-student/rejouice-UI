import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";



export default function WeAre() {

    const {contextSafe} = useGSAP();
    const letsTalkRef = useRef(null);

    useGSAP(() => {
        const tl =  gsap.timeline();
        tl.fromTo(".text" , {
            opacity: 0,
            scaleY: 0
        }, {
            opacity: 1,
            scaleY: 1,
            stagger: 0.6,
            scrollTrigger: {
                trigger : ".parent",
                toggleActions: 'play reverse play reverse ',
                scrub : 5,
                start : "top 75%",
                end: "top 40%"
                

            }
        })

        tl.to(".underline" , {
            width: "100%" ,
            duration: 1
        })
    })

    const hovered = contextSafe(() => {
        gsap.fromTo(".underline" , {
            width: 0,
            duration: 2,
        } , {
            width: "100%",
            duration: 1.5,
            delay: 0.3
        })
    })

    const leaved = contextSafe(() => {
        gsap.fromTo(".underline" , {
            width: 0,
            duration: 2,
        } , {
            width: "100%",
            duration: 1.5,
            delay: 0.3
        })
    });



    
        const LetsTalkMove =  contextSafe(() => {
                gsap.fromTo(letsTalkRef.current , {
                    transform: "translateX(-11%)",
                    duration: 0.2,
                    delay: 0.1
                }, {
                    transform: "translateX(11%)",
                    duration: 0.2,
                    delay: 0.1
                } )
            });
    
        const LetsTalkMoveBack =  contextSafe(() => {
                gsap.fromTo(letsTalkRef.current , {
                    transform: "translateX(11%)",
                    duration: 0.2,
                    delay: 0.1
                }, {
                    transform: "translateX(-11%)",
                    duration: 0.2,
                    delay: 0.1
                } )
            });
    

    return <div className="h-auto w-full  bg-black ">
        <div className="pt-20  px-6 sm:px-8 md:px-10 lg:px-14">
            <p className="parent text-3xl md:text-[56px] leading-[40px] md:leading-[65px] py-10 ">
                <span className=" text md:ml-[15vw] ">We</span>  <span className="text">blend</span> <span className="text">the</span> <span className="text ">power</span> <span className="text">of</span> <span className="text">strategy,</span>  <span className="text">design,</span> <span className="text">and</span> <span className="text">performance</span> <span className="text">marketing</span> <span className="text">to</span> <span className="text">transform</span> <span className="text">founders'</span> <span className="text">visions</span> <span className="text">into</span> <span className="text">remarkable</span> <span className="text">brands.</span> <span className="text"> See</span> 
                <span onMouseOver={hovered} onMouseLeave={leaved} className=" relative cursor-pointer text origin-bottom inline-block mx-2 "> our services. <div className="underline absolute bottom-0  left-0 bg-white w-0 h-[2px] "></div></span>
            </p>
            <div className="bg-gray-400 w-full h-[0.5px] mt-5 "></div>
            <div className="flex items-center justify-between py-20">
                <div className="w-1/2 h-full md:text-xl self-start mb-auto">Tomorrow’s brands, today.</div>
                <div className="w-1/2 h-full ">
                    <div className="w-[90%] md:w-[75%]  h-full  text-lg md:text-2xl">
                        We are a growth accelerator.
                        <br />
                        <br />
                        Since 2013, we have been recognized globally for helping founders build market-defining brands that drive sustainable revenue and shape culture.
                        <br />
                        <br />
                        In 2023, we launched our Venture Model to further support founders.
                        <br />
                        <br />
                        We partner with five clients a year to give each one the focus and care they deserve.
                    </div>
                    <div onMouseOver={LetsTalkMove} onMouseLeave={LetsTalkMoveBack} className="inline-block mt-8  overflow-hidden  "><p  ref={letsTalkRef} className="translate-x-[-11%] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-500 after:ease-linear after:delay-300 cursor-pointer text-xl md:text-2xl">↗ Learn more ↗</p></div> 
                </div>
            </div>
        </div>
    </div>
}