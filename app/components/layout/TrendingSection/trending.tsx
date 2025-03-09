"use client";

import Card from "./card";
import { PrevBtn, NextBtn } from "../../swiperBtn";
import { useModal } from "@/hooks/useModal";
import { useScroll } from "@/hooks/useScroll";
import TrendingItemInfo from "./modal_trendingInfo";


type TrendingItems = {
    title?: string;
    name?: string;
    poster_path: string;
    overview: string;
    backdrop_path: string;
    media_type: string;
    release_date?: Date;
    first_air_date?: Date;
    genre_ids: [];
};

type Props = {
    trending: TrendingItems[];
};

export default function Trending_Section({ trending }: Props) {
    
    const { isOpen, selectedItem, openModal, closeModal } = useModal();
    const { divRef, cardRef, showPrev, showNext, handlePrev, handleNext, onScroll } = useScroll();

    return (
        <section className="w-full px-6 sm:px-8 4xl:px-20 7xl:px-37 mb-14 4xl:mb-16 -mt-12 sm:-mt-8 ">
            <div className="max-w-7xl max-9xl:max-w-8xl mx-auto">
                {/* Section Title */}
                <h2 className="text-lg leading-5.5 4xl:text-2xl 4xl:leading-7 9xl:text-[32px] 9xl:leading-9 font-medium 9xl:font-bold">
                    Trending Now
                </h2>

                {/* Trending Cards Wrapper */}
                {trending.length > 0 ? (
                    <div className="relative w-full mt-6 max-9xl:mt-4 max-4xl:mt-3">
                        <ul
                            ref={divRef}
                            onScroll={onScroll}
                            className="snap-x scroll-smooth w-full overflow-x-auto overflow-y-hidden flex scrollbar-hide"
                        >
                            {/* Render each trending item */}
                            {trending.map((data, idx) => (
                                <Card 
                                    cardRef={cardRef}
                                    key={idx} 
                                    title={data.title || data.name} 
                                    imgUrl={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
                                    ranking={idx + 1} 
                                    onCardClick={() => openModal(
                                    { 
                                        backdrop_path: data.backdrop_path, 
                                        media_type: data.media_type, 
                                        release_date: data.release_date, 
                                        first_air_date: data.first_air_date, 
                                        overview: data.overview,
                                        genre_ids: data.genre_ids
                                    })}
                                /> 
                            ))}
                        </ul>

                        {/* Previous Button */}
                        <div
                            className={`absolute z-50 h-full left-0 bottom-0 pr-3 bg-black flex items-center transition duration-700 delay-300 
                                ${showPrev ? "-translate-x-1 opacity-100" : "-translate-x-9 opacity-0"}`}
                        >
                            <PrevBtn handlePrev={handlePrev} />
                        </div>

                        {/* Next Button */}
                        <div
                            className={`absolute z-50 h-full right-0 bottom-0 pl-3 bg-black flex items-center transition duration-700 delay-300 
                                ${showNext ? "translate-x-1 opacity-100" : "translate-x-9 opacity-0"}`}
                        >
                            <NextBtn handleNext={handleNext} />
                        </div>
                    </div>
                ) : (
                    // Fallback UI incase trending array is empty
                    <div className="text-center py-4">
                        <h2 className="text-xl font-bold text-white">No trending items found </h2>
                    </div>
                )}

                {/* Modal for trending item info */}
                <TrendingItemInfo isOpen={isOpen} selectedItem={selectedItem} closeModal={closeModal}/> 
            </div>
        </section>
    );
}
