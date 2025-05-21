
export default function BackgroundVideo() {
    return <div className="h-[100vh] w-full  relative overflow-hidden  ">
        <video src="/video/background-video.mp4" muted loop autoPlay className="h-full w-full object-cover"></video>
    </div>
}