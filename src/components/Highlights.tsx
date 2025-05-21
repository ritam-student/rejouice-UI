
export default function Highlights() {
    return <div className="w-full h-auto  px-1 md:px-10 lg:px-14 ">
        <div>
            {/**  top   */}
            <div className="flex items-center justify-between">
                <div>Highlights</div>
                <div>↗ See the work ↗</div>
            </div>
            {/**  middle video */}

                {/**  for small screens  */}
                <div className="block md:hidden">
                    <div className="flex items-center justify-between gap-2 h-auto py-4 w-full">
                        <div className="w-1/3 h-auto object-cover object-center  overflow-hidden ">
                            <img src="/image/h-1.avif" alt="h1 image" className="h-full w-full " />
                        </div>
                        <div className="w-1/3 h-auto object-cover object-center overflow-hidden ">
                            <img src="/image/h-2.avif" alt="h2 image" className="h-full w-full" />
                        </div>
                        <div className="w-1/3 h-auto object-cover object-center overflow-hidden ">
                            <img src="/image/h-3.avif" alt="h3 image" className="w-full h-full" />
                        </div>
                    </div>
                </div>

            {/**   for large screen   */}

            <div className="hidden md:block">
                <div className="flex flex-col gap-3 mt-8">
                    <div className="w-full h-auto object-cover object-center overflow-hidden">
                        <img src="/image/h-1.avif" alt="h1 image" className="h-full w-full" />
                    </div>
                    <div className="flex items-center justify-between gap-2 w-full h-auto">
                        <div className="w-1/2 h-auto object-cover object-center overflow-hidden">
                            <img src="/image/h-2.avif" alt="h2 image" className="w-full h-full" />
                        </div>
                        <div className="w-1/2 h-auto object-cover object-center overflow-hidden">
                            <img src="/image/h-3.avif" alt="h3 image" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}