import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export default function OurApproach() {

    
    useGSAP(() => {
        gsap.to(".nav-text" , {
            color: "black",
            scrollTrigger: {
                trigger: ".approach",
                toggleActions: "play reverse play reverse",
                start: "top 3%"
            }
        })
    })

    return <div className="approach h-[200vh] w-full bg-white text-black ">
        our approach
    </div>
}