"use client";

import Card from "./card";
import { PrevBtn, NextBtn } from "../../swiperBtn";
import { useState, useRef, useEffect } from "react";

type TrendingItems = {
    title: string;
    imgUrl: string;
};

type Props = {
    trending: TrendingItems[];
};

export default function Trending_Section({ trending }: Props) {
    // Reference for the scrolling container (ul element)
    const divRef = useRef<HTMLUListElement>(null);

    // Reference for a single card element (li element) - used to get its width
    const cardRef = useRef<HTMLLIElement>(null!); 

    // State to manage the visibility of previous and next buttons
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    // State to store card width (default: 258px)
    const [cardWidth, setCardWidth] = useState(258);

    // State to store how many cards should be scrolled at once based on screen size
    const [cardsPerScroll, setCardsPerScroll] = useState(0);

    // Function to check if the scroll position allows showing prev/next buttons
    const onScroll = () => {
        if (!divRef.current) return;
    
        const { scrollLeft, scrollWidth, clientWidth } = divRef.current;
    
        // Show prev button if not at the start
        setShowPrev(scrollLeft > 0);

        // Show next button if not at the end
        setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // Function to update the number of visible cards based on screen width
    const updateWidth = () => {
        const breakpoints = [
            { max: 443, cards: 2 },
            { max: 575, cards: 3 },
            { max: 723, cards: 4 },
            { max: 959, cards: 5 },
            { max: 1079, cards: 4 },
            { max: 1279, cards: 5 },
            { max: 1415, cards: 4 },
            { max: 1919, cards: 5 },
        ];

        // Get current screen size
        const screenSize = window.innerWidth;

        // Find the matching breakpoint
        const match = breakpoints.find((bp) => screenSize <= bp.max);
        
        // Update the number of cards per scroll
        setCardsPerScroll(match ? match.cards : 4);
    
        // Update the card width using the ref
        if (cardRef.current) {
            setCardWidth(cardRef.current.clientWidth);
        }
    };

    // Run updateWidth on mount and when window resizes
    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Function to scroll left
    const handlePrev = () => {
        divRef.current?.scrollBy({ left: -cardsPerScroll * cardWidth });
    };

    // Function to scroll right
    const handleNext = () => {
        divRef.current?.scrollBy({ left: cardsPerScroll * cardWidth });
    };

    return (
        <section className="w-full px-6 sm:px-8 4xl:px-20 7xl:px-37 mb-14 4xl:mb-16 -mt-12 sm:-mt-8">
            <div className="max-w-7xl max-9xl:max-w-8xl mx-auto">
                {/* Section Title */}
                <h2 className="text-lg leading-5.5 4xl:text-2xl 4xl:leading-7 9xl:text-[32px] 9xl:leading-9 font-medium 9xl:font-bold">
                    Trending Now
                </h2>

                {/* Trending Cards Wrapper */}
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
                                title={data.title} 
                                imgUrl={data.imgUrl} 
                                ranking={idx + 1} 
                            /> 
                        ))}
                    </ul>

                    {/* Previous Button */}
                    <div
                        className={`absolute z-50 h-full left-0 bottom-0 pr-3 bg-black flex items-center transition duration-700 delay-300 
                            ${showPrev ? "-translate-x-0 opacity-100" : "-translate-x-9 opacity-0"}`}
                    >
                        <PrevBtn handlePrev={handlePrev} />
                    </div>

                    {/* Next Button */}
                    <div
                        className={`absolute z-50 h-full right-0 bottom-0 pl-3 bg-black flex items-center transition duration-700 delay-300 
                            ${showNext ? "translate-x-0 opacity-100" : "translate-x-9 opacity-0"}`}
                    >
                        <NextBtn handleNext={handleNext} />
                    </div>
                </div>
            </div>
        </section>
    );
}
