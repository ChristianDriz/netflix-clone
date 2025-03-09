import { useState, useEffect, useRef } from "react"

export function useScroll() {
    
    const divRef = useRef<HTMLUListElement>(null); // Reference for the scrolling container (ul element)
    const cardRef = useRef<HTMLLIElement>(null!); // Reference for a single card element (li element) - used to get its width

    const [cardWidth, setCardWidth] = useState(258); // State to store card width (default: 258px)
    const [cardsPerScroll, setCardsPerScroll] = useState(0); // State to store how many cards should be scrolled at once based on screen size
    
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

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

    return { divRef, cardRef, showPrev, showNext, handlePrev, handleNext, onScroll };

}
