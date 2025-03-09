import Image from "next/image";
import { RefObject } from "react";

type CardProps  = {
    title?: string;
    name?: string;
    imgUrl: string;
    ranking: number;
    cardRef: RefObject<HTMLLIElement>;
    onCardClick: () => void;
}

export default function Card({ title, name, imgUrl, ranking, cardRef, onCardClick } : CardProps ) {
    return (
        <li ref={cardRef} className="snap-start scroll-ms-9 relative px-2.5 py-1 4xl:px-5.5 4xl:py-1.5 7xl:py-2 hover:scale-105 transition will-change-transform">
            <button onClick={onCardClick} className="cursor-pointer w-28 h-39 4xl:w-35 4xl:h-49 7xl:w-45 7xl:h-63 9xl:w-[214px] 9xl:h-[300px]">
                <Image 
                    src={imgUrl} 
                    alt={title || name || 'Trending item poster'}  // Fallback to 'Trending item' if both are missing
                    width={214} 
                    height={300}
                    className="rounded-lg w-full h-full bg-cover"
                />
                <div className="absolute z-10 left-0 -bottom-1.5 4xl:-bottom-2 font-bold text-[64px] 4xl:text-[80px] 7xl:text-[100px] 9xl:text-[120px]">
                    <span
                        data-content={ranking}
                        className="trending">
                        {ranking}
                    </span>
                </div>     
            </button>
            
        </li>
    )
}
