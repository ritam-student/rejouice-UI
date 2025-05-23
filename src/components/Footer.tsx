
import { useGSAP } from "@gsap/react";
import Rejouice from "./UI/Rejouice";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";


export default function Footer() {

    useGSAP(() => {
        if(window.innerWidth > 768) {
            gsap.to(".lett" , {
                color: "white",
                scrollTrigger: {
                    trigger: ".div1",
                    toggleActions: "play reverse play reverse",
                    scroller: "body",
                    markers :  true
                }
            })
        }

        gsap.to(".div1" , {
            transform: "translateY(4%)",
            scrollTrigger: {
                trigger: ".div1",
                scroller: "body",
                scrub: 3
            }
        })
            
    })



    return <footer className="div1 w-full h-screen px-6 md:px-8 lg:px-10 -translate-y-[10%] ">
        <div className="w-full h-full flex flex-col ">
            {/**    small screen  3 parts , 1 in common */}

            <div className="block md:hidden">
                <div className="flex flex-col justify-between w-full h-full  ">
                    <div className="mt-4 flex items-center justify-between w-full h-auto">
                        <div className="flex flex-col items-start justify-between gap-3 text-4xl sm:text-5xl">
                            <h2>Home</h2>
                            <h2>Work</h2>
                            <h2>About</h2>
                            <h2>Services</h2>
                            <h2>Contact</h2>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-20 text-2xl sm:text-3xl">
                            <div>
                                <h4>Instagram ↗</h4>
                                <h4>LinkedIn ↗</h4>
                                <h4>New Business:</h4>
                                <h4>hello@rejouice.com</h4>
                            </div>
                            <div>
                                <h4>Terms of use</h4>
                                <h4>©13—25</h4>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 text-xl sm:text-2xl mt-20 ">
                        <div>
                            Sign up for our newsletter <br />(No spam)
                        </div>
                        <div className="relative ">
                            <input type="text" placeholder="Email" className="bg-black  w-full py-3 px-2 outline-none border-b-2 border-gray-400" />
                            <FaArrowRight className="absolute right-0 top-[50%] translate-y-[-50%] text-gray-400 " />
                        </div>
                        
                    </div>
                </div>
            </div>

            {/**    for medium and large screen   */}

            <div className="hidden md:block h-auto w-full">
                <div className="flex flex-col items-start justify-start mt-8 gap-6 h-auto w-full">
                    {/**  part 1   */}
                    <div className="flex items-start justify-between h-auto w-full">
                        <div className="w-1/2 h-auto">
                            <h2 className="text-3xl">Do it once. Do it right.</h2>
                        </div>
                        <div className="flex justify-between gap-36">
                            <div className="flex flex-col items-start justify-between gap-2 ">
                                <h2>Home</h2>
                                <h2>Work</h2>
                                <h2>About</h2>
                                <h2>Services</h2>
                                <h2>Contact</h2>
                            </div>
                            <div className="flex flex-col justify-start gap-2">
                                <h4>Instagram ↗</h4>
                                <h4>LinkedIn ↗</h4>
                            </div>
                        </div>
                    </div>
                    {/**   part  2   */}
                    <div className="h-auto w-full">
                        <h4>New Business:</h4>
                        <h4>hello@rejouice.com</h4>
                    </div>
                    {/**  part 3   */}
                    <div className="h-auto w-full flex justify-between">
                        <div className="w-[30%] h-auto">
                            <div>
                                Sign up for our newsletter (No spam)
                            </div>
                            <div className="relative ">
                                <input type="text" placeholder="Email" className="bg-black  w-full py-3 px-2 outline-none border-b-2 border-gray-400" />
                                <FaArrowRight className="absolute right-0 top-[50%] translate-y-[-50%] text-gray-400 " />
                            </div>
                        </div>
                        <div className=" h-auto flex justify-between gap-20">
                            <div>
                                <h4>San Diego—USA</h4>
                                <h4>Paris—France</h4>
                            </div>
                            <div>
                                <h4>Terms of use</h4>
                                <h4>©13—25</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/***    common part    */}
            <div className="slef-end mt-auto mb-3 last-div ">
                <Rejouice />
            </div>
        </div>
    </footer>
}