import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function Part2() {

    const {contextSafe} = useGSAP();

    useGSAP(() => {
        gsap.to(".video-box div" , {
            scale: "1.4",
            scrollTrigger: {
                trigger: ".video-box",
                scrub: 4,
                toggleActions: "play reverse play reverse",
                start: "top 80%",
                end: "top 50%"
            }
        })
    })

    const pushTextDown = contextSafe(() => {
        gsap.to(".inner-content" , {
            transform: "translateY(0)",
            opacity: 0,
            duration: 0.6,
        })
        gsap.to(".inner-content1" , {
            transform: "translateY(0)",
            opacity: 1,
            duration: 0.6,
        })
    })



    const pushTextUp = contextSafe(() => {
        gsap.to(".inner-content1" , {
            transform: "translateY(-160%)",
            opacity: 0,
            duration: 0.6,
        })
        gsap.to(".inner-content" , {
            transform: "translateY(-160%)",
            opacity: 1,
            duration: 0.6,
        })
    })



    return <div className="pt-10 md:pt-20 lg:pt-32 ">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16">Our approach.</h2>
        <div className="w-full h-auto text-xl md:text-3xl">
            <div className="flex items-start justify-start w-full h-auto py-5 mt-4 border-t-[1px] border-gray-400 ">
                <div className="w-1/2 h-auto"><h3 className="h-auto w-[50%]">A simple philosophy: quality over quantity.</h3></div>
                <div className="w-1/2 h-auto  "><h3 className="h-auto w-full md:w-[75%] lg:w-[60%] ">We build brands that set new benchmarks. To do so, we don’t do volume. We partner with only five clients a year, ensuring unmatched focus, precision, and impact. Every detail is crafted, every decision strategic, and every outcome transformative.</h3></div>
            </div>
            <div className="flex items-start justify-start w-full h-auto py-5 mt-4 border-t-[1px] border-gray-400 ">
                <div className="w-1/2 h-auto"><h3 className="h-auto w-[50%]">Performance & emotion. You need both.</h3></div>
                <div className="w-1/2 h-auto  "><h3 className="h-auto w-full md:w-[75%] lg:w-[60%] ">Data is vital. Fostering an emotional connection with your audience is equally vital if you want to drive retention and advocacy. That’s why we create brands that not only captivate but also deliver measurable and sustainable growth.</h3></div>
            </div>
        </div>

        {/**   video section   */}
        <div className="w-full h-auto my-28 video-box flex items-center justify-center overflow-hidden">
            <div className="w-[75%] h-[75%] overflow-hidden flex items justify-center">
                <video src="/video/REJOUICE-PORTFOLIO-LOOP-PROJECTS (1).mp4" loop muted autoPlay className="w-full h-full object-cover"></video>
            </div>
        </div>

        {/**  last section   */}
        <div className="w-full h-auto  text-center text-2xl md:text-3xl lg:text-4xl">
            <div onMouseOver={pushTextUp} onMouseLeave={pushTextDown} className="cursor-pointer box w-auto h-[70px] overflow-hidden text-center inline-block">
                <h2 className="inner-content1 relative my-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-black inline-block ">Get to know us</h2>
                <br />
                <h2 className="inner-content relative my-3 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.5px] after:bg-black inline-block ">About Us</h2>
            </div>
        </div>
    </div>
}