import Image from "next/image";
import { RefObject } from "react";

type TrendingItems = {
    title: string;
    imgUrl: string;
    ranking: number;
    cardRef: RefObject<HTMLLIElement>;
}

export default function Card({ title, imgUrl, ranking, cardRef } : TrendingItems) {
    return (
        <li ref={cardRef} className="snap-start scroll-ms-9 relative px-2.5 py-1 4xl:px-5.5 4xl:py-1.5 7xl:py-2 cursor-pointer hover:scale-105 transition will-change-transform">
            <div className="w-28 h-39 4xl:w-35 4xl:h-49 7xl:w-45 7xl:h-63 9xl:w-[214px] 9xl:h-[300px]">
                <Image 
                    src={imgUrl} 
                    alt={title} 
                    width={214} 
                    height={300}
                    className="rounded-lg w-full h-full bg-cover"
                />
            </div>
            <div className="absolute z-10 left-0 -bottom-1.5 4xl:-bottom-2 font-bold text-[64px] 4xl:text-[80px] 7xl:text-[100px] 9xl:text-[120px]">
                <span
                    data-content={ranking}
                    className="trending">
                    {ranking}
                </span>
            </div>          
        </li>
    )
}
