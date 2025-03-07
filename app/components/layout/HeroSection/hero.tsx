import GetStarted from "../../getstarted"

export default function Hero_Section() {
    return (
        <section className="relative flex pt-25 flex-col h-[664px] 4xl:h-[760px] 7xl:h-[888px] 9xl:h-[990px] ">            
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/poster/bg-2.jpg')] bg-cover bg-center -z-10 "></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/95 -z-10"></div>

            <div className="grow -mt-8 px-8 pb-8 flex items-center 9xl:pt-26"> 
                <div className="text-center sm:w-[432px] mx-auto 4xl:w-[508px] 7xl:w-[588px] 9xl:w-[664px] ">       
                    <h1 className="text-[32px] font-bold leading-[125%] mb-2 4xl:text-[40px] 7xl:mb-4 7xl:text-[56px] 7xl:font-extrabold 9xl:text-[64px] 9xl:mb-6"
                    >
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className="text-base leading-4.5 7xl:text-xl 7xl:leading-6 mb-4 4xl:mb-6 7xl:mb-8">
                        Starts at ₱149. Cancel anytime.
                    </p>
                    <div >
                        <GetStarted isHeroSection={true} />
                    </div>
                </div>  
            </div>   

            <div className="relative -z-10 h-25 flex justify-center overflow-hidden">
                <div className="curve w-[200%] sm:w-[180%] 4xl:w-[150%] 7xl:w-[130%]"></div> 
            </div>     
        </section>
    )
}
