import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Swiper, SwiperSlide } from 'swiper/react';


import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/pagination.css";


// import required modules
import { Autoplay} from 'swiper/modules';
import Part2 from "./OurApproachPart2";


export default function OurApproach() {

    
    useGSAP(() => {
        gsap.to(".nav-text" , {
            color: "black",
            scrollTrigger: {
                trigger: ".approach",
                toggleActions: "play reverse play reverse",
                start: "top 3%",
            }
        })
    })

    return <div className="approach h-auto w-full bg-white text-black py-5">
        {/**  part 1   */}
        <div className="hidden lg:block">
            <div className=" w-full h-auto flex items-center justify-between gap-4   px-6 md:px-8 lg:px-10 ">
                <div className="h-[70px]  w-[90px] scale-125 object-cover object-center overflow-hidden ">
                    <img src="/image/company-1.svg" alt="company-1" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-2.svg" alt="company-2" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-3.svg" alt="company-3" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-4.svg" alt="company-4" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-5.svg" alt="company-5" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px] scale-150  object-cover object-center overflow-hidden ">
                    <img src="/image/company-6.svg" alt="company-6" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-7.svg" alt="company-7" className="h-full w-full" />
                </div>
                <div className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-8.svg" alt="company-8" className="h-full w-full" />
                </div>
            </div>
        </div>

        <div className="block lg:hidden px-6 md:px-8  py-14 md:py-20">
            <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640 : {
                        slidesPerView: 4.5,
                        spaceBetween: 25,
                    },
                    768 : {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="h-[70px]  w-[90px] scale-125 object-cover object-center overflow-hidden ">
                    <img src="/image/company-1.svg" alt="company-1" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-2.svg" alt="company-2" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden">
                    <img src="/image/company-3.svg" alt="company-3" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-4.svg" alt="company-4" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden  ">
                    <img src="/image/company-5.svg" alt="company-5" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px] scale-150  object-cover object-center overflow-hidden ">
                    <img src="/image/company-6.svg" alt="company-6" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-7.svg" alt="company-7" className="h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="h-[70px]  w-[90px]  object-cover object-center overflow-hidden ">
                    <img src="/image/company-8.svg" alt="company-8" className="h-full w-full" />
                </SwiperSlide>
                
            </Swiper>
        </div>

        <div className="w-auto h-[0.5px] bg-gray-400 mx-6 md:mx-8 lg:mx-10 my-8 "></div>

        {/**    part 2   */}

        <div className="px-6 md:px-8 lg:px-10">
            <div className=" w-auto h-auto flex items-center justify-between py-6 md:text-xl">
                <div>Rejouice at a Glance.</div>
                <div className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] cursor-pointer after:bg-black hover:after:w-full after:transition-all after:duration-200 after:ease-out ">hello@rejouice.com</div>
            </div>

            {/**  moving slides  */}

            <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640 : {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768 : {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1024 : {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper h-auto w-full"
                >
                    <SwiperSlide className="rounded-lg overflow-hidden w-[250px] h-[300px] md:w-[400px] lg:w-[460px] lg:h-[500px]  md:h-[400px] object-cover object-center  ">
                        <img src="/image/ring.avif" alt="ring" className="w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-[250px] h-[300px] md:w-[400px] lg:w-[460px] lg:h-[500px]  md:h-[400px] object-cover object-center  ">
                        <img src="/image/chair.avif" alt="ring" className="w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-[270px] h-[195px] md:w-[450px] lg:w-[510px] lg:h-[500px]  md:h-[400px] text-white bg-black ">
                        <div className="flex flex-col justify-between gap-24 px-[10%] py-[10%] h-full w-full md:text-xl lg:text-2xl">
                            <div>
                                <p>2 Engagement <br />Models</p>
                                <p className="text-gray-400 md:text-2xl lg:text-3xl">Classic / Venture</p>
                            </div>
                            <div className="cursor-pointer">Learn more</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-[270px] h-[180px] md:w-[450px] lg:w-[510px] lg:h-[400px]  md:h-[300px] text-black bg-[#F7F7F7]">
                            <div className="flex flex-col justify-between gap-24 px-[10%] py-[10%] h-full w-full md:text-xl lg:text-2xl">
                                <div>
                                    <p>Driving 150%</p>
                                    <p className="text-gray-500 md:text-2xl lg:text-3xl">LTV:CAC in average</p>
                                </div>
                                <div className="self-end md:text-3xl lg:text-4xl">150%</div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-[250px] h-[320px] md:w-[400px] lg:w-[460px] lg:h-[520px]  md:h-[420px] ">
                            <div className="relative  overflow-hidden w-full h-full">
                                <video src="/video/smallvideo.mp4" muted autoPlay loop className="w-full h-full object-cover"></video>
                                <div className="absolute inset-0 text-white px-[10%] py-[10%] flex justify-between gap-20 w-full h-full md:text-2xl">
                                    <p>Catalyzed ~71,000 <br />pre-orders <span className="text-gray-300">after brand <br />reveal</span> <br />(approximately $5.68 billion). </p>
                                    <div className="self-end object-cover object-center overflow-hidden">
                                        <img src="/image/rivian-white.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-[270px] h-[195px] md:w-[450px] lg:w-[510px] lg:h-[400px] shrink-0 md:h-[300px] text-black bg-[#F7F7F7]">
                            <div className="flex flex-col justify-between gap-24 px-[10%] py-[10%] h-full w-full md:text-xl">
                                <div>
                                    <p>$5M+ in new <br />business</p>
                                    <p className="text-gray-400 md:text-2xl">generated within 90 <br />days of launch</p>
                                </div>
                                <div className="cursor-pointer">Learn more</div>
                            </div>
                    </SwiperSlide>
                </Swiper>

            <Part2 />
            
        </div>

    </div>
}