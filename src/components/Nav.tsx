import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import "../index.css";


export default function NavBar() {

    const {contextSafe} = useGSAP();

    useGSAP(() => {
        gsap.to(".text" , {
                scaleY: 1,
                stagger: 0.05
            })
    } , [])
    

    const letsTalkRef = useRef(null);
    const letsTalkSmRef = useRef(null);
    const menueRef = useRef(null);
    const [isMenueOpen , setIsMenueOpen] = useState(true);



    const LetsTalkMove =  contextSafe(() => {
            gsap.fromTo(letsTalkRef.current , {
                transform: "translateX(-11%)",
                duration: 0.5,
                delay: 0.1
            }, {
                transform: "translateX(11%)",
                duration: 0.5,
                delay: 0.1
            } )
        });

    const LetsTalkMoveBack =  contextSafe(() => {
            gsap.fromTo(letsTalkRef.current , {
                transform: "translateX(11%)",
                duration: 0.5,
                delay: 0.1
            }, {
                transform: "translateX(-11%)",
                duration: 0.5,
                delay: 0.1
            } )
        });


    const LetsTalkMoveSm =  contextSafe(() => {
            gsap.fromTo(letsTalkSmRef.current , {
                transform: "translateX(-13%)",
                duration: 0.5,
                delay: 0.1
            }, {
                transform: "translateX(13%)",
                duration: 0.5,
                delay: 0.1
            } )
        });

    const LetsTalkMoveSmBack =  contextSafe(() => {
            gsap.fromTo(letsTalkSmRef.current , {
                transform: "translateX(13%)",
                duration: 0.5,
                delay: 0.1
            }, {
                transform: "translateX(-13%)",
                duration: 0.5,
                delay: 0.1
            } )
        });


    const toggleMenueBar = contextSafe(() => {
        if(isMenueOpen){
            // close menue
            setIsMenueOpen(false);
            const tl = gsap.timeline();
            tl.to(".t1" , {
                scaleY: 0,
                stagger: -0.05
            });
            tl.to(menueRef.current ,  {
                scaleY: 0,
                ease: "expoScale(0.5,7,none)",
            });
            
            
        }else {
            // open menue
            setIsMenueOpen(true);
            const tl1 = gsap.timeline();
            tl1.to(menueRef.current , {
                scaleY : 1,
                duration: 0.4,
                ease: "expoScale(0.5,7,none)",
            });
            tl1.to(".t1" , {
                scaleY: 1,
                stagger: 0.05
            })
            
        }
    })


    return <nav className=" w-full h-auto bg-transparent fixed top-0 left-0  ">
        <div className=" relative z-50 flex items-center justify-between px-6 md:px-8 lg:px-10 py-5">
            <div className="nav-text">The Growth Accelerator</div>
            <div className="hidden md:block ">
                <div className="flex items-center justify-between gap-2">
                    <p className=" text-gray-400 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-600 after:ease-linear cursor-pointer ">Home</p>
                    <p className="nav-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-600 after:ease-linear cursor-pointer ">Work</p>
                    <p className="nav-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-600 after:ease-linear cursor-pointer ">About</p>
                    <p className="nav-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-600 after:ease-linear cursor-pointer ">Services</p>
                    <p className="nav-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-600 after:ease-linear cursor-pointer ">Contact</p>
                </div>
            </div>
            <div onMouseOver={LetsTalkMove} onMouseLeave={LetsTalkMoveBack} className="hidden md:block overflow-hidden  "><p  ref={letsTalkRef} className="nav-text translate-x-[-11%] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-500 after:ease-linear after:delay-300 cursor-pointer">↗ Let's talk ↗</p></div> 

            {/**   small screen    */}
            <div 
            onClick={toggleMenueBar}
            className="block md:hidden px-4 py-3 text-center bg-[#212121]/60 cursor-pointer ">
                {
                    isMenueOpen ? "Close" : "Menue"
                }
            </div>
        </div>
        <div ref={menueRef} className="block md:hidden w-full origin-top  h-auto bg-[#101010] absolute top-0 left-0 z-40  px-10 py-28 font-reg ">
                
                <div onMouseOver={LetsTalkMoveSm} onMouseLeave={LetsTalkMoveSmBack} className="overflow-hidden inline-block "><p ref={letsTalkSmRef} className=" text-xl translate-x-[-13%] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-500 after:ease-linear after:delay-300 cursor-pointer  inline-block">↗ Let's talk ↗</p></div>

                <div className="text-5xl my-16 flex flex-col items-start justify-start gap-3 cursor-pointer">
                    <p className="t1 text-gray-400  overflow-hidden origin-bottom " >Home</p>
                    <p className="t1 overflow-hidden origin-bottom" >Work</p>
                    <p className="t1 overflow-hidden origin-bottom" >About</p>
                    <p className="t1 overflow-hidden origin-bottom" >Services</p>
                    <p className="t1 overflow-hidden origin-bottom" >Contact</p>
                </div>

                <div className="text-2xl  flex flex-col items-start gap-3 ">
                    <p className="t1 overflow-hidden origin-bottom">Instagram</p>
                    <p className="t1 overflow-hidden origin-bottom">LinkedIn</p>
                </div>
        </div>
    </nav>
}