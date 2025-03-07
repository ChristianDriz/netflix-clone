import Image from "next/image";

type Props = {
    isHeroSection: boolean;
}

export default function GetStarted({ isHeroSection } : Props ) {
    return (
        <form >
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className={`flex flex-col ${isHeroSection ? 'items-center' : 'items-start'} gap-4 pt-4 sm:flex-row sm:gap-2 `}>
                <div className="w-full">
                    <input 
                        type="email" 
                        placeholder="Email address"
                        className="w-full outline outline-white/30 rounded-xs bg-black/30 px-4 py-3 sm:py-4"
                    />
                </div>
                <button 
                    className="bg-red hover:bg-dark-red flex justify-center items-center gap-2 text-lg px-4 py-2.5 rounded-sm sm:py-3.5 
                    sm:min-w-[176px] sm:gap-3 7xl:text-2xl 7xl:min-w-[206px] 7xl:leading-7"
                >
                    Get Started
                    <Image src={'/icons/arrow-right-white.svg'} alt="arrow-right" width={24} height={24}/>
                </button>
            </div>
        </form>
    )
}
