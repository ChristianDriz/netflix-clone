import Image from "next/image"

type PrevProp = {
    handlePrev: () => void;
};

type NextProp = {
    handleNext: () => void;
};


export function PrevBtn({ handlePrev, } : PrevProp ) {
    return (
        <button 
            onClick={handlePrev} 
            className='w-6 h-[120px] bg-[#FFFFFF1A] hover:bg-[#333333] rounded-lg cursor-pointer'
        >
            <Image 
                src={'/icons/prevbtn.svg'}
                alt=""
                width={24}
                height={24}
                className=""
            />
        </button>
    )
}

export function NextBtn({ handleNext } : NextProp ) {
    return (
        <button 
            onClick={handleNext} 
            className="w-6 h-[120px] bg-[#FFFFFF1A] hover:bg-[#333333] rounded-lg cursor-pointer">
            <Image 
                src={'/icons/nextbtn.svg'}
                alt=""
                width={24}
                height={24}
                className=""
            />
        </button>
    )
}
